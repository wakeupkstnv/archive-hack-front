import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const UploadForm = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  const handleFileRead = (file) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      handleFileRead(file);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setIsDragging(false);

    const file = event.dataTransfer.files[0];
    if (file) {
      setSelectedFile(file);
      handleFileRead(file);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = async () => {
    if (selectedFile) {
      setIsLoading(true);
      try {
        const formData = new FormData();
        formData.append('file', selectedFile);
        console.log('Uploading file:', selectedFile);

        // 1. Загружаем фото на сервер
        const uploadResponse = await axios.post('http://localhost:8000/api/aws/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        console.log(uploadResponse);
        const fileUrl = uploadResponse.data;  // Получаем URL загруженного файла
        console.log('File uploaded. URL:', fileUrl);

        // 2. Используем полученный URL для анализа
        const analyzeResponse = await axios.get(`http://localhost:8000/api/vision/analyze-url?image_url=${encodeURIComponent(fileUrl)}`, {
          headers: {
            'Content-Type': 'application/json',  // Добавьте заголовки, если нужно
          },
          responseType: 'arraybuffer'
        });

        console.log(analyzeResponse);
        // Преобразуем байты в Blob для создания PDF
        const pdfBlob = new Blob([analyzeResponse.data], { type: 'application/pdf' });

        // Сохраняем PDF файл
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(pdfBlob);
        link.download = 'analysis.pdf';
        link.click();

        // Перенаправляем на другую страницу
        navigate('/restored', { state: { data: analyzeResponse.data, link: link.href } });
      } catch (error) {
        console.error('Error during upload or analysis:', error);
        alert('An error occurred while processing the image. Please try again.');
      } finally {
        setIsLoading(false);
      }
    } else {
      alert('Please select a file first');
    }
  };

  return (
    <section className="py-72 bg-[#101010] text-white">
      <h2 className="text-3xl font-bold text-center mb-8">Upload an image to restore</h2>
      <p className="text-center mb-8 px-4">
        We'll use the latest AI technology to restore your photos. We accept most photo file types, including .jpg, .png, .tiff, or .heic.
      </p>
      <div className="max-w-md mx-auto px-4">
        <div
          className={`mb-4 p-4 border-2 ${isDragging ? 'border-green-500' : 'border-dashed border-gray-400'} rounded-lg text-center cursor-pointer`}
          onClick={handleUploadClick}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          {previewUrl ? (
            <img src={previewUrl} alt="Preview" className="max-w-full h-auto mb-4 rounded" />
          ) : (
            <p>{isDragging ? 'Drop your image here' : 'Click to upload or drag and drop your image here'}</p>
          )}
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/*"
            className="hidden"
          />
        </div>
        <button
          className="w-full bg-[#303030] text-white px-4 py-2 rounded hover:bg-[#404040] transition-colors flex justify-center items-center"
          onClick={handleSubmit}
          disabled={isLoading}
        >
          {isLoading ? (
            <svg
              className="animate-spin h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              ></path>
            </svg>
          ) : (
            'Restore Image'
          )}
        </button>
      </div>
    </section>
  );
};

export default UploadForm;

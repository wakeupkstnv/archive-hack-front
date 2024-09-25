import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/Header.jsx';

const RestoredImage = () => {
  const location = useLocation();
  const [restoredData, setRestoredData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { imageUrl } = location.state || {};



  useEffect(() => {
    const fetchRestoredData = async () => {
      try {
        const { data } = location.state;
        setRestoredData(data);
      } catch (error) {
        console.error('Error fetching restored data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRestoredData();
  }, [location.state]);

  const handleDownload = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/ernur/poka/delaet', {
        responseType: 'blob',
      });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'restored-image.jpg');
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error('Error downloading restored image:', error);
      alert('An error occurred while downloading the restored image. Please try again.');
    }
  };

  return (
    <div>
      <Header />
      <section className="w-full h-screen bg-[#101010] text-white flex flex-col md:flex-row justify-center items-center">
        <div className="flex flex-col items-center justify-center md:mr-8 mb-8 md:mb-0 max-w-md md:max-w-lg">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-8">Your restoration text</h2>
          {imageUrl ? (
            <img
              src={imageUrl}
              alt="Restored"
              className="max-w-full max-h-[33rem] object-contain rounded mb-4 md:mb-8"
            />
          ) : (
            <p className="text-lg md:text-xl">No image provided</p>
          )}
          <p className="text-base md:text-lg">Here is your restored photo. Enjoy the improved quality!</p>
        </div>
        <div className="w-full md:w-full max-w-md bg-[#1a1a1a] border border-[#2a2a2a] shadow-lg shadow-black/30 flex flex-col p-4 md:p-6 items-center justify-center">
          <h3 className="text-xl md:text-2xl font-bold mb-4">Restored Info</h3>
          {isLoading ? (
            <p className="text-base md:text-lg mb-4">Loading...</p>
          ) : (
            <p className="text-base md:text-lg mb-4 max-h-80 overflow-y-auto w-[calc(100%)]">
            {restoredData?.transformed_text}
            </p>
          )}
          <button className="bg-[#303030] hover:bg-[#404040] text-white font-bold py-2 px-4 rounded" onClick={handleDownload}>
            Download Restored Image
          </button>
        </div>
      </section>
    </div>
  );
};


export default RestoredImage;



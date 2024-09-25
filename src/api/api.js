import axios from 'axios';

const api = axios.create({
    baseURL: '/api'
});

export const uploadImage = (image) => {
    const formData = new FormData();
    formData.append('image', image);
    return api.post('/vision/analyze', formData);
};

export const downloadRestoredImage = () => {
    return api.get('/vision/download', { responseType: 'blob' });
};
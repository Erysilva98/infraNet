import axios from 'axios';
import jwt from 'jsonwebtoken';

const API_URL = 'http://localhost:8080/api/login';

export const login = async (matricula, senha) => {
    try {
        const response = await axios.post(API_URL, { matricula, senha });
        const { token } = response.data;
        localStorage.setItem('token', token);
        return { success: true, token };
    } catch (error) {
        return { success: false, message: error.response?.data?.error || 'Login failed' };
    }
};

export const getToken = () => {
    return localStorage.getItem('token');
};

export const isTokenValid = () => {
    const token = getToken();
    if (!token) {
        return false;
    }

    try {
        const decoded = jwt.decode(token);
        return decoded && decoded.exp > Date.now() / 1000;
    } catch (error) {
        return false;
    }
};

export const logout = () => {
    localStorage.removeItem('token');
};

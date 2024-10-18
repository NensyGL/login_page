import axios from 'axios';


const API_URL = 'https://jsonplaceholder.typicode.com'; // Mock API


export const login = async ({email, password, rememberUser}) => {
    try {
        const response = await axios.post(`${API_URL}/users`, { email, password, rememberUser });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const signUp = async ({email, password}) => {
    try {
        const response = await axios.post(`${API_URL}/users`, { email, password });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const forgotPass = async ({email}) => {
    try {
        const response = await axios.post(`${API_URL}/users`, { email });
        return response.data;
    } catch (error) {
        throw error;
    }
};
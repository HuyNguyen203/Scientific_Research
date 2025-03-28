import axios from 'axios';
import axiosInstance from './axiosInstance';
import { jwtDecode } from 'jwt-decode';

const refreshToken = async () => {
    try {
        const res = await axios.post('/auth/refresh', {
            withCredentials: true,
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const createAxios = (user, dispatch, stateSuccess) => {
    const newInstance = axiosInstance.create();
    newInstance.interceptors.request.use(
        async (config) => {
            let date = new Date();
            const decodedToken = jwtDecode(user?.accessToken);
            if (decodedToken.exp < date.getTime() / 1000) {
                const data = await refreshToken();
                const refreshUser = {
                    ...user,
                    accessToken: data.accessToken,
                };
                dispatch(stateSuccess(refreshUser));
                config.headers['token'] = 'Bearer' + data.accessToken;
            }
            return config;
        },
        (error) => {
            return Promise.reject(error);
        },
    );
    return newInstance;
};

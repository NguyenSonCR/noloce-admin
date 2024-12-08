import setAuthToken from '../setAuthToken';
import axiosJWT from '../setAxios';
import { LOCAL_STORAGE_TOKEN_NAME } from '../constants';
const authApi = {
    login: (formData) => {
        const url = '/admin/auth/login';
        return axiosJWT.post(url, formData);
    },
    register: (formData) => {
        const url = '/admin/auth/register';
        return axiosJWT.post(url, formData);
    },
    loadUser: () => {
        if (localStorage[LOCAL_STORAGE_TOKEN_NAME]) {
            setAuthToken(localStorage[LOCAL_STORAGE_TOKEN_NAME]);
        } else {
            setAuthToken();
        }
        const url = '/admin/auth';
        return axiosJWT.get(url);
    },
};

export default authApi;

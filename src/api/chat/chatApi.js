import axiosJWT from '../setAxios';
const chatApi = {
    getAll: () => {
        const url = '/admin/chat';
        return axiosJWT.get(url);
    },

    getChat: (username) => {
        const url = `/chat/${username}`;
        return axiosJWT.get(url, { params: { username } });
    },
};

export default chatApi;

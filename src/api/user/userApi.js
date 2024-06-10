import axiosJWT from '../setAxios';
const userApi = {
    getAllUser: () => {
        const url = `/admin/users/`;
        return axiosJWT.get(url);
    },
};

export default userApi;

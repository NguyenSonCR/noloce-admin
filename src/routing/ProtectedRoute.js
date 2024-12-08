import { Navigate } from 'react-router-dom';
import config from '~/config';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '~/layouts/components/Loading';
import { useEffect } from 'react';
import authApi from '~/api/auth/auth';
import { setAuth } from '~/slices/authSlice';
import { LOCAL_STORAGE_TOKEN_NAME } from '~/api/constants';

const ProtectedRoute = ({ children }) => {
    const authState = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!authState.isAuthenticated) {
            authApi
                .loadUser()
                .then((data) => {
                    if (data.success) {
                        dispatch(setAuth({ user: data.admin, isAuthenticated: true }));
                    }
                })
                .catch((error) => {
                    console.log(error);
                    localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME);
                    dispatch(setAuth({ user: null, isAuthenticated: false }));
                });
        }
        // eslint-disable-next-line
    }, [authState.isLoading]);

    if (authState.isLoading)
        return (
            <div className="grid wide">
                <Loading />
                <Loading />
                <Loading />
                <Loading />
            </div>
        );
    if (!authState.user) return <Navigate to={config.routes.login} replace />;
    return children;
};
export default ProtectedRoute;

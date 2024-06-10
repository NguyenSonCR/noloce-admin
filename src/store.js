import { configureStore } from '@reduxjs/toolkit';
import toastSlice from './slices/toastSlice';
import authSlice from './slices/authSlice';
import userSlice from './slices/userSlice';

export const store = configureStore({
    reducer: {
        toast: toastSlice,
        auth: authSlice,
        user: userSlice
    },
});

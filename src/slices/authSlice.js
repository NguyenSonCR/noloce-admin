import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
    isAuthenticated: false,
    isLoading: true,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuth: (state, action) => {
            state.user = action.payload.user;
            state.isAuthenticated = action.payload.isAuthenticated;
            state.isLoading = false;
        },
        logoutUser: (state) => {
            state.user = null;
            state.isAuthenticated = false;
            state.isLoading = false;
        },
    },
});

export const { setAuth, logoutUser } = authSlice.actions;

export default authSlice.reducer;

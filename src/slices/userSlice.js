import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    users: null,
    userActive: null,
};

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUsers: (state, action) => {
            state.users = action.payload.users;
        },
        setUserActive: (state, action) => {
            state.userActive = action.payload.user;
        },

        addMessageAdmin: (state, action) => {
            state.users = state.users.map((user, index) => {
                if (user.username === action.payload.userTo) {
                    const date = new Date().toISOString();
                    return {
                        ...user,
                        message: [
                            ...user.message,
                            {
                                username: action.payload.userFrom,
                                content: action.payload.content,
                                seen: false,
                                createAt: date,
                            },
                        ],
                    };
                } else {
                    return user;
                }
            });
        },

        addMessageServer: (state, action) => {
            const newUsers = state.users.map((user, index) => {
                if (user.username === action.payload.username) {
                    return action.payload;
                } else {
                    return user;
                }
            });

            const rangeUsers = newUsers.toSorted((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
            state.users = rangeUsers;
        },

        setSeenAdmin: (state, action) => {
            state.users = state.users.map((user, index) => {
                if (user.username === action.payload.user.username) {
                    if (user.message.length > 0) {
                        return {
                            ...user,
                            message: user.message.map((mess, index) => {
                                if (index === user.message.length - 1) {
                                    return {
                                        ...mess,
                                        seen: true,
                                    };
                                } else {
                                    return mess;
                                }
                            }),
                        };
                    }
                } else {
                    return user;
                }
            });
        },
    },
});

export const { setUsers, setUserActive, addMessageAdmin, addMessageServer, setSeenAdmin } = userSlice.actions;

export default userSlice.reducer;

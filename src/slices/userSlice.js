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
            const newUsers = state.users.map((user, index) => {
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
                                createdAt: date,
                            },
                        ],
                    };
                } else {
                    return user;
                }
            });
            const rangeUsers = newUsers.toSorted((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
            state.users = rangeUsers;
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
                if (user.username === action.payload.username && user.message.length > 0) {
                    const newMessage = user.message.map((mess, index) => {
                        if (mess.username === action.payload.username) {
                            return {
                                username: mess.username,
                                content: mess.content,
                                seen: true,
                                createdAt: mess.createdAt,
                            };
                        } else {
                            return mess;
                        }
                    });

                    return {
                        ...user,
                        message: newMessage,
                    };
                } else {
                    return user;
                }
            });
        },

        updatedUser: (state, action) => {
            const newUsers = state.users.map((user, index) => {
                if (user.username === action.payload.username) {
                    return action.payload;
                } else {
                    return user;
                }
            });
            state.users = newUsers;
        },
    },
});

export const { setUsers, setUserActive, addMessageAdmin, addMessageServer, setSeenAdmin, updatedUser } =
    userSlice.actions;

export default userSlice.reducer;

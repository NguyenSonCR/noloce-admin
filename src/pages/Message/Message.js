import classNames from 'classnames/bind';
import styles from './Message.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import MessageItem from '~/layouts/components/MessageItem';
import Content from './content';
import userApi from '~/api/user/userApi';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { socket } from '~/socket';
import { setUsers, setUserActive, addMessageServer, updatedUser } from '~/slices/userSlice';

const cx = classNames.bind(styles);
function Message() {
    const dispatch = useDispatch();
    const userState = useSelector((state) => state.user);
    const authState = useSelector((state) => state.auth);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const [newMessage, setNewMessage] = useState(false);
    const [events, setEvents] = useState([]);

    useEffect(() => {
        socket.connect();
        socket.emit('addUser', authState.user.username);
    }, []);

    useEffect(() => {
        const onGetUsers = (users) => {
            setEvents(events.concat(users));
            setOnlineUsers(users);
        };
        socket.on('getUsers', onGetUsers);
        return () => {
            socket.off('getUsers', onGetUsers);
        };
    }, [events]);

    useEffect(() => {
        const onGetMessage = (newUser) => {
            setEvents(events.concat(newUser));
            dispatch(addMessageServer(newUser));
        };
        socket.on('getMessage', onGetMessage);
        return () => {
            socket.off('getMessage', onGetMessage);
        };

        // eslint-disable-next-line
    }, [events]);

    // get all chat users
    useEffect(() => {
        userApi
            .getAllUser()
            .then((res) => {
                const rangeUsers = res.users.toSorted((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
                dispatch(setUsers({ users: rangeUsers }));
                if (res.users.length > 0) {
                    dispatch(setUserActive({ user: rangeUsers[0] }));
                }
            })
            .catch((error) => console.log(error));
        // eslint-disable-next-line
    }, []);

    return (
        <div className={cx('wrapper', ['row', 'no-gutters'])}>
            <div className={cx(['col', 'l-5', 'm-5'])}>
                <div className={cx('sesion')}>
                    <div className={cx('header')}>
                        <p className={cx('title')}>Đoạn chat</p>
                    </div>
                    <div className={cx('search')}>
                        <label className={cx('search-wrapper')}>
                            <span className={cx('search-icon')}>
                                <FontAwesomeIcon icon={faMagnifyingGlass} className={cx('search-btn-icon')} />
                            </span>
                            <input className={cx('search-input')} placeholder="Tìm kiếm trên Messenger"></input>
                        </label>
                    </div>

                    <div className={cx('content')}>
                        {userState?.users?.map((user, index) => {
                            return (
                                <MessageItem
                                    setNewMessage={setNewMessage}
                                    socket={socket}
                                    onlineUsers={onlineUsers}
                                    user={user}
                                    key={index}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className={cx(['col', 'l-7', 'm-7'], 'col-2')}>
                <Content socket={socket} newMessage={newMessage} />
            </div>
        </div>
    );
}

export default Message;

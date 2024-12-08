import images from '~/assets/img';
import styles from './MessageItem.module.scss';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUserActive, setSeenAdmin, updatedUser } from '~/slices/userSlice';

const cx = classNames.bind(styles);
function MessageItem({ user, onlineUsers, socket, setNewMessage }) {
    const userState = useSelector((state) => state.user);
    const [online, setOnline] = useState(false);
    const [lastMessage, setLastMessage] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        setLastMessage(user?.message?.[user.message.length - 1]);
        // eslint-disable-next-line
    }, [user]);

    useEffect(() => {
        setOnline(onlineUsers.find((userOnline) => userOnline.username === user?.username));
        // eslint-disable-next-line
    }, [onlineUsers, user]);

    const handleOnClick = () => {
        dispatch(setUserActive({ user: user }));
        dispatch(setSeenAdmin(user));
        setNewMessage(false);
    };

    return (
        <div
            className={cx('wrapper', userState.userActive?.username === user?.username && 'active')}
            onClick={handleOnClick}
        >
            <div className={cx('avatar')}>
                <img src={images.avatar} alt="avatar" className={cx('img')}></img>
                {<span className={cx(online ? 'user-online' : 'user-offline')}></span>}
            </div>
            <div className={cx('content')}>
                <div className={cx('name')}>{user?.username}</div>
                <div
                    className={cx(
                        'message',
                        lastMessage?.username !== 'admin' && lastMessage?.seen === false && 'notRead',
                    )}
                >
                    {lastMessage?.username === 'admin' && `Bạn:`} {lastMessage?.content}
                </div>
            </div>
            <div className={cx('notify')}>
                {lastMessage?.username === 'admin' && lastMessage.seen && (
                    <img src={images.avatar} alt="avatar" className={cx('notify-img')}></img>
                )}
            </div>
        </div>
    );
}

export default MessageItem;

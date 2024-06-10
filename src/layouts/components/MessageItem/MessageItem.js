import images from '~/assets/img';
import styles from './MessageItem.module.scss';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUserActive, setSeenAdmin } from '~/slices/userSlice';
import { socket } from '~/socket';

const cx = classNames.bind(styles);
function MessageItem({ user }) {
    const userState = useSelector((state) => state.user);

    const lengthMess = user?.message.length;
    const lastMessage = user?.message?.[lengthMess - 1];

    const [message, setMessage] = useState(lastMessage);
    const dispatch = useDispatch();

    useEffect(() => {
        setMessage(lastMessage);
        // eslint-disable-next-line
    }, [user]);

    const handleOnClick = () => {
        dispatch(setUserActive({ user: user }));
        socket.emit('adminSeen', {
            username: user.username,
            seen: true,
        });
        dispatch(
            setSeenAdmin({
                user: user,
            }),
        );
    };
    return (
        <div
            className={cx('wrapper', userState.userActive?.username === user.username && 'active')}
            onClick={handleOnClick}
        >
            <div className={cx('avatar')}>
                <img src={images.avatar} alt="avatar" className={cx('img')}></img>
            </div>
            <div className={cx('content')}>
                <div className={cx('name')}>{user?.username}</div>
                <div
                    className={cx(
                        'message',
                        message?.seen === false && user.username !== userState.userActive?.username && 'notRead',
                    )}
                >
                    {message?.username === 'admin' && `Bạn:`} {message?.content}
                </div>
            </div>
            <div className={cx('notify')}>
                {message?.username === 'admin' && (
                    <img src={images.avatar} alt="avatar" className={cx('notify-img')}></img>
                )}
            </div>
        </div>
    );
}

export default MessageItem;

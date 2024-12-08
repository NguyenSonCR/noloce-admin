import classNames from 'classnames/bind';
import styles from './Content.module.scss';
import images from '~/assets/img';
import { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addMessageAdmin } from '~/slices/userSlice';
import { AiOutlineSend } from 'react-icons/ai';
import ContentItemUser from '../contentItemUser';
import ContentItemAdmin from '../contentItemAdmin';

const cx = classNames.bind(styles);
function Content({ socket, newMessage }) {
    const userState = useSelector((state) => state.user);
    const authState = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const [message, setMessage] = useState([]);
    const [userTyping, setUserTyping] = useState(null);
    useEffect(() => {
        if (userState.userActive && userState.users) {
            const user = userState.users.find((user) => user.username === userState.userActive.username);
            if (user?.message) setMessage(user.message);
        }
        // eslint-disable-next-line
    }, [userState]);

    const [chatMess, setChatMess] = useState('');
    const [focusInput, setFocusInput] = useState(false);

    const inputRef = useRef();

    const handleEnter = (event) => {
        if (event.key === 'Enter') {
            onSubmit(event);
        }
    };
    // when submit

    const onSubmit = async (event) => {
        event.preventDefault();
        if (chatMess.trim().length === 0) return;
        dispatch(
            addMessageAdmin({
                userFrom: 'admin',
                userTo: userState.userActive.username,
                content: chatMess,
                seen: false,
            }),
        );
        setChatMess('');
        inputRef.current.innerText = '';

        try {
            await socket.emit('sendMessage', {
                senderUsername: authState.user.username,
                recieverUsername: userState.userActive.username,
                username: userState.userActive.username,
                message: chatMess,
            });
        } catch (error) {
            console.log(error);
        }
    };

    // typing
    const scroll = useRef();
    const [notifyNewMessage, setNotifyNewMessage] = useState(null);

    useEffect(() => {
        scroll?.current.scrollIntoView({
            behavior: 'smooth',
            block: 'end',
        });
    }, [message]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className={cx('info')}>
                    <div className={cx('avatar')}>
                        <img src={images.avatar} alt="avatar" className={cx('avatar-img')}></img>
                    </div>
                    <div className={cx('info-content')}>
                        <p className={cx('username')}> {userState.userActive?.username}</p>
                        <p className={cx('offline')}> Hoạt động 15 phút trước</p>
                    </div>
                </div>
                <div className={cx('action')}></div>
            </div>
            <div className={cx('content')}>
                <div className={cx('content-header')}>
                    <img className={cx('header-img')} src={images.avatar} alt=""></img>
                    <span className={cx('header-username')}>{userState.userActive?.username}</span>
                </div>
                <div className={cx('content-container')}>
                    <div className={cx('message')}>
                        {message &&
                            message.length > 0 &&
                            message.map((mess, index) => {
                                // crurrent date
                                const messageDate = new Date(mess.createdAt).getDate();
                                const messageMonth = new Date(mess.createdAt).getMonth() + 1;
                                const messageYear = new Date(mess.createdAt).getFullYear();
                                let date = `${messageDate} tháng ${messageMonth}, ${messageYear}`;
                                let valueDate = date;
                                // prevous date
                                const messagePreDate =
                                    index > 0 ? new Date(message[index - 1].createdAt).getDate() : null;
                                const messagePreMonth =
                                    index > 0 ? new Date(message[index - 1].createdAt).getMonth() + 1 : null;
                                const messagePreYear =
                                    index > 0 ? new Date(message[index - 1].createdAt).getFullYear() : null;

                                let preDate =
                                    index !== 0
                                        ? `${messagePreDate} tháng ${messagePreMonth}, ${messagePreYear}`
                                        : date;

                                if (index === 0) {
                                    valueDate = date;
                                } else if (index !== 0 && date !== preDate) {
                                    valueDate = date;
                                } else {
                                    valueDate = null;
                                }

                                if (mess?.username === 'admin') {
                                    return (
                                        <div className={cx('message-item')} key={index}>
                                            {valueDate && <div className={cx('mess-date')}>{valueDate}</div>}
                                            <ContentItemAdmin data={{ message, index, mess, date, preDate }} />
                                        </div>
                                    );
                                } else {
                                    return (
                                        <div className={cx('message-item')} key={index}>
                                            {valueDate && <div className={cx('mess-date')}>{valueDate}</div>}
                                            <ContentItemUser data={{ message, index, mess, date, preDate }} />
                                        </div>
                                    );
                                }
                            })}

                        {message.length > 0 &&
                            message[message.length - 1].username === 'admin' &&
                            message[message.length - 1].seen && (
                                <div className={cx('avatar-notify')}>
                                    <img src={images.avatar} alt="avatar" className={cx('avtar-notify-img')}></img>
                                </div>
                            )}
                        {userTyping && <div className={cx('loader')}></div>}
                        {/* {notifyNewMessage  */}

                        <span ref={scroll}></span>
                    </div>
                </div>
            </div>
            <div className={cx('input-group')}>
                {notifyNewMessage && <div className={cx('notify-new-message')}>{1} tin nhắn mới</div>}
                <div
                    ref={inputRef}
                    spellCheck={false}
                    onFocus={() => {
                        setFocusInput(true);
                    }}
                    onBlur={() => {
                        setFocusInput(false);
                    }}
                    onKeyDown={(event) => handleEnter(event)}
                    contentEditable={true}
                    className={cx('chat-input')}
                    onInput={(event) => {
                        setChatMess(event.target.innerText);
                    }}
                ></div>
                {!focusInput && chatMess.length === 0 && <div className={cx('chat-input-lable')}>Aa</div>}

                <div className={cx('input-icon')} onClick={onSubmit}>
                    {chatMess?.trim().length === 0 ? (
                        <AiOutlineSend className={cx('input-icon-send')} />
                    ) : (
                        <AiOutlineSend />
                    )}
                </div>
            </div>
        </div>
    );
}

export default Content;

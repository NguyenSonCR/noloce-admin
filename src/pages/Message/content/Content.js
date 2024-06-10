import classNames from 'classnames/bind';
import styles from './Content.module.scss';
import images from '~/assets/img';
import { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { socket } from '~/socket';
import { addMessageAdmin } from '~/slices/userSlice';
import { AiOutlineSend } from 'react-icons/ai';
import ContentItemUser from '../contentItemUser';
import ContentItemAdmin from '../contentItemAdmin';

const cx = classNames.bind(styles);
function Content() {
    const userState = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const [message, setMessage] = useState([]);
    useEffect(() => {
        if (userState.userActive) {
            setMessage(userState.users.find((user) => user.username === userState.userActive.username).message);
        }
        // eslint-disable-next-line
    }, [userState]);

    const [chatMess, setChatMess] = useState('');
    const [focusInput, setFocusInput] = useState(false);
    const [typingStatus, setTypingStatus] = useState('');

    const inputRef = useRef();

    useEffect(() => {
        socket.on('typingResponse', (data) => setTypingStatus(data));
        return () => {
            socket.off('typingResponse', (data) => setTypingStatus(data));
        };
        // eslint-disable-next-line
    }, [socket]);

    useEffect(() => {
        socket.on('typingBlurResponse', (data) => setTypingStatus(data));
        return () => {
            socket.off('typingBlurResponse', (data) => setTypingStatus(data));
        };
        // eslint-disable-next-line
    }, [socket]);

    const handleTypingBlur = () => {
        socket.emit('typingBlur', '');
    };

    const handleTyping = (event) => {
        socket.emit('typing', `${userState.userActive.username} is typing`);
        if (event.key === 'Enter') {
            onSubmit(event);
        }
    };

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
            await socket.emit('adminChat', {
                userFrom: 'admin',
                userTo: userState.userActive.username,
                content: chatMess,
                seen: false,
            });
        } catch (error) {
            console.log(error);
        }
    };

    // typing

    const scroll = useRef();

    useEffect(() => {
        scroll.current.scrollIntoView({
            behavior: 'smooth',
            block: 'end',
        });
        // eslint-disable-next-line
    }, [message]);

    useEffect(() => {
        scroll?.current.scrollIntoView({
            behavior: 'smooth',
            block: 'end',
        });
    }, [typingStatus]);

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
                                const messageDate = new Date(mess.createAt).getDate();
                                const messageMonth = new Date(mess.createAt).getMonth();
                                const messageYear = new Date(mess.createAt).getFullYear();
                                let date = `${messageDate} tháng ${messageMonth}, ${messageYear}`;
                                let valueDate = date;
                                // prevous date
                                const messagePreDate =
                                    index > 0 ? new Date(message[index - 1].createAt).getDate() : null;
                                const messagePreMonth =
                                    index > 0 ? new Date(message[index - 1].createAt).getMonth() : null;
                                const messagePreYear =
                                    index > 0 ? new Date(message[index - 1].createAt).getFullYear() : null;

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
                                        <div className={cx('message')} key={index}>
                                            {valueDate && <div className={cx('mess-date')}>{valueDate}</div>}
                                            <ContentItemAdmin data={{ message, index, mess, date, preDate }} />
                                        </div>
                                    );
                                } else {
                                    return (
                                        <div className={cx('message')} key={index}>
                                            {valueDate && <div className={cx('mess-date')}>{valueDate}</div>}
                                            <ContentItemUser data={{ message, index, mess, date, preDate }} />
                                        </div>
                                    );
                                }
                            })}

                        <div className={cx('avatar-notify')}>
                            <img src={images.avatar} alt="avatar" className={cx('avtar-notify-img')}></img>
                        </div>
                        <span ref={scroll}></span>
                    </div>
                </div>
            </div>
            <div className={cx('input-group')}>
                <div
                    ref={inputRef}
                    spellCheck={false}
                    onFocus={() => setFocusInput(true)}
                    onBlur={() => {
                        handleTypingBlur();
                        setFocusInput(false);
                    }}
                    onKeyDown={(event) => handleTyping(event)}
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

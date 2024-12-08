import classNames from 'classnames/bind';
import styles from './ChatBot.module.scss';
import { useEffect, useRef, useState } from 'react';
import { BsChevronDown, BsChevronLeft } from 'react-icons/bs';
import { BiUser } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import Button from '~/components/Button';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { AiFillFacebook, AiOutlineSend } from 'react-icons/ai';
import config from '~/config';
import { socket } from '~/socket';
import chatApi from '~/api/chat/chatApi';
import images from '~/assets/img';

const cx = classNames.bind(styles);
function ChatBot() {
    const userState = useSelector((state) => state.user);
    const [toggle, setToggle] = useState(false);
    const [time, setTime] = useState(1);
    const [formShow, setFormShow] = useState('login');
    const [typingStatus, setTypingStatus] = useState('');

    const [formValue, setFormValue] = useState({
        username: '',
        email: '',
        phonenumber: '',
    });

    useEffect(() => {
        socket.on('typingResponse', (data) => setTypingStatus(data));
        return () => {
            socket.off('typingResponse', (data) => setTypingStatus(data));
        };
    }, [socket]);

    useEffect(() => {
        socket.on('typingBlurResponse', (data) => setTypingStatus(data));
        return () => {
            socket.off('typingBlurResponse', (data) => setTypingStatus(data));
        };
    }, [socket]);

    useEffect(() => {
        if (userState.user) {
            setFormShow('chat');
        }
    }, [userState?.user]);

    const [validate, setValidate] = useState({
        username: '',
        email: '',
        phonenumber: '',
    });

    const onFocus = (event) => {
        setValidate({
            ...validate,
            [event.target.name]: '',
        });
    };

    const onBlur = (event) => {
        switch (event.target.name) {
            case 'username':
                if (formValue.username.length === 0) {
                    setValidate({
                        ...validate,
                        username: 'Bạn chưa nhập họ tên',
                    });
                }
                break;

            case 'email':
                if (formValue.email.length === 0) {
                    setValidate({
                        ...validate,
                        email: 'Bạn chưa nhập email',
                    });
                } else if (
                    !formValue.email
                        .toLowerCase()
                        .match(
                            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        )
                ) {
                    setValidate({
                        ...validate,
                        email: 'Email không đúng định dạng',
                    });
                }
                break;

            case 'phonenumber':
                if (formValue.phonenumber.length === 0) {
                    setValidate({
                        ...validate,
                        phonenumber: 'Bạn chưa nhập số điện thoại',
                    });
                } else if (!formValue.phonenumber.match(/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/)) {
                    setValidate({
                        ...validate,
                        phonenumber: 'Số điện thoại không đúng',
                    });
                }
                break;

            default:
                break;
        }
    };

    const onChangeFormValue = (event) => {
        setFormValue({
            ...formValue,
            [event.target.name]: event.target.value,
        });
    };

    const [chatMess, setChatMess] = useState('');
    const [data, setData] = useState([]);

    const onSubmit = async (event) => {
        event.preventDefault();
        if (chatMess.trim().length === 0) return;
        setData([
            ...data,
            {
                username: 'admin',
                message: chatMess,
            },
        ]);
        try {
            if (userState?.user) {
                await socket.emit('adminChat', {
                    username: 'son',
                    message: chatMess,
                });
                setChatMess('');
                inputRef.current.innerText = '';
            } else {
                console.log('chua dang nhap');
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleTyping = (event) => {
        socket.emit('typing', `${userState?.user?.username} is typing`);
        if (event.key === 'Enter') {
            onSubmit(event);
        }
    };

    const handleTypingBlur = () => {
        socket.emit('typingBlur', '');
    };

    useEffect(() => {
        if (userState.user) {
            chatApi.getChat('son').then((res) => {
                setData(res.chat.content);
            });
        }
        // eslint-disable-next-line
    }, [userState?.user]);

    const scroll = useRef();

    useEffect(() => {
        socket.on('serverChatMess', (mess) => {
            setData([...data, mess]);
        });
        return () => {
            socket.off('serverChatMess');
        };
        // eslint-disable-next-line
    }, [socket, data]);

    useEffect(() => {
        scroll.current.scrollIntoView({
            behavior: 'smooth',
            block: 'end',
        });
        // eslint-disable-next-line
    }, [data]);

    useEffect(() => {
        if (time === 2) {
            scroll?.current.scrollIntoView({
                behavior: 'auto',
                block: 'end',
            });
        }
    }, [time]);

    useEffect(() => {
        scroll?.current.scrollIntoView({
            behavior: 'smooth',
            block: 'end',
        });
    }, [typingStatus]);

    const [focusInput, setFocusInput] = useState(false);
    const inputRef = useRef();

    return (
        <div className={cx('wrapper')}>
            <div
                className={cx('icon', toggle && 'hidden')}
                onClick={() => {
                    setToggle((pre) => !pre);
                    setTime((pre) => pre + 1);
                }}
            >
                <img alt="" className={cx('chat-image')} src={images.chatImage}></img>
            </div>
            <div className={cx('content', toggle && 'show', formShow === 'chat' && 'chat')}>
                <div className={cx('header')}>
                    {formShow === 'login' ? (
                        <div className={cx('admin')}>
                            <span className={cx('admin-icon')}></span>
                            <p className={cx('admin-text')}>Nguyễn Sơn</p>
                        </div>
                    ) : userState?.user === null ? (
                        <BsChevronLeft className={cx('header-icon')} onClick={() => setFormShow('login')} />
                    ) : (
                        <div></div>
                    )}
                    <BsChevronDown
                        className={cx('header-icon')}
                        onClick={() => {
                            setToggle((pre) => !pre);
                        }}
                    />
                </div>
                {!userState?.user && (
                    <div className={cx('body', formShow === 'login' && 'show')}>
                        <div className={cx('secsion')}>
                            <p className={cx('secsion-text')}>Vui lòng nhập thông tin trước khi chat</p>
                            <Button className={cx('button')} to={config.routes.login} primary>
                                Đã có tài khoản
                            </Button>
                            <Button className={cx('button')} primary onClick={() => setFormShow('register')}>
                                Chưa có tài khoản
                            </Button>
                        </div>
                        <div className={cx('social')}>
                            <p>Hoặc quý khách có thể chat qua một trong các kênh sau đây</p>
                            <AiFillFacebook className={cx('social-icon')} />
                        </div>
                    </div>
                )}
                {!userState?.user && (
                    <div className={cx('form', formShow === 'register' && 'show')}>
                        <div className={cx('form-group')}>
                            <div className={cx('form-input-group')}>
                                <input
                                    name="username"
                                    className={cx('form-input')}
                                    autoComplete="off"
                                    onFocus={onFocus}
                                    onBlur={onBlur}
                                    onKeyDown={(event) => handleTyping(event)}
                                    value={formValue.username}
                                    onChange={onChangeFormValue}
                                    placeholder="Họ và tên"
                                ></input>
                                <BiUser className={cx('form-icon')} />
                            </div>

                            <span className={cx('form-validate')}>{validate.username}</span>
                        </div>
                        <div className={cx('form-group')}>
                            <div className={cx('form-input-group')}>
                                <input
                                    name="email"
                                    autoComplete="off"
                                    className={cx('form-input')}
                                    value={formValue.email}
                                    onChange={onChangeFormValue}
                                    onFocus={onFocus}
                                    onBlur={onBlur}
                                    placeholder="Email"
                                ></input>
                                <AiOutlineMail className={cx('form-icon')} />
                            </div>
                            <span className={cx('form-validate')}>{validate.email}</span>
                        </div>
                        <div className={cx('form-group')}>
                            <div className={cx('form-input-group')}>
                                <input
                                    name="phonenumber"
                                    autoComplete="off"
                                    className={cx('form-input')}
                                    value={formValue.phonenumber}
                                    onChange={onChangeFormValue}
                                    onFocus={onFocus}
                                    onBlur={onBlur}
                                    placeholder="Số điện thoại"
                                ></input>
                                <AiOutlinePhone className={cx('form-icon')} />
                            </div>
                            <span className={cx('form-validate')}>{validate.phonenumber}</span>
                        </div>
                        <div className={cx('action')}>
                            {userState?.user && (
                                <Button
                                    primary
                                    onClick={() => {
                                        setFormShow('chat');
                                    }}
                                >
                                    Bắt đầu chat
                                </Button>
                            )}
                        </div>
                    </div>
                )}
                <div className={cx('chat-container', formShow === 'chat' && 'show')}>
                    <div className={cx('chat-contain')}>
                        <div className={cx('chat-contain-wrapper')}>
                            {data.map((mess, index) =>
                                mess.username === 'admin' ? (
                                    <li key={index} className={cx('chat-user')}>
                                        {mess.message}
                                    </li>
                                ) : (
                                    <li key={index} className={cx('chat-admin')}>
                                        {mess.message}
                                    </li>
                                ),
                            )}
                            {typingStatus !== '' && (
                                <div className={cx('typing')}>
                                    <div className={cx('typing__dot')}></div>
                                    <div className={cx('typing__dot')}></div>
                                    <div className={cx('typing__dot')}></div>
                                </div>
                            )}
                            <span ref={scroll}></span>
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
            </div>
        </div>
    );
}

export default ChatBot;

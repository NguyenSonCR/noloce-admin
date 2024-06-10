import classNames from 'classnames/bind';
import styles from './ContentItemUser.module.scss';
import images from '~/assets/img';

const cx = classNames.bind(styles);

function ContentItemUser({ data }) {
    const { message, index, mess, date, preDate } = data;
    let element = null;
    const messageDate = index < message.length - 1 && new Date(message[index + 1]?.createAt).getDate();
    const messageMonth = index < message.length - 1 && new Date(message[index + 1]?.createAt).getMonth();
    const messageYear = index < message.length - 1 && new Date(message[index + 1]?.createAt).getFullYear();
    let nextDate = index < message.length - 1 ? `${messageDate} tháng ${messageMonth}, ${messageYear}` : null;
    const nextUser = index + 1 < message.length ? message[index + 1].username : null;
    const preUser = index > 0 ? message[index - 1].username : null;

    if (index < message.length - 1 && message[index + 1].username === mess.username && date === nextDate) {
        // no avatar
        if (nextUser === mess.username && preUser === mess.username) {
            // many message
            element = (
                <div className={cx('user-mess')}>
                    <div className={cx('user-mess-avatar')}>
                        <div className={cx('user-mess-img-no')}></div>
                    </div>
                    <div className={cx('user-mess-content')}>
                        <div className={cx('user-mess-detail', 'many-message')}>{mess.content}</div>
                    </div>
                </div>
            );
        } else if (nextUser === mess.username && preUser !== mess.username) {
            // first message
            element = (
                <div className={cx('user-mess')}>
                    <div className={cx('user-mess-avatar')}>
                        <div className={cx('user-mess-img-no')}></div>
                    </div>
                    <div className={cx('user-mess-content')}>
                        <div className={cx('user-mess-detail', 'first-child')}>{mess.content}</div>
                    </div>
                </div>
            );
        } else if (nextUser !== mess.username && preUser === mess.username) {
            // last message
            element = (
                <div className={cx('user-mess')}>
                    <div className={cx('user-mess-avatar')}>
                        <div className={cx('user-mess-img-no')}></div>
                    </div>
                    <div className={cx('user-mess-content')}>
                        <div className={cx('user-mess-detail', 'last-child')}>{mess.content}</div>
                    </div>
                </div>
            );
        } else {
            element = (
                <div className={cx('user-mess')}>
                    <div className={cx('user-mess-avatar')}>
                        <div className={cx('user-mess-img-no')}></div>
                    </div>
                    <div className={cx('user-mess-content')}>
                        <div className={cx('user-mess-detail')}>{mess.content}</div>
                    </div>
                </div>
            );
        }
    } else {
        // have avatar
        if (preUser === 'admin' || preUser === null || preDate !== date) {
            element = (
                <div className={cx('user-mess')}>
                    <div className={cx('user-mess-avatar')}>
                        <img src={images.avatar} alt="avatar" className={cx('user-mess-img')}></img>
                    </div>
                    <div className={cx('user-mess-content')}>
                        <div className={cx('user-mess-detail')}>{mess.content}</div>
                    </div>
                </div>
            );
        } else {
            element = (
                <div className={cx('user-mess')}>
                    <div className={cx('user-mess-avatar')}>
                        <img src={images.avatar} alt="avatar" className={cx('user-mess-img')}></img>
                    </div>
                    <div className={cx('user-mess-content')}>
                        <div className={cx('user-mess-detail', 'last-child')}>{mess.content}</div>
                    </div>
                </div>
            );
        }
    }
    return element;
}

export default ContentItemUser;

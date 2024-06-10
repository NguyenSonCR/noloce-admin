import classNames from 'classnames/bind';
import styles from './ContentItemAdmin.module.scss';

const cx = classNames.bind(styles);

function ContentItemAdmin({ data }) {
    const { message, index, mess, date, preDate } = data;
    let element = null;
    const nextUser = index + 1 < message.length ? message[index + 1].username : null;
    const preUser = index > 0 ? message[index - 1].username : null;

    // many message from admin
    if (nextUser === 'admin' && preUser === 'admin') {
        element = (
            <div className={cx('admin-mess')} key={index}>
                <div className={cx('admin-mess-content', 'many-message')}>{mess.content}</div>
            </div>
        );
    } else if (nextUser === 'admin' && preUser && preUser !== 'admin') {
        element = (
            <div className={cx('admin-mess')} key={index}>
                <div className={cx('admin-mess-content', 'first-child')}>{mess.content}</div>
            </div>
        );
    } else if (nextUser !== 'admin' && preUser === 'admin') {
        element = (
            <div className={cx('admin-mess')} key={index}>
                <div className={cx('admin-mess-content', 'last-child')}>{mess.content}</div>
            </div>
        );
    } else {
        element = (
            <div className={cx('admin-mess')} key={index}>
                <div className={cx('admin-mess-content')}>{mess.content}</div>
            </div>
        );
    }

    return element;
}

export default ContentItemAdmin;

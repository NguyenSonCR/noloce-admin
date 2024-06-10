import classNames from 'classnames/bind';
import styles from './Navigation.module.scss';
import config from '~/config';
import NavItem from './NavItem';

const cx = classNames.bind(styles);

function Navigation() {
    const NAV_MENU = [
        {
            title: 'Giới thiệu',
            code: 'home',
            to: config.routes.website,
        },
        {
            title: 'Quy trình',
            code: '',
            to: config.routes.procedure,
        },
        {
            title: 'Bảng giá',
            code: 'price',
            to: config.routes.price,
        },

        {
            title: 'Demo',
            code: 'demo',
            to: config.routes.demo,
        },

        {
            title: 'Message',
            code: 'message',
            to: config.routes.message,
        },
    ];

    return (
        <nav className={cx('wrapper')}>
            {NAV_MENU.map((item, index) => {
                return <NavItem key={index} data={item} />;
            })}
        </nav>
    );
}

export default Navigation;

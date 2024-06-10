import Header from '~/layouts/components/Header';
import Sidebar from '~/layouts/components/Sidebar';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import useViewport from '~/hooks/useViewport';
import NaviMobi from '~/layouts/components/NaviMobi';
import Footer from '~/layouts/components/Footer';
import ChatBot from '~/layouts/components/ChatBot';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    const viewPort = useViewport();
    const isMobile = viewPort.width < 740;

    const handleClosePopup = () => {
        // dispatch(setPopup(false));
    };

    let body = null;
    if (isMobile) {
        body = (
            <div className={cx('mobile')}>
                <div className={cx('wrapper')} onClick={handleClosePopup}>
                    <Header />
                    <div className={cx('container')}>
                        <div className={cx(['grid'])}>
                            <div className={cx('content')}>{children}</div>
                        </div>
                    </div>
                    <NaviMobi />
                    <ChatBot />
                </div>
            </div>
        );
    }

    if (!isMobile) {
        body = (
            <div
                className={cx('wrapper')}
                onClick={() => {
                    handleClosePopup();
                }}
            >
                <Header />
                <div className={cx('container')}>
                    <div className={cx('sidebar')}>
                        <Sidebar />
                    </div>

                    <div className={cx('content')}>{children}</div>
                </div>
                <Footer />
                {/* <ChatBot /> */}
            </div>
        );
    }
    return body;
}

export default DefaultLayout;

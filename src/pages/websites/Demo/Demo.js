import classNames from 'classnames/bind';
import styles from './Demo.module.scss';
import Button from '~/components/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Demo() {
    const handleClickSearch = () => {};
    const handleClear = () => {};
    return (
        <div className={cx('wrapper')}>
            <div className={cx('categories')}>
                <div className={cx('category')}>
                    <p className={cx('category-text')}>Tất cả</p>
                </div>
                <div className={cx('category')}>
                    <p className={cx('category-text')}>Công ty</p>
                </div>
                <div className={cx('category')}>
                    <p className={cx('category-text')}>Shop kinh doanh</p>
                </div>
                <div className={cx('category')}>
                    <p className={cx('category-text')}>Nhà hàng</p>
                </div>
                <div className={cx('category')}>
                    <p className={cx('category-text')}>Khách sạn</p>
                </div>
                <div className={cx('category')}>
                    <p className={cx('category-text')}>Nội thất</p>
                </div>
                <div className={cx('category')}>
                    <p className={cx('category-text')}>Du lịch</p>
                </div>
                <div className={cx('category')}>
                    <p className={cx('category-text')}>Mỹ phẩm</p>
                </div>
                <div className={cx('category')}>
                    <p className={cx('category-text')}>Tin tức</p>
                </div>
                <div className={cx('category')}>
                    <p className={cx('category-text')}>Giáo dục</p>
                </div>
                <div className={cx('category')}>
                    <p className={cx('category-text')}>Website khác</p>
                </div>
            </div>
            <div className={cx('search')}>
                <div className={cx('search-contain')}>
                    <input
                        autoComplete="off"
                        name="search"
                        // ref={inputRef}
                        className={cx('input')}
                        placeholder="Tìm kiếm theo tên, mã giao diện... "
                        spellCheck={false}
                        // onChange={handleOnChange}
                        // onKeyUp={handleEnter}
                        // value={query}
                        // onBlur={() => {
                        //     setShow(false);
                        // }}
                        // onFocus={() => {
                        //     if (searchResult) setShow(true);
                        // }}
                    ></input>

                    {<FontAwesomeIcon icon={faCircleXmark} className={cx('clear')} onClick={handleClear} />}

                    {/* {<FontAwesomeIcon className={cx('loading')} icon={faSpinner} />} */}
                    <div className={cx('split')}></div>
                    <div className={cx('search-btn')} onClick={handleClickSearch}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} className={cx('search-btn-icon')} />
                    </div>
                </div>
            </div>
            <div className={cx('list-website')}>
                <div className={cx(['row no-gutters'])}>
                    <div className={cx(['col', 'l-4', 'c-6', 'm-6'])}>
                        <div className={cx('item')}>
                            <img
                                alt=""
                                className={cx('item-img')}
                                src="https://theme.websiteviet.vn/files/builder/images/template/thuocnam.jpg"
                            ></img>
                            <div className={cx('item-action')}>
                                <Button target href={'https://perfume.noloce.com'} primary>
                                    Xem thử
                                </Button>
                                <Button primary>Dùng thử</Button>
                            </div>
                        </div>
                    </div>
                    <div className={cx(['col', 'l-4', 'c-6', 'm-6'])}>
                        <div className={cx('item')}>
                            <img
                                alt=""
                                className={cx('item-img')}
                                src="https://theme.websiteviet.vn/files/builder/images/template/thuocnam.jpg"
                            ></img>
                            <div className={cx('item-action')}>
                                <Button target href={'https://perfume.noloce.com'} primary>
                                    Xem thử
                                </Button>
                                <Button primary>Dùng thử</Button>
                            </div>
                        </div>
                    </div>
                    <div className={cx(['col', 'l-4', 'c-6', 'm-6'])}>
                        <div className={cx('item')}>
                            <img
                                alt=""
                                className={cx('item-img')}
                                src="https://theme.websiteviet.vn/files/builder/images/template/thuocnam.jpg"
                            ></img>
                            <div className={cx('item-action')}>
                                <Button target href={'https://perfume.noloce.com'} primary>
                                    Xem thử
                                </Button>
                                <Button primary>Dùng thử</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Demo;

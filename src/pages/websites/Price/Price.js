import classNames from 'classnames/bind';
import styles from './Price.module.scss';
import { IoIosCheckmark, IoIosClose } from 'react-icons/io';

const cx = classNames.bind(styles);

function Price() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <p className={cx('header-title')}>BẢNG GIÁ</p>
                <p className={cx('header-des')}>
                    Bảng báo giá thiết kế website trọn gói tại Noloce, không phát sinh chi phí ngầm.
                </p>
            </div>
            <div className={cx('content')}>
                <div className="row no-gutters ">
                    <div className={cx(['col', 'l-4', 'm-6'])}>
                        <div className={cx('concept')}>
                            <div className={cx('content-header')}>
                                <p className={cx('content-header-title')}>GÓI TIÊU CHUẨN</p>
                                <p className={cx('content-header-des')}>3 - 6 triệu </p>
                                <div className={cx('content-header-button')}>THIẾT KẾ THEO MẪU CÓ SẴN</div>
                            </div>
                            <div className={cx('content-module')}>
                                <p className={cx('content-module-title')}>MODULE WEBSITE</p>
                                <div className={cx('content-module-row')}>
                                    <div className={cx('content-module-list')}>
                                        <div className={cx('content-module-item')}>
                                            <div className={cx('content-module-item-icon')}>
                                                <IoIosCheckmark />
                                            </div>
                                            <p className={cx('content-module-item-text')}>Trang chủ</p>
                                        </div>
                                        <div className={cx('content-module-item')}>
                                            <div className={cx('content-module-item-icon')}>
                                                <IoIosCheckmark />
                                            </div>
                                            <p className={cx('content-module-item-text')}>Danh mục</p>
                                        </div>
                                        <div className={cx('content-module-item')}>
                                            <div className={cx('content-module-item-icon')}>
                                                <IoIosCheckmark />
                                            </div>
                                            <p className={cx('content-module-item-text')}>Tin tức</p>
                                        </div>
                                    </div>
                                    <div className={cx('content-module-list')}>
                                        <div className={cx('content-module-item')}>
                                            <div className={cx('content-module-item-icon')}>
                                                <IoIosCheckmark />
                                            </div>
                                            <p className={cx('content-module-item-text')}>Banner</p>
                                        </div>
                                        <div className={cx('content-module-item')}>
                                            <div className={cx('content-module-item-icon')}>
                                                <IoIosCheckmark />
                                            </div>
                                            <p className={cx('content-module-item-text')}>Quản trị</p>
                                        </div>
                                        <div className={cx('content-module-item')}>
                                            <div className={cx('content-module-item-icon')}>
                                                <IoIosCheckmark />
                                            </div>
                                            <p className={cx('content-module-item-text')}>Liên hệ</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <ul className={cx('content-list')}>
                                <p className={cx('content_list-title')}>PHẦN TÍCH HỢP</p>
                                <li className={cx('content-item')}>
                                    <div className={cx('content-module-item-icon-no')}>
                                        <IoIosClose />
                                    </div>
                                    <p className={cx('content-item-text')}>Live chat messenger/zalo</p>
                                </li>
                                <li className={cx('content-item')}>
                                    <div className={cx('content-module-item-icon-no')}>
                                        <IoIosClose />
                                    </div>
                                    <p className={cx('content-item-text')}>Đa ngôn ngữ</p>
                                </li>
                                <li className={cx('content-item')}>
                                    <div className={cx('content-module-item-icon')}>
                                        <IoIosClose />
                                    </div>
                                    <p className={cx('content-item-text')}> Tương thích phiên bản mobile</p>
                                </li>
                                <li className={cx('content-item')}>
                                    <div className={cx('content-module-item-icon')}>
                                        <IoIosClose />
                                    </div>
                                    <p className={cx('content-item-text')}> Bàn giao toàn bộ source code</p>
                                </li>
                                <li className={cx('content-item')}>
                                    <div className={cx('content-module-item-icon')}>
                                        <IoIosClose />
                                    </div>
                                    <p className={cx('content-item-text')}> Tặng thiết kế 2 banner</p>
                                </li>
                                <li className={cx('content-item')}>
                                    <div className={cx('content-module-item-icon')}>
                                        <IoIosClose />
                                    </div>
                                    <p className={cx('content-item-text')}> Đăng 10 bài viết/sản phẩm</p>
                                </li>
                                <li className={cx('content-item')}>
                                    <div className={cx('content-module-item-icon-no')}>
                                        <IoIosClose />
                                    </div>
                                    <p className={cx('content-item-text')}> Tối ưu tốc độ</p>
                                </li>
                                <li className={cx('content-item')}>
                                    <div className={cx('content-module-item-icon-no')}>
                                        <IoIosClose />
                                    </div>
                                    <p className={cx('content-item-text')}> Bảo mật SSL miễn phí</p>
                                </li>
                                <li className={cx('content-item')}>
                                    <div className={cx('content-module-item-icon-no')}>
                                        <IoIosClose />
                                    </div>
                                    <p className={cx('content-item-text')}> Cài đặt google analytic</p>
                                </li>
                                <li className={cx('content-item')}>
                                    <div className={cx('content-module-item-icon-no')}>
                                        <IoIosClose />
                                    </div>
                                    <p className={cx('content-item-text')}> Backup tự động</p>
                                </li>
                                <li className={cx('content-item')}>
                                    <div className={cx('content-module-item-icon')}>
                                        <IoIosClose />
                                    </div>
                                    <p className={cx('content-item-text')}> Thiết kế chuẩn SEO</p>
                                </li>
                                <li className={cx('content-item')}>
                                    <div className={cx('content-module-item-icon')}>
                                        <IoIosClose />
                                    </div>
                                    <p className={cx('content-item-text')}> Miễn phí hosting 1 năm</p>
                                </li>
                                <li className={cx('content-item')}>
                                    <div className={cx('content-module-item-icon')}></div>
                                    <p className={cx('content-item-text')}></p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={cx(['col', 'l-4', 'm-6'])}>
                        <div className={cx('concept')}>
                            <div className={cx('content-header', 'medium')}>
                                <p className={cx('content-header-title')}>GÓI NÂNG CAO</p>
                                <p className={cx('content-header-des')}>7 - 12 triệu </p>
                                <div className={cx('content-header-button')}>TÙY BIẾN GIAO DIỆN THEO YÊU CẦU</div>
                            </div>
                            <div className={cx('content-module')}>
                                <p className={cx('content-module-title')}>MODULE WEBSITE</p>
                                <div className={cx('content-module-row')}>
                                    <div className={cx('content-module-list')}>
                                        <div className={cx('content-module-item')}>
                                            <div className={cx('content-module-item-icon')}>
                                                <IoIosCheckmark />
                                            </div>
                                            <p className={cx('content-module-item-text')}>Trang chủ</p>
                                        </div>
                                        <div className={cx('content-module-item')}>
                                            <div className={cx('content-module-item-icon')}>
                                                <IoIosCheckmark />
                                            </div>
                                            <p className={cx('content-module-item-text')}>Danh mục</p>
                                        </div>
                                        <div className={cx('content-module-item')}>
                                            <div className={cx('content-module-item-icon')}>
                                                <IoIosCheckmark />
                                            </div>
                                            <p className={cx('content-module-item-text')}>Tin tức</p>
                                        </div>
                                    </div>
                                    <div className={cx('content-module-list')}>
                                        <div className={cx('content-module-item')}>
                                            <div className={cx('content-module-item-icon')}>
                                                <IoIosCheckmark />
                                            </div>
                                            <p className={cx('content-module-item-text')}>Banner</p>
                                        </div>
                                        <div className={cx('content-module-item')}>
                                            <div className={cx('content-module-item-icon')}>
                                                <IoIosCheckmark />
                                            </div>
                                            <p className={cx('content-module-item-text')}>Quản trị</p>
                                        </div>
                                        <div className={cx('content-module-item')}>
                                            <div className={cx('content-module-item-icon')}>
                                                <IoIosCheckmark />
                                            </div>
                                            <p className={cx('content-module-item-text')}>Liên hệ</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <ul className={cx('content-list')}>
                                <p className={cx('content_list-title')}>PHẦN TÍCH HỢP</p>
                                <li className={cx('content-item')}>
                                    <div className={cx('content-module-item-icon')}>
                                        <IoIosClose />
                                    </div>
                                    <p className={cx('content-item-text')}>Live chat messenger/zalo</p>
                                </li>
                                <li className={cx('content-item')}>
                                    <div className={cx('content-module-item-icon-no')}>
                                        <IoIosClose />
                                    </div>
                                    <p className={cx('content-item-text')}>Đa ngôn ngữ</p>
                                </li>
                                <li className={cx('content-item')}>
                                    <div className={cx('content-module-item-icon')}>
                                        <IoIosClose />
                                    </div>
                                    <p className={cx('content-item-text')}> Tương thích phiên bản mobile</p>
                                </li>
                                <li className={cx('content-item')}>
                                    <div className={cx('content-module-item-icon')}>
                                        <IoIosClose />
                                    </div>
                                    <p className={cx('content-item-text')}> Bàn giao toàn bộ source code</p>
                                </li>
                                <li className={cx('content-item')}>
                                    <div className={cx('content-module-item-icon')}>
                                        <IoIosClose />
                                    </div>
                                    <p className={cx('content-item-text')}> Tặng thiết kế 2 banner</p>
                                </li>
                                <li className={cx('content-item')}>
                                    <div className={cx('content-module-item-icon')}>
                                        <IoIosClose />
                                    </div>
                                    <p className={cx('content-item-text')}> Đăng 10 bài viết/sản phẩm</p>
                                </li>
                                <li className={cx('content-item')}>
                                    <div className={cx('content-module-item-icon')}>
                                        <IoIosClose />
                                    </div>
                                    <p className={cx('content-item-text')}> Tối ưu tốc độ</p>
                                </li>
                                <li className={cx('content-item')}>
                                    <div className={cx('content-module-item-icon')}>
                                        <IoIosClose />
                                    </div>
                                    <p className={cx('content-item-text')}> Bảo mật SSL miễn phí</p>
                                </li>
                                <li className={cx('content-item')}>
                                    <div className={cx('content-module-item-icon')}>
                                        <IoIosClose />
                                    </div>
                                    <p className={cx('content-item-text')}> Cài đặt google analytic</p>
                                </li>
                                <li className={cx('content-item')}>
                                    <div className={cx('content-module-item-icon')}>
                                        <IoIosClose />
                                    </div>
                                    <p className={cx('content-item-text')}> Backup tự động</p>
                                </li>
                                <li className={cx('content-item')}>
                                    <div className={cx('content-module-item-icon')}>
                                        <IoIosClose />
                                    </div>
                                    <p className={cx('content-item-text')}> Thiết kế chuẩn SEO</p>
                                </li>
                                <li className={cx('content-item')}>
                                    <div className={cx('content-module-item-icon')}>
                                        <IoIosClose />
                                    </div>
                                    <p className={cx('content-item-text')}> Miễn phí hosting 1 năm</p>
                                </li>
                                <li className={cx('content-item')}>
                                    <div className={cx('content-module-item-icon')}></div>
                                    <p className={cx('content-item-text')}> </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={cx(['col', 'l-4', 'm-6'])}>
                        <div className={cx('concept')}>
                            <div className={cx('content-header', 'hight')}>
                                <p className={cx('content-header-title')}>GÓI CAO CẤP</p>
                                <p className={cx('content-header-des')}>Từ 12 triệu </p>
                                <div className={cx('content-header-button')}>THIẾT KẾ ĐẶC BIỆT THEO YÊU CẦU</div>
                            </div>
                            <div className={cx('content-module')}>
                                <p className={cx('content-module-title')}>MODULE WEBSITE</p>
                                <div className={cx('content-module-row')}>
                                    <div className={cx('content-module-list')}>
                                        <div className={cx('content-module-item')}>
                                            <div className={cx('content-module-item-icon')}>
                                                <IoIosCheckmark />
                                            </div>
                                            <p className={cx('content-module-item-text')}>Trang chủ</p>
                                        </div>
                                        <div className={cx('content-module-item')}>
                                            <div className={cx('content-module-item-icon')}>
                                                <IoIosCheckmark />
                                            </div>
                                            <p className={cx('content-module-item-text')}>Danh mục</p>
                                        </div>
                                        <div className={cx('content-module-item')}>
                                            <div className={cx('content-module-item-icon')}>
                                                <IoIosCheckmark />
                                            </div>
                                            <p className={cx('content-module-item-text')}>Tin tức</p>
                                        </div>
                                    </div>
                                    <div className={cx('content-module-list')}>
                                        <div className={cx('content-module-item')}>
                                            <div className={cx('content-module-item-icon')}>
                                                <IoIosCheckmark />
                                            </div>
                                            <p className={cx('content-module-item-text')}>Banner</p>
                                        </div>
                                        <div className={cx('content-module-item')}>
                                            <div className={cx('content-module-item-icon')}>
                                                <IoIosCheckmark />
                                            </div>
                                            <p className={cx('content-module-item-text')}>Quản trị</p>
                                        </div>
                                        <div className={cx('content-module-item')}>
                                            <div className={cx('content-module-item-icon')}>
                                                <IoIosCheckmark />
                                            </div>
                                            <p className={cx('content-module-item-text')}>Liên hệ</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <ul className={cx('content-list')}>
                                <p className={cx('content_list-title')}>PHẦN TÍCH HỢP</p>
                                <li className={cx('content-item')}>
                                    <div className={cx('content-module-item-icon')}>
                                        <IoIosClose />
                                    </div>
                                    <p className={cx('content-item-text')}>Live chat messenger/zalo</p>
                                </li>
                                <li className={cx('content-item')}>
                                    <div className={cx('content-module-item-icon')}>
                                        <IoIosClose />
                                    </div>
                                    <p className={cx('content-item-text')}>Đa ngôn ngữ</p>
                                </li>
                                <li className={cx('content-item')}>
                                    <div className={cx('content-module-item-icon')}>
                                        <IoIosClose />
                                    </div>
                                    <p className={cx('content-item-text')}> Tương thích phiên bản mobile</p>
                                </li>
                                <li className={cx('content-item')}>
                                    <div className={cx('content-module-item-icon')}>
                                        <IoIosClose />
                                    </div>
                                    <p className={cx('content-item-text')}> Bàn giao toàn bộ source code</p>
                                </li>
                                <li className={cx('content-item')}>
                                    <div className={cx('content-module-item-icon')}>
                                        <IoIosClose />
                                    </div>
                                    <p className={cx('content-item-text')}> Tặng thiết kế 2 banner</p>
                                </li>
                                <li className={cx('content-item')}>
                                    <div className={cx('content-module-item-icon')}>
                                        <IoIosClose />
                                    </div>
                                    <p className={cx('content-item-text')}> Đăng 10 bài viết/sản phẩm</p>
                                </li>
                                <li className={cx('content-item')}>
                                    <div className={cx('content-module-item-icon')}>
                                        <IoIosClose />
                                    </div>
                                    <p className={cx('content-item-text')}> Tối ưu tốc độ</p>
                                </li>
                                <li className={cx('content-item')}>
                                    <div className={cx('content-module-item-icon')}>
                                        <IoIosClose />
                                    </div>
                                    <p className={cx('content-item-text')}> Bảo mật SSL miễn phí</p>
                                </li>
                                <li className={cx('content-item')}>
                                    <div className={cx('content-module-item-icon')}>
                                        <IoIosClose />
                                    </div>
                                    <p className={cx('content-item-text')}> Cài đặt google analytic</p>
                                </li>
                                <li className={cx('content-item')}>
                                    <div className={cx('content-module-item-icon')}>
                                        <IoIosClose />
                                    </div>
                                    <p className={cx('content-item-text')}> Backup tự động</p>
                                </li>
                                <li className={cx('content-item')}>
                                    <div className={cx('content-module-item-icon')}>
                                        <IoIosClose />
                                    </div>
                                    <p className={cx('content-item-text')}> Thiết kế chuẩn SEO</p>
                                </li>
                                <li className={cx('content-item')}>
                                    <div className={cx('content-module-item-icon')}>
                                        <IoIosClose />
                                    </div>
                                    <p className={cx('content-item-text')}> Miễn phí hosting 1 năm</p>
                                </li>
                                <li className={cx('content-item')}>
                                    <div className={cx('content-module-item-icon')}>
                                        <IoIosClose />
                                    </div>
                                    <p className={cx('content-item-text')}> Thiết kế đặc biệt theo yêu cầu</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Price;

import classNames from 'classnames/bind';
import styles from './Procedure.module.scss';
import images from '~/assets/img';

const cx = classNames.bind(styles);

function Procedure() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <h4 className={cx('header-title')}>QUY TRÌNH LÀM VIỆC</h4>
                <p className={cx('header-descreption')}>
                    Cam kết hoàn thiện các sản phẩm một cách chỉnh chu nhất, lấy mức độ hài lòng của khách hàng làm
                    thước đo uy tín về chúng tôi
                </p>
            </div>
            <div className={cx('container')}>
                <div className={cx(['row'], 'concept')}>
                    <div className={cx(['col', 'l-6'])}>
                        <div className={cx('content')}>
                            <p className={cx('content-title')}>CỤ THỂ HÓA Ý TƯỞNG CỦA BẠN</p>
                            <ul className={cx('content-list')}>
                                <li className={cx('content-item')}>
                                    <p>Xác định lĩnh vực bạn muốn thực hiện dự án, tính khả thi của dự án</p>
                                </li>
                                <li className={cx('content-item')}>
                                    <p>
                                        Phân tích tình hình thị trường, khả năng, hiệu quả của dự án nếu được thực hiện
                                    </p>
                                </li>
                                <li className={cx('content-item')}>
                                    <p>Phân tích khả năng phát triển, mở rộng của dự án</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={cx(['col', 'l-6'])}>
                        <div className={cx('content-img')}>
                            <img src={images.webDesign} alt=""></img>
                        </div>
                    </div>
                </div>
                <div className={cx(['row'], 'concept')}>
                    <div className={cx(['col', 'l-6'])}>
                        <div className={cx('content-img')}>
                            <img src={images.perfectWeb} alt=""></img>
                        </div>
                    </div>
                    <div className={cx(['col', 'l-6'])}>
                        <div className={cx('content')}>
                            <p className={cx('content-title')}>XÂY DỰNG KẾ HOẠCH</p>
                            <ul className={cx('content-list')}>
                                <li className={cx('content-item')}>
                                    <p>
                                        Xác định công nghệ sử dụng để thực hiện dự án, bao gồm giao diện người dùng, máy
                                        chủ, dữ liệu dự án
                                    </p>
                                </li>
                                <li className={cx('content-item')}>
                                    <p>Xác định phương pháp lựa chọn, thiết kế giao diện người dùng</p>
                                </li>
                                <li className={cx('content-item')}>
                                    <p>Dự kiến thời gian hoàn thành các hạng mục dự án</p>
                                </li>
                                <li className={cx('content-item')}>
                                    <p> Dự toán ngân sách chi tiêu đến khi hoàn thành dự án</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={cx(['row'], 'concept')}>
                    <div className={cx(['col', 'l-6'])}>
                        <div className={cx('content')}>
                            <p className={cx('content-title')}>THIẾT KẾ</p>
                            <ul className={cx('content-list')}>
                                <li className={cx('content-item')}>
                                    <p>Xây dựng thương hiệu đặc trưng riêng của khách hàng</p>
                                </li>
                                <li className={cx('content-item')}>
                                    <p> Thiết kế theo yêu cầu của khách hàng, chỉnh chu trong từng chi tiết</p>
                                </li>
                                <li className={cx('content-item')}>
                                    <p> Nắm bắt xu thế, xây dựng trải nghiệm người dùng một cách hiệu quả nhất</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={cx(['col', 'l-6'])}>
                        <div className={cx('content-img')}>
                            <img src={images.website} alt=""></img>
                        </div>
                    </div>
                </div>
                <div className={cx(['row'], 'concept')}>
                    <div className={cx(['col', 'l-6'])}>
                        <div className={cx('content-img')}>
                            <img src={images.webCode} alt=""></img>
                        </div>
                    </div>
                    <div className={cx(['col', 'l-6'])}>
                        <div className={cx('content')}>
                            <p className={cx('content-title')}>LẬP TRÌNH</p>
                            <ul className={cx('content-list')}>
                                <li className={cx('content-item')}>
                                    <p>Xây dựng giao diện người dùng</p>
                                </li>
                                <li className={cx('content-item')}>
                                    <p>Xây dựng hệ thống máy chủ xử lý truy cập, nơi lưu trữ dữ liệu hệ thống dự án</p>
                                </li>
                                <li className={cx('content-item')}>
                                    <p>
                                        Tích hợp các nền tảng mạng xã hội như facebook, google trong quá trình đăng nhập
                                        hệ thống, thông tin liên hệ
                                    </p>
                                </li>
                                <li className={cx('content-item')}>
                                    <p>Xây dựng hệ thống bảo mật dự án</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className={cx(['row'], 'concept')}>
                    <div className={cx(['col', 'l-6'])}>
                        <div className={cx('content')}>
                            <p className={cx('content-title')}>XÂY DỰNG NỘI DUNG</p>
                            <ul className={cx('content-list')}>
                                <li className={cx('content-item')}>
                                    <p>Hoạch định nội dung và xác định keyword</p>
                                </li>
                                <li className={cx('content-item')}>
                                    <p>Sáng tạo và sản xuất nội dung</p>
                                </li>
                                <li className={cx('content-item')}>
                                    <p>Tối ưu hóa công cụ tìm kiếm</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={cx(['col', 'l-6'])}>
                        <div className={cx('content-img')}>
                            <img src={images.webCreator} alt=""></img>
                        </div>
                    </div>
                </div>

                <div className={cx(['row'], 'concept')}>
                    <div className={cx(['col', 'l-6'])}>
                        <div className={cx('content-img')}>
                            <img src={images.webComplete} alt=""></img>
                        </div>
                    </div>
                    <div className={cx(['col', 'l-6'])}>
                        <div className={cx('content')}>
                            <p className={cx('content-title')}>HOÀN THIỆN DỰ ÁN</p>
                            <ul className={cx('content-list')}>
                                <li className={cx('content-item')}>
                                    <p>Đưa dự án vào chạy thực tế trên không gian mạng</p>
                                </li>
                                <li className={cx('content-item')}>
                                    <p>Tiếp thu, xử lý ý kiến từ khách hàng</p>
                                </li>
                                <li className={cx('content-item')}>
                                    <p>Tối ưu hóa, xử lý các lỗi (nếu có)</p>{' '}
                                </li>
                                <li className={cx('content-item')}>
                                    <p>Hoàn thiện sản phẩm</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className={cx(['row'], 'concept')}>
                    <div className={cx(['col', 'l-6'])}>
                        <div className={cx('content')}>
                            <p className={cx('content-title')}>BÀN GIAO, THANH TOÁN DỰ ÁN</p>
                            <ul className={cx('content-list')}>
                                <li className={cx('content-item')}>
                                    <p>Bàn giao source code của dự án</p>
                                </li>
                                <li className={cx('content-item')}>
                                    {' '}
                                    <p>Tư vấn kinh phí duy trì hoạt động của dự án</p>{' '}
                                </li>
                                <li className={cx('content-item')}>
                                    <p>Tư vấn, bảo hành trong suốt quá trình chạy dự án</p>
                                </li>
                                <li className={cx('content-item')}>
                                    <p>Thanh toán hợp đồng</p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className={cx(['col', 'l-6'])}>
                        <div className={cx('content-img')}>
                            <img src={images.webHandOver} alt=""></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Procedure;

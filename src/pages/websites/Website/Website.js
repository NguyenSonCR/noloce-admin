import classNames from 'classnames/bind';
import styles from './Website.module.scss';
import images from '~/assets/img';
import { useRef } from 'react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import Price from '../Price';
const cx = classNames.bind(styles);

function Website() {
    const slider = [
        {
            img: images.data,
            text: 'Bạn đang cần một nơi để lưu trữ dữ liệu?',
            background: 'linear-gradient(to right, rgba(217, 100, 254, 1), rgba(248, 180, 237, 1))',
        },
        {
            img: images.shopOnline,
            text: 'Bạn đang muốn một địa chỉ online để nâng cao sự tin tưởng của khách hàng?',
            background: 'linear-gradient(to right, rgba(247, 135, 0, 1), rgba(255, 118, 208, 1))',
        },
        {
            img: images.hobbies,
            text: 'Hoặc đơn giản chỉ là một nơi để thực hiện sở thích của bạn...',
            background: 'linear-gradient(to right, rgba(246, 170, 235, 1), rgba(248, 199, 185, 1))',
        },
        {
            img: images.website,
            text: 'Hãy cùng chúng tôi xây dựng một website của riêng bạn...',
            background: 'linear-gradient(to right, rgba(0, 155, 106, 1), rgba(0, 198, 210, 1))',
        },
        {
            img: images.perfectWeb,
            text: 'Chúng ta sẽ cùng hoàn thành ý tưởng của bạn một cách hoàn hảo nhất...',
            background: 'linear-gradient(to right, rgba(32, 120, 216, 1), rgba(0, 198, 210, 1))',
        },
    ];
    const swiperRef = useRef();

    return (
        <div className={cx('wrapper')}>
            <div className={cx('carousel')}>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{ clickable: true }}
                    loop={true}
                    speed={2000}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    modules={[Pagination, Autoplay]}
                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    className={cx('mySwiper')}
                >
                    {slider.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className={cx('slider-item')} style={{ backgroundImage: item.background }}>
                                <div className={cx('slider-lelf')}>
                                    <p className={cx('slider-text')}>{item.text}</p>
                                </div>
                                <div className={cx('slider-right')}>
                                    <img src={item.img} alt="" className={cx('slider-img')}></img>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className={cx('swipe-navigate')}>
                    <div onClick={() => swiperRef.current?.slideNext()} className={cx('swiper-next-button')}>
                        <BsChevronRight className={cx('swiper-button-icon')} />
                    </div>
                    <div className={cx('swiper-pre-button')} onClick={() => swiperRef.current?.slidePrev()}>
                        <BsChevronLeft className={cx('swiper-button-icon')} />
                    </div>
                </div>
            </div>

            <div className={cx('introduce')}>
                <div className={cx('header')}>
                    <p className={cx('header-title')}>DỊCH VỤ THIẾT KẾ WEBSITE CHUYÊN NGHIỆP - NOLOCE</p>
                    <p className={cx('header-text')}>Chúng tôi có thể giúp gì cho bạn...</p>
                </div>
                <div className={cx('content')}>
                    <div className={cx('content-img')}>
                        <img src={images.webDesign} alt=""></img>
                    </div>
                    <div className={cx('descreption')}>
                        <h4 className={cx('descreption-header')}>Xây dựng giao diện người dùng theo yêu cầu của bạn</h4>
                        <p className={cx('descreption-text')}>
                            Với tiêu chí tạo giá trị đích thực cho khách hàng, chúng tôi luôn muốn hợp tác tạo ra một
                            sản phẩm đặc trưng riêng đối với mỗi khách hàng, là một cửa hàng online thực sự của khách
                            hàng.
                        </p>
                    </div>
                </div>

                <div className={cx('content')}>
                    <div className={cx('descreption')}>
                        <h4 className={cx('descreption-header')}>
                            Ngôn ngữ thiết kế hiện đại, đáp ứng tốc độ truy cập tối ưu
                        </h4>
                        <p className={cx('descreption-text')}>
                            Các dự án được thực hiện bằng các ngôn ngữ xu hướng trong thời gian gần đây, nhất là xây
                            dựng website 1 trang, không tải lại trang trong quá trình sử dụng, đảm bảo tốc độ tối ưu cho
                            người sử dụng, nâng cao trải nghiệm người dùng.
                        </p>
                    </div>
                    <div className={cx('content-img')}>
                        <img src={images.webLanguage} alt=""></img>
                    </div>
                </div>

                <div className={cx('content')}>
                    <div className={cx('content-img')}>
                        <img src={images.webSuccess} alt=""></img>
                    </div>

                    <div className={cx('descreption')}>
                        <h4 className={cx('descreption-header')}>
                            Tư vấn nhiệt tình, chân thành trong quá trình xây dựng, phát triển Webstie, đưa tiêu chí uy
                            tín lên hàng đầu
                        </h4>
                        <p className={cx('descreption-text')}>
                            Tư vấn khách hàng trong vấn đề xây dựng website, phát triển kinh doanh trên các nền tảng
                            khác, bên cạnh đó, đồng hành cùng khách hàng trong quá trình phát triển, bảo dưỡng Website.
                        </p>
                    </div>
                </div>

                <div className={cx('content')}>
                    <div className={cx('descreption')}>
                        <h4 className={cx('descreption-header')}>
                            Đảm bảo an toàn dữ liệu, Bảo mật thông tin khi website được đưa vào hoạt động thực tế.
                        </h4>
                        <p className={cx('descreption-text')}>
                            Áp dụng các biện pháp bảo mật website theo các tiêu chuẩn quốc tế, bảo mật hệ thống dữ liệu,
                            chống lại sự tấn công từ các mối đe dọa.
                        </p>
                    </div>
                    <div className={cx('content-img')}>
                        <img src={images.webSecure} alt=""></img>
                    </div>
                </div>
            </div>
            <div className={cx('service')}>
                <div className={cx('service_header')}>
                    <p className={cx('service_header-header')}>DỊCH VỤ CỦA CHÚNG TÔI</p>
                    <p className={cx('service_header-des')}>
                        Với sự đầu tư đồng bộ về công nghệ và yếu tố con người đặt lên hàng đầu.
                    </p>
                    <p className={cx('service_header-des')}>Chúng tôi cam kết đảm bảo 100% hài lòng.</p>
                </div>
                <div className={cx('service_container')}>
                    <div className={cx('service_col')}>
                        <div className={cx('service_content')}>
                            <img
                                alt=""
                                src="https://websiteviet.vn/wp-content/uploads/2020/12/Thiet-ke-website.png"
                                className={cx('service_content-img')}
                            ></img>
                            <p className={cx('service_content-title')}>THIẾT KẾ WEBSITE</p>
                            <p className={cx('service_content-text')}>
                                Giao diện đẹp, thiết kế chuyên nghiệp, khoa học, đảm bảo chất lượng. Website chuẩn SEO
                                giá rẻ, giao diện hiển thị máy tính, điện thoại. Tốc độ load siêu nhanh. Miễn phí
                                hosting, tên miền quốc tế. Bảo hành vĩnh viễn.
                            </p>
                        </div>
                    </div>
                    <div className={cx('service_col')}>
                        <div className={cx('service_content')}>
                            <img
                                alt=""
                                src="https://websiteviet.vn/wp-content/uploads/2020/12/Ten-mien.png"
                                className={cx('service_content-img')}
                            ></img>
                            <p className={cx('service_content-title')}>TÊN MIỀN</p>
                            <p className={cx('service_content-text')}>
                                Tên miền quốc gia Việt Nam, tên miền Quốc tế đăng ký thông tin chủ thể đầy đủ. Tên miền
                                có giá bán hợp lý, phí duy trì hàng năm theo quy định của Nhà nước. Hỗ trợ tư vấn và
                                hướng dẫn cấu hình quản trị, xử lý các vấn đề kỹ thuật 24/7.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={cx('service_container')}>
                    <div className={cx('service_col')}>
                        <div className={cx('service_content')}>
                            <img
                                alt=""
                                src="https://websiteviet.vn/wp-content/uploads/2020/12/SEO-tu-khoa.png"
                                className={cx('service_content-img')}
                            ></img>
                            <p className={cx('service_content-title')}>XÂY DỰNG NỘI DUNG CHẤT LƯỢNG</p>
                            <p className={cx('service_content-text')}>
                                Sử dụng các tiêu chuẩn để viết bài theo chuẩn SEO. Xây dựng các liên kết đang và sẽ tiếp
                                tục là một thành phần rất quan trọng của Search Engine Optimization (SEO).
                            </p>
                        </div>
                    </div>
                    <div className={cx('service_col')}>
                        <div className={cx('service_content')}>
                            <img
                                alt=""
                                src="https://websiteviet.vn/wp-content/uploads/2020/12/social-maketing.png"
                                className={cx('service_content-img')}
                            ></img>
                            <p className={cx('service_content-title')}>CHĂM SÓC WEBSITE CHUYÊN NGHIỆP</p>
                            <p className={cx('service_content-text')}>
                                Rất nhiều cá nhân hay doanh nghiệp khi đầu tư xây dựng 1 website thường mắc một sai lầm
                                đầu tư về hình thức không đầu tư về nội dung và sự vận hành.
                            </p>
                        </div>
                    </div>
                </div>

                <div className={cx('service_container')}>
                    <div className={cx('service_col')}>
                        <div className={cx('service_content')}>
                            <img
                                alt=""
                                src="https://websiteviet.vn/wp-content/uploads/2020/12/SEO.png"
                                className={cx('service_content-img')}
                            ></img>
                            <p className={cx('service_content-title')}>SEO TỪ KHÓA LÊN TOP GOOGLE</p>
                            <p className={cx('service_content-text')}>
                                Thu hút hàng ngàn lượt khách hàng tiềm năng từ công cụ tìm kiếm Google. Giải pháp tăng
                                doanh thu, lợi nhuận bán hàng hiệu quả với mức chi phí hợp lý. Kích hoạt quảng cáo ngay
                                sau khi đăng ký dịch vụ, website hiển thị liên tục 24/24.
                            </p>
                        </div>
                    </div>
                    <div className={cx('service_col')}>
                        <div className={cx('service_content')}>
                            <img
                                alt=""
                                src="https://websiteviet.vn/wp-content/uploads/2020/12/hosting.png"
                                className={cx('service_content-img')}
                            ></img>
                            <p className={cx('service_content-title')}>HOSTING / VPS KHỦNG GIÁ RẺ</p>
                            <p className={cx('service_content-text')}>
                                Cung cấp các gói hosting, VPS khủng giá rẻ hấp dẫn, tối ưu chi phí cho doanh nghiệp của
                                bạn. Có sẵn mọi yếu tố cần thiết để giúp bạn khởi động dự án, quản lý và host website.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('price')}>
                <Price />
            </div>
        </div>
    );
}

export default Website;

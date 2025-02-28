import React from "react";
import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom'
import donation from '../../images/donation.JPG'
import founders from '../../images/founders.JPG'
import shape2 from '../../images/slider/founders.JPG'
import shape3 from '../../images/slider/shape-3.svg'
import shape4 from '../../images/slider/shape-4.png'
import shape5 from '../../images/slider/shape-5.svg'





const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const Hero = (props) => {
    return (

        <section className={"" + props.hclass} >
            <Swiper
                // install Swiper modules
                modules={[Navigation, A11y]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                speed={1800}
                parallax={true}
                navigation
            >
                <SwiperSlide>
                    <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${donation})` }}>
                        <div className="container-fluid">
                            <div className="slide-content" >
                                <div className="slide-title">
                                    <span>We can brighten every girl's future.</span>
                                </div>
                                <div className="slide-sub-title">
                                <h2>Support <span>girls' empowerment</span> & <span className="text">education</span></h2>
                                </div>
                                <div data-swiper-parallax="500" className="slide-btns">
                                    <Link onClick={ClickHandler} to="/about" className="theme-btn">About Us</Link>
                                    <div className="call">
                                        <div className="icon">
                                            <i className="flaticon-phone"></i>
                                        </div>
                                        <div className="text">
                                            <h3>Call Us Now</h3>
                                            <span>+233 24 057 3206</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-shape">
                            <img src={founders} alt="" />
                        </div>
                        <div className="shape-1">
                            <img src={shape2} alt="" />
                        </div>
                        <div className="shape-2">
                            <img src={shape3} alt="" />
                        </div>
                        <div className="shape-3">
                            <img src={shape4} alt="" />
                        </div>
                        <div className="shape-4">
                            <img src={shape5} alt="" />
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${shape2})` }}>
                        <div className="container-fluid">
                            <div className="slide-content">
                                <div className="slide-title">
                                <span>Together, we can illuminate every girl's future.</span>
                                </div>
                                <div className="slide-sub-title">
                                <h2>Champion <span>girls' empowerment</span> & <span className="text">access to education</span></h2>

                                </div>
                                <div data-swiper-parallax="500" className="slide-btns">
                                    <Link onClick={ClickHandler} to="/about" className="theme-btn">About Us</Link>
                                    <div className="call">
                                        <div className="icon">
                                            <i className="flaticon-phone"></i>
                                        </div>
                                        <div className="text">
                                            <h3>Call Us Now</h3>
                                            <span>+233 24 057 3206</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-shape">
                            <img src={donation} alt="" />
                        </div>
                        <div className="shape-1">
                            <img src={shape2} alt="" />
                        </div>
                        <div className="shape-2">
                            <img src={shape3} alt="" />
                        </div>
                        <div className="shape-3">
                            <img src={shape4} alt="" />
                        </div>
                        <div className="shape-4">
                            <img src={shape5} alt="" />
                        </div>
                    </div>
                </SwiperSlide>

                ...
            </Swiper>
        </section>
    )
}

export default Hero;
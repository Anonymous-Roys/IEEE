import React from 'react';
import { Link } from 'react-router-dom';
import VideoModal from '../ModalVideo/VideoModal';

import shape from '../../images/healthcare.svg'
import Img1 from '../../images/slider/img-1.jpg'
import shape7 from '../../images/f-shape7.png'
import shape3 from '../../images/slider/shape-3.svg'
import shape9 from '../../images/f-shape9.png'
import shapeline from '../../images/slider/img-shape2.png'

const ClickHandler = () => {
    window.scrollTo(10, 0);
}


const hero3 = () => {
    return (
        <section className="static-hero">
            <div className="container">
                <div className="wraper">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-12 ">
                            <div className="slide-title">
                                <span><img src={shape} alt="" /> We are always open for
                                    children</span>
                            </div>
                            <div  className="slide-sub-title">
                                <h2>Our Passion Is
                                    Providing Superior <br/>
                                        <span className="text">Pet Care</span></h2>
                            </div>
                            <div className="slide-btns">
                                <Link onClick={ClickHandler} to="/about" className="theme-btn">About Us</Link>
                                <div className="call">
                                    <div className="icon">
                                        <i className="flaticon-phone"></i>
                                    </div>
                                    <div className="text">
                                        <h3>Call Us Now</h3>
                                        <span>+025 757 576 560</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12">
                            <div className="hero-image">
                                <img src={Img1} alt="" />
                                <VideoModal />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="shape-1">
                <img src={shape7} alt="" />
            </div>
            <div className="shape-2">
                <img src={shape3} alt="" />
            </div>
            <div className="shape-3">
                <img src={shapeline} alt="" />
            </div>
            <div className="shape-4">
                <img src={shape9} alt="" />
            </div>
        </section>
    );
};

export default hero3;
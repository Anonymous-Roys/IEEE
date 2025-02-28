import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Shape from '../../images/testimonial/left-img.jpg'
import Shape2 from '../../images/healthcare.svg'
import Shape3 from '../../images/testimonial/side-img-1.jpg'
import Shape4 from '../../images/testimonial/side-img-2.jpg'

import Img1 from '../../images/testimonial/1.jpg'
import Img2 from '../../images/testimonial/2.jpg'


const testimonials = [
    {
        id: '01',
        img: Img1,
        Des: "Denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of truth the master builder",
        title: 'Michel Jhonson',
        sub: "CEO Barta",
    },
    {
        id: '02',
        img: Img2,
        Des: "The other hand we denounticy grow with righteou indg ation and le men who are so beguiled an Lorem moment.Dislike men who care by the charms of pleasur",
        title: 'Tommy Kraft',
        sub: "Fashion Designer",
    },
    {
        id: '03',
        img: Img1,
        Des: "Denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of truth the master builder",
        title: 'Curtis Fahey',
        sub: "Managin dirctor",
    },
    {
        id: '04',
        img: Img2,
        Des: "The other hand we denounticy grow with righteou indg ation and le men who are so beguiled an Lorem moment.Dislike men who care by the charms of pleasur",
        title: 'Curtis Fahey',
        sub: "Managin dirctor",
    },


]




const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    arrows: false,
    fade: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,

};




const TestimonialS3 = () => {
    return (
        <section className="testimonial-section-s3">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-12">
                        <div className="left-img">
                            <img src={Shape} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <div className="testimonial-wrap">
                            <div className="section-title">
                                <span><img src={Shape2} alt="" />Together, We Can Change Lives Forever</span>
                                <h2>Our <span>Client,s</span> Feedback</h2>
                            </div>
                            <Slider {...settings} className="testimonial-slider-s3">
                                {testimonials.map((testitem, titem) => (
                                    <div className="item" key={titem}>
                                        <h3>{testitem.Des}</h3>
                                        <div className="author">
                                            <div className="image">
                                                <img src={testitem.img} alt="" />
                                            </div>
                                            <div className="text">
                                                <h4>{testitem.title}</h4>
                                                <span>{testitem.sub}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
            <div className="side-img-1">
                <img src={Shape3} alt="" />
            </div>
            <div className="side-img-2">
                <img src={Shape4} alt="" />
            </div>
        </section>
    );
};

export default TestimonialS3;
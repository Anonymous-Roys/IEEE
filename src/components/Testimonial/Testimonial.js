import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Img1 from '../../images/testimonial/nelly.jpg'
import Img2 from '../../images/testimonial/Elizabeth Lomo-Adjei.jpg'
import Img3 from '../../images/testimonial/2.jpg'

const testimonials = [
    {
        id: '01',
        img: Img1,
        Des: "What I found was an incredibly supportive and inspiring community. Being part of Girl Genius has allowed me to learn from the diverse experiences of other members and expand my network in ways I hadn't imagined. I highly recommend Girl Genius to any woman looking to connect, learn and grow professionally.",
        title: 'Nelly Amankona Bobo',
        sub: "PRO - tribe 3",
    },
    {
        id: '02',
        img: Img2,
        Des: "Girls Genius Foundation has been a transformative experience, empowering me through webinars, workshops, and community bonding. It has strengthened my leadership skills, fostered meaningful connections, and renewed my commitment to empowering others. I'm proud to be part of a community creating a more equitable world.",
        title: 'Elizabeth Lomo-Adjei',
        sub: "Deputy Treasurer-CAMFED Association",
    },
    {
        id: '02',
        img: Img3,
        Des: "I am proud to support the impactful work of the Girl Genius Foundation. Their dedication to empowering young women through education, mentorship, and leadership programs is truly inspiring. Their efforts align with our values, and I’ve witnessed firsthand how they equip young girls with the skills and confidence to succeed.",
        title: 'Ebenezer Dadzie',
        sub: "CEO - EIT Ghana Limited",
    }
    


]




const Testimonial = (props) => {

    const settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        arrows: false,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1199,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
        ]
    };


    return (

        <section className={"" + props.tClass}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-12">
                        <div className="section-title">
                            <span>We are always open for females</span>
                            <h2>Helping each other can
                                make <span>world</span> better</h2>
                        </div>
                    </div>
                </div>
                <div className="testimonial-wrap">
                    <Slider {...settings} className="testimonial-slider">
                        {testimonials.map((testitem, titem) => (
                            <div className="testimonial-card" key={titem}>
                                <ul>
                                    <li><i className="flaticon-star"></i></li>
                                    <li><i className="flaticon-star"></i></li>
                                    <li><i className="flaticon-star"></i></li>
                                    <li><i className="flaticon-star"></i></li>
                                    <li><i className="flaticon-star"></i></li>
                                </ul>
                                <p>{testitem.Des}</p>
                                <div className="autr-name">
                                    <div className="image">
                                        <img src={testitem.img} alt="" />
                                    </div>
                                    <div className="text">
                                        <h3>{testitem.title}</h3>
                                        <span>{testitem.sub}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>

            </div>
        </section>
    );
}

export default Testimonial;






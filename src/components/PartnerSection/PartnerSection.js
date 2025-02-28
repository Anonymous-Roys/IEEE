import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// image
import pimg1 from '../../images/partners/1.png'
import pimg2 from '../../images/partners/2.png'
import pimg3 from '../../images/partners/3.png'
import pimg4 from '../../images/partners/4.png'
import pimg5 from '../../images/partners/5.png'
import pimg6 from '../../images/partners/6.png'
import pimg7 from '../../images/partners/7.png'
import pimg8 from '../../images/partners/2.png'


const partners = [
    {
        id: "01",
        pimg: pimg1,
    },
    {
        id: "02",
        pimg: pimg2,
    },
    {
        id: "03",
        pimg: pimg3,
    },
    {
        id: "04",
        pimg: pimg4,
    },
    {
        id: "05",
        pimg: pimg5,
    },
    {
        id: "06",
        pimg: pimg6,
    },
    {
        id: "07",
        pimg: pimg7,
    }
    ,
    {
        id: "08",
        pimg: pimg8,
    }
]

const PartnerSection = (props) => {

    const settings = {
        dots: false,
        arrows: false,
        loop: true,
        speed: 1000,
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1399,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 757,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };



    return (
        <section className={"" + props.hclass}>
            <h2 className="d-none">No Content</h2>
            <ul className="partners-slider">
                <Slider {...settings}>
                    {partners.map((partner, pitem) => (
                        <li className="grid" key={pitem}>
                                <img src={partner.pimg} alt="" />
                        </li>
                    ))}
                </Slider>


            </ul>
        </section>
    )

}

export default PartnerSection;



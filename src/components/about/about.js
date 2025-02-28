import React from 'react';
// import VideoModal from '../ModalVideo/VideoModal';
import { Link } from 'react-router-dom';


/* image */
import Img1 from '../../images/about/joinus.png'
import Img2 from '../../images/about/sandra-oate-founder.jpeg'
import CEO from '../../images/about/sandra-oate-founder.jpeg'
import shape1 from '../../images/about/shape1.svg'
import shape2 from '../../images/about/shape2.svg'
import shape3 from '../../images/about/shape3.svg'
import shape4 from '../../images/about/shape4.svg'
import shape5 from '../../images/about/shape5.svg'
import shape6 from '../../images/about/shape6.svg'
import VideoModal from '../ModalVideo/VideoModal';

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const about = (props) => {
    return (
        <section className={"" +props.hclass}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-12">
                        <div className="about-image">
                            <div className="img-1">
                                <img src={Img1} alt="" />
                                    {/* <CustomVideoModal videoSrc="/public/joinus.mp4" /> */}
                                    <VideoModal/>
                            </div>
                            <div className="img-2">
                                <img src={Img2} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
    <div className="about-content">
        <h2>We are always open to empowering girls</h2>
        <h3>Helping each other can
            make the <span>future</span> brighter</h3>
        <p>At Girl Genius Foundation, we believe in empowering young girls through education, mentorship, and community support. Together, we can create opportunities for growth, leadership, and a brighter future for the next generation of women.</p>

        <div className="inner-content">
            <div className="inner-item">
                <div className="icon">
                    <i className="flaticon-charity"></i>
                </div>
                <div className="content">
                    <h4>Trusted organization</h4>
                    <span>We are dedicated to creating a safe space where girls can grow, learn, and succeed.</span>
                </div>
            </div>
            <div className="inner-item">
                <div className="icon">
                    <i className="flaticon-medal"></i>
                </div>
                <div className="content">
                    <h4>Award-winning programs</h4>
                    <span>Our programs have received recognition for their impactful work in empowering young girls.</span>
                </div>
            </div>
        </div>
        <ul>
            <li><i className="flaticon-check"></i>We provide mentorship and resources to empower girls to succeed in education and beyond.
            </li>
            <li><i className="flaticon-check"></i>Helped impact 1,211 girls with education and empowerment initiatives.</li>
        </ul>
        <div className="about-btn">
            <Link onClick={ClickHandler} to="/about" className="theme-btn">About Us</Link>
            <div className="ceo">
                <div className="image">
                    <img src={CEO} alt="" />
                </div>
                <div className="text">
                    <h4>Sandra Oate</h4>
                    <span>CEO & Founder</span>
                </div>
            </div>
        </div>
    </div>
</div>

                </div>
            </div>
            <div className="shape-1">
                <img src={shape1} alt="" />
            </div>
            <div className="shape-2">
                <img src={shape2} alt="" />
            </div>
            <div className="shape-3">
                <img src={shape3}alt="" />
            </div>
            <div className="shape-4">
                <img src={shape4} alt="" />
            </div>
            <div className="shape-5">
                <img src={shape5} alt="" />
            </div>
            <div className="shape-6">
                <img src={shape6} alt="" />
            </div>
        </section>
    );
};

export default about;
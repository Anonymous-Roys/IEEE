import React, { useState } from 'react';
import VideoModal from '../ModalVideo/VideoModal';
import CountUp from 'react-countup';


import About1 from '../../images/about/empower.jpg';
import About2 from '../../images/about/girls.jpg';
import About3 from '../../images/about/joinus.png';
import About4 from '../../images/about/about-6.jpg';
import About5 from '../../images/about/about-7.jpg';
import Aut1 from '../../images/about/aut-1.jpg';
import Aut2 from '../../images/about/aut-2.jpg';
import Aut3 from '../../images/about/aut-3.jpg';

import Shape1 from '../../images/about/shape4.svg';
import Shape2 from '../../images/about/shape11.svg';
import Shape3 from '../../images/logo.png';
import Shape4 from '../../images/about/shape10.svg';
import Shape5 from '../../images/about/call.svg';
import Shape6 from '../../images/about/shape7.svg';
import Shape7 from '../../images/about/shape2.svg';
import Shape8 from '../../images/about/shape8.svg';

const AboutS2 = (props) => {

    const [activeTab, setActiveTab] = useState(0);
    const handleTabClick = (index) => {
        setActiveTab(index);
    }

    return (
        <section className={"" + props.hclass}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-12">
                        <div className="about-image">
                            <div className="image1">
                                <img src={About1} alt="" />
                            </div>
                            <div className="image2">
                                <img src={About2} alt="" />
                            </div>
                            <div className="shape-love">
                                <img src={Shape1} alt="" />
                            </div>
                            <div className="text">
                                <h2>Since</h2>
                                <h3><CountUp end={2024} enableScrollSpy /></h3>
                                <div className="shape">
                                    <img src={Shape2} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <div className="right-content">
                            <h2><img src={Shape3} alt="" className="w-25"/>Empowering Girls, One Kind Act at a Time.</h2>
                            <h3> Supporting young girls can
                                create a<span> brighter future</span>.</h3>
                            <p>By empowering young girls, we cultivate a world filled with opportunities, equality, and compassion. Together, we can nurture their dreams, foster resilience, and build a community where every girl thrives and inspires the next generation.</p>
                            <div className="about-tab">
                                <div className="tab">
                                    <button
                                        className={activeTab === 0 ? 'tablinks active' : 'tablinks'}
                                        onClick={() => handleTabClick(0)}>
                                        Our Mission
                                    </button>
                                    <button
                                        className={activeTab === 1 ? 'tablinks active' : 'tablinks'}
                                        onClick={() => handleTabClick(1)}>
                                        Our Vision
                                    </button>
                                    <button
                                        className={activeTab === 2 ? 'tablinks active' : 'tablinks'}
                                        onClick={() => handleTabClick(2)}>
                                        Excellence
                                    </button>
                                </div>
                                {/* Our Mission Tab */}
                                <div className={activeTab === 0 ? 'tabcontent active' : 'hidden'}>
                                    <div className="tab-wrap">
                                        <div className="left">
                                            <img src={About3} alt="Our Mission" />
                                            <VideoModal />
                                        </div>
                                        <div className="right">
                                            <ul>
                                                <li><i className="flaticon-check"></i> Empowering Women & Girls Globally</li>
                                                <li><i className="flaticon-check"></i> Helped fund 3 impactful projects</li>
                                                <li><i className="flaticon-check"></i> Award-Winning Nonprofit Organization</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* Our Vision Tab */}
                                <div className={activeTab === 1 ? 'tabcontent active' : 'hidden'}>
                                    <div className="tab-wrap">
                                        <div className="left">
                                            <img src={About3} alt="Our Vision" />
                                            <VideoModal />
                                        </div>
                                        <div className="right">
                                            <ul>
                                                <li><i className="flaticon-check"></i> A Future Where Every Girl Thrives</li>
                                                <li><i className="flaticon-check"></i> Building Sustainable Communities</li>
                                                <li><i className="flaticon-check"></i> Inspiring Generational Change</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* Excellence Tab */}
                                <div className={activeTab === 2 ? 'tabcontent active' : 'hidden'}>
                                    <div className="tab-wrap">
                                        <div className="left">
                                            <img src={About3} alt="Excellence" />
                                            <VideoModal />
                                        </div>
                                        <div className="right">
                                            <ul>
                                                <li><i className="flaticon-check"></i> Commitment to Transparency</li>
                                                <li><i className="flaticon-check"></i> Supporting Over 3 Projects</li>
                                                <li><i className="flaticon-check"></i> Recognized for Transformative Impact</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="author-wrap">
                                <ul className="author-img">
                                    <li><img src={Aut1} alt="" /></li>
                                    <li className="active"><img src={Aut2} alt="" /></li>
                                    <li><img src={Aut3} alt="" /></li>
                                </ul>
                                <div className="author-text">200+ girls <div className="shape"><img
                                    src={Shape4} alt="" /></div>
                                </div>
                                <div className="contact">
                                    <div className="icon">
                                        <img src={Shape5} alt="" />
                                    </div>
                                    <div className="text">
                                        <span>Phone:</span>
                                        <h4>+233 24 057 3206</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shape-1">
                <img src={Shape6} alt="" />
            </div>
            <div className="shape-2">
                <img src={Shape7} alt="" />
            </div>
            <div className="shape-3">
                <img src={Shape8} alt="" />
            </div>
        </section >
    )
}

export default AboutS2;




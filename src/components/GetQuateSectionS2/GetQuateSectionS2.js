import React from 'react';
import VideoModal from '../ModalVideo/VideoModal';

import Shape from '../../images/healthcare-with.svg'
import Shape2 from '../../images/gq-shap-2.svg'
import Shape3 from '../../images/gq-shap-2.svg'

const GetQuateSectionS2 = (props) => {
    return (
        <section className={"" + props.hclass}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-12">
                        <div className="content">
                            <div className="section-title">
                                <span> OHEEFVFD</span>
                                <h2>Helping each other
                                    make <span>world</span> better</h2>
                                <p>Helping each other creates a stronger, kinder world. We build trust, spread compassion, and inspire others to do the same. Together, we can overcome challenges and make lasting positive changes.</p>
                            </div>
                            <div className="item-wrap">
                                <div className="year">
                                    <h3>2</h3>
                                    <span>year Of
                                        Experience</span>
                                </div>
                                <ul>
                                    <li><i className="flaticon-check"></i>service electrical layout, design</li>
                                    <li><i className="flaticon-check"></i>Compliance and Enforcement</li>
                                    <li><i className="flaticon-check"></i>Becoming a registered provider</li>
                                </ul>
                            </div>
                            <ul className="buttom-item">
                                <li>
                                    <div className="icon">
                                        <i className="flaticon-fund"></i>
                                    </div>
                                    <div className="text">
                                        <span>Emergency donate
                                            Solution system</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <i className="flaticon-cardiogram"></i>
                                    </div>
                                    <div className="text">
                                        <span>Expert team member
                                            & Active volunteer</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="shape">
                <img src={Shape2} alt="" />
            </div>
            <div className="shape2">
                <img src={Shape3} alt="" />
            </div>
        </section>
    );
};

export default GetQuateSectionS2;
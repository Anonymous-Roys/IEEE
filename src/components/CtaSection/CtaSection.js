import React from 'react';
import { Link } from 'react-router-dom';

import Shape from '../../images/cta-shap.svg'
import Shape2 from '../../images/curved_shape.svg'
import Shape3 from '../../images/arrow1.svg'

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const CtaSection = (props) => {
    return (
        <section className={"" +props.hclass}>
            <div className="container">
            <div className="content">
    <span>Empower Young Minds, Shape the Future</span>
    <h3>Support young girls to achieve their dreams by donating today</h3>
    <Link onClick={ClickHandler} to="/become-volunteer" className="theme-btn">Join as a Mentor</Link>
</div>

            </div>
            <div className="shape">
                <img src={Shape} alt="" />
            </div>
            <div className="shape-1">
                <img src={Shape2} alt="" />
            </div>
            <div className="shape-2">
                <img src={Shape3} alt="" />
            </div>
        </section>
    );
};

export default CtaSection;
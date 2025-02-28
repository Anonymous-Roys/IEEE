import React from 'react';
import { Link } from 'react-router-dom';

import Imge1 from '../../images/click_To_register.jpg'
import Shape from '../../images/register-shape.svg'
import Shape1 from '../../images/healthcare.svg'

const RegisterSection = () => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <section className="register-section">
            <div className="container">
                <div className="content">
                    <div className="image">
                        <img src={Imge1} alt="" />
                            <div className="icon">
                                <i className="flaticon-tablet"></i>
                            </div>
                    </div>
                    <div className="text">
                        <span><img src={Shape1} alt="" />Non profit Charity Fundation</span>
                        <h2>Click To Registered To be a memeber of us</h2>
                        <Link onClick={ClickHandler} to="/contact">Contact Now <i className="flaticon-right-arrow-1"></i></Link>
                    </div>
                </div>
            </div>
            <div className="shape">
                <img src={Shape} alt="" />
            </div>
        </section>
    );
};

export default RegisterSection;

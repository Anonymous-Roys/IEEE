import React from 'react';
import Logo from '../../images/logo.png'
import { Link } from 'react-router-dom';

const Midbar = () => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <div className="midbar">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-3 col-12">
                        <Link onClick={ClickHandler} to="/" className="logo-mid">
                            <img src={Logo} alt="girl genius foundation logo" className='w-25'/>
                        </Link>
                    </div>
                    <div className="col-lg-9 col-12">
                        <ul>
                            
                            <li>
                                {/* <div className="icon">
                                    <i className="fi flaticon-home-address"></i>
                                </div> */}
                                {/* <div className="text">
                                    <h3>Our Address</h3>
                                    <span>Brown St, Accra, Ghana</span>
                                </div> */}
                            </li>
                            <li>
                                <div className="icon">
                                    <i className="flaticon-phone-1"></i>
                                </div>
                                <div className="text">
                                    <h3>Contact Us</h3>
                                    <span>+233 59 579 8316</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Midbar;
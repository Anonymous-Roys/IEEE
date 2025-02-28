import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../images/logo.png'
import Services from '../../api/Services';

import shape1 from '../../images/f-shape5.svg';
import shape2 from '../../images/f-shape6.svg';
import shape3 from '../../images/f-shape4.svg';

import Icon1 from '../../images/banck/1.png';
import Icon2 from '../../images/banck/2.png';
import Icon3 from '../../images/banck/3.png';
import Icon4 from '../../images/banck/4.png';
import Icon5 from '../../images/banck/5.png';
import Icon6 from '../../images/banck/6.png';




const ClickHandler = () => {
    window.scrollTo(10, 0);
}


const FooterS2 = () => {
    const [email, setEmail] = useState('');

    const handleReset = () => {
        setEmail('');
    };

    return (
        <footer className="wpo-site-footer-s2">
            <div className="wpo-upper-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget address-widget">
                                <div className="widget-title">
                                    <h3>Address</h3>
                                </div>
                                <p>570 8th Ave, New York,NY 10018
                                    United States</p>
                                <h4>Opening Hours</h4>
                                <ul>
                                    <li>9.30am – 6.30pm</li>
                                    <li>Monday to Friday</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget ">
                                <div className="widget-title">
                                    <h3>Services</h3>
                                </div>
                                <ul>
                                    {Services.slice(0, 5).map((service, Sitem) => (
                                        <li key={Sitem}><Link onClick={ClickHandler} to={`/service-single/${service.slug}`}>{service.title}</Link></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget ">
                                <div className="widget-title">
                                    <h3>Useful links</h3>
                                </div>
                                <ul>
                                    <li><Link onClick={ClickHandler} to="/">Home</Link></li>
                                    <li><Link onClick={ClickHandler} to="/about">about us</Link></li>
                                    <li><Link onClick={ClickHandler} to="/service">service</Link></li>
                                    <li><Link onClick={ClickHandler} to="/blog">blog</Link></li>
                                    <li><Link onClick={ClickHandler} to="/contact">contact us</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget newsletter-widget">
                                <div className="widget-title">
                                    <h3>newsletter</h3>
                                </div>
                                <div className="newsletter">
                                    <form className="form-fild">
                                        <input className="fild"
                                            type="text"
                                            placeholder="Your email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)} />
                                        <button type="submit" onClick={handleReset}><i className="flaticon-next"></i></button>
                                        <div className="terms">
                                            <input type="checkbox" id="Insurance" />
                                            <label htmlFor='Insurance'>I agree all your <Link to="#">terms</Link> and
                                                policies</label>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wpo-lower-footer">
                <div className="container">
                    <div className="row g-0 align-items-center">
                        <div className="col col-lg-2 col-12">
                            <div className="logo">
                                <img src={Logo} alt="blog" />
                            </div>
                        </div>
                        <div className="col col-lg-6 col-12">
                            <p className="copyright"> &copy; 2024 <Link onClick={ClickHandler} to="/">wpOcean</Link> - Non Profit.
                                All
                                rights reserved.</p>
                        </div>
                        <div className="col col-lg-4 col-12">
                            <ul>
                                <li><Link onClick={ClickHandler} to="#"><img src={Icon1} alt="" /></Link></li>
                                <li><Link onClick={ClickHandler} to="#"><img src={Icon2} alt="" /></Link></li>
                                <li><Link onClick={ClickHandler} to="#"><img src={Icon3} alt="" /></Link></li>
                                <li><Link onClick={ClickHandler} to="#"><img src={Icon4} alt="" /></Link></li>
                                <li><Link onClick={ClickHandler} to="#"><img src={Icon5} alt="" /></Link></li>
                                <li><Link onClick={ClickHandler} to="#"><img src={Icon6} alt="" /></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shape">
                <img src={shape1} alt="" />
            </div>
            <div className="shape2">
                <img src={shape2} alt="" />
            </div>
            <div className="shape3">
                <img src={shape3} alt="" />
            </div>
        </footer>
    );
};

export default FooterS2;
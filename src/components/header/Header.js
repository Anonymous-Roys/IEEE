import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import MobileMenu from '../MobileMenu/MobileMenu'
import { connect } from "react-redux";
import { removeFromCart } from "../../store/actions/action";
import HeaderTopbar from '../HeaderTopbar/HeaderTopbar';
import Midbar from '../Midbar/Midbar';



const Header = (props) => {
    const [menuActive, setMenuState] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

     useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);




    return (
        <header id="header">
            {/* <HeaderTopbar/> */}
            <Midbar />
            <div className={"" + props.hclass}>
            <nav
      className={`navigation navbar navbar-expand-lg navbar-light sticky-on ${
        isScrolled ? "sticky-header" : ""
      }`}
    >
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                                <MobileMenu />
                            </div>
                            <div className="col-lg-0 col-md-6 col-6">
                                <div className="navbar-header">
                                    <Link onClick={ClickHandler} className="navbar-brand" to="/home"><img src={props.Logo}
                                        alt="logo" className='w-25'/></Link>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-1 col-1">
                                <div id="navbar" className="collapse navbar-collapse navigation-holder">
                                    <button className="menu-close"><i className="ti-close"></i></button>
                                    <ul className="nav navbar-nav mb-2 mb-lg-0">
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} className="active" to="/home">Home</Link>
                                        </li>
                                        <li><Link onClick={ClickHandler} to="/about">About</Link></li>
                                        <li><Link onClick={ClickHandler} to="/media">Media</Link></li>
                                        {/* <li><Link onClick={ClickHandler} to="/donate">Donate</Link></li> */}
                                        
                                        {/* <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} to="/service">services</Link>
                                        </li> */}
                                       
                                        {/* <li><Link onClick={ClickHandler} to="/blog">Blog</Link></li> */}
                                        
                                        {/* <li><Link onClick={ClickHandler} to="/contact">contact</Link></li> */}
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-2 col-2">
                                <div className="header-right">
                                    <div className="header-search-form-wrapper">
                                        <div className="cart-search-contact">
                                            <button onClick={() => setMenuState(!menuActive)} className="search-toggle-btn"><i
                                                className={`fi ti-search ${menuActive ? "ti-close" : "fi "}`}></i></button>
                                            <div className={`header-search-form ${menuActive ? "header-search-content-toggle" : ""}`}>
                                                <form onSubmit={SubmitHandler}>
                                                    <div>
                                                        <input type="text" className="form-control"
                                                            placeholder="Search here..." />
                                                        <button type="submit"><i
                                                            className="fi flaticon-magnifying-glass"></i></button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="close-form">
                                        <Link onClick={ClickHandler} className="theme-btn" to="/donate">Donate now</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}
const mapStateToProps = (state) => {
    return {
        carts: state.cartList.cart,
    };
};


export default connect(mapStateToProps, { removeFromCart })(Header);
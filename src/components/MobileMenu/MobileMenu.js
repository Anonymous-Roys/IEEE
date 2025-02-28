import React, { Fragment, useState } from 'react';
import List from "@mui/material/List";
import ListItem from "@mui/material/List";
import Collapse from "@mui/material/Collapse";
import { NavLink } from "react-router-dom";
import './style.css';

const menus = [
    {
        id: 1,
        title: 'Home',
        link: '/home',
    
    },
    {
        id: 2,
        title: 'About',
        link: '/about',
        // submenu: [
           
        //     {
        //         id: 22,
        //         title: 'Donate',
        //         link: '/donate'
        //     },
        //     {
        //         id: 23,
        //         title: 'Event',
        //         link: '/event'
        //     },
            // {
            //     id: 24,
            //     title: 'Event Single',
            //     link: '/event-single/Custom-Fabrication'
            // },
            // {
            //     id: 25,
            //     title: 'Causes',
            //     link: '/causes'
            // },
            // {
            //     id: 26,
            //     title: 'Causes Single',
            //     link: '/causes-single/established-fact'
            // },
            // {
            //     id: 27,
            //     title: 'Volunteer',
            //     link: '/volunteer-1'
            // },
            // {
            //     id: 201,
            //     title: 'Volunteer Single',
            //     link: '/volunteer-single/Henry-Bannet'
            // },
            // {
            //     id: 202,
            //     title: 'Become Volunteer',
            //     link: '/become-volunteer'
            // },
        // ]
    },

    {
        id: 3,
        title: 'Services',
        link: '/service'
    },

    // {
    //     id: 4,
    //     title: 'Blog',
    //     link: '/blog',
    //     // submenu: [
    //     //     {
    //     //         id: 61,
    //     //         title: 'Blog',
    //     //         link: '/blog'
    //     //     },
    //         // {
    //         //     id: 62,
    //         //     title: 'Blog Left sidebar',
    //         //     link: '/blog-left-sidebar'
    //         // },
    //         // {
    //         //     id: 63,
    //         //     title: 'Blog full width',
    //         //     link: '/blog-fullwidth'
    //         // },
    //         // {
    //         //     id: 64,
    //         //     title: 'Blog single',
    //         //     link: '/blog-single/Why-Industry-Are-A-Juicy-Target-For-Cyberattack'
    //         // },
    //         // {
    //         //     id: 65,
    //         //     title: 'Blog single Left sidebar',
    //         //     link: '/blog-single-left-sidebar/Why-Industry-Are-A-Juicy-Target-For-Cyberattack'
    //         // },
    //         // {
    //         //     id: 66,
    //         //     title: 'Blog details fullwidth',
    //         //     link: '/blog-single-fullwidth/Why-Industry-Are-A-Juicy-Target-For-Cyberattack'
    //         // },
    //     // ]
    // },
    // {
    //     id: 5,
    //     title: 'Contact',
    //     link: '/contact',
    // }


]


const MobileMenu = () => {

    const [openId, setOpenId] = useState(0);
    const [menuActive, setMenuState] = useState(false);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div>
            <div className={`mobileMenu ${menuActive ? "show" : ""}`}>
                <div className="menu-close">
                    <div className="clox" onClick={() => setMenuState(!menuActive)}><i className="ti-close"></i></div>
                </div>

                <ul className="responsivemenu">
                    {menus.map((item, mn) => {
                        return (
                            <ListItem className={item.id === openId ? 'active' : null} key={mn}>
                                {item.submenu ?
                                    <Fragment>
                                        <p onClick={() => setOpenId(item.id === openId ? 0 : item.id)}>{item.title}
                                            <i className={item.id === openId ? 'fa fa-angle-up' : 'fa fa-angle-down'}></i>
                                        </p>
                                        <Collapse in={item.id === openId} timeout="auto" unmountOnExit>
                                            <List className="subMenu">
                                                <Fragment>
                                                    {item.submenu.map((submenu, i) => {
                                                        return (
                                                            <ListItem key={i}>
                                                                <NavLink onClick={ClickHandler} className="active"
                                                                    to={submenu.link}>{submenu.title}</NavLink>
                                                            </ListItem>
                                                        )
                                                    })}
                                                </Fragment>
                                            </List>
                                        </Collapse>
                                    </Fragment>
                                    : <NavLink className="active"
                                        to={item.link}>{item.title}</NavLink>
                                }
                            </ListItem>
                        )
                    })}
                </ul>

            </div>

            <div className="showmenu mobail-menu" onClick={() => setMenuState(!menuActive)}>
                <button type="button" className="navbar-toggler open-btn">
                    <span className="icon-bar first-angle"></span>
                    <span className="icon-bar middle-angle"></span>
                    <span className="icon-bar last-angle"></span>
                </button>
            </div>
        </div>
    )
}

export default MobileMenu;
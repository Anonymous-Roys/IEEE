import React from "react";
import { Link } from "react-router-dom";
import Teams from "../../api/team";


const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const TeamSectionS2 = (props) => {

    return (
        <section className={"" + props.hclass}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-12">
                        <div className="section-title text-center">
                            <span>We are always open for children</span>
                            <h2>Helping each other can
                                make <span>world</span> better</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {
                        Teams.slice(4, 7).map((team, titem) => (
                            <div className="col-lg-4 col-md-6 col-12" key={titem}>
                                <div className="vol-card-s2">
                                    <div className="image">
                                        <img src={team.timg} alt="" />
                                        <span className="hover-icon">
                                            <i className="ti-plus"></i>
                                            <i className="ti-close"></i>
                                        </span>
                                        <ul>
                                            <li><Link onClick={ClickHandler} to="#"><i className="flaticon-camera"></i></Link></li>
                                            <li><Link onClick={ClickHandler} to="#"><i className="flaticon-facebook-app-symbol"></i></Link></li>
                                            <li><Link onClick={ClickHandler} to="#"><i className="flaticon-linkedin"></i></Link></li>
                                            <li><Link onClick={ClickHandler} to="#"><i className="flaticon-twitter"></i></Link></li>
                                        </ul>
                                    </div>
                                    <div className="text">
                                        <h3><Link onClick={ClickHandler} to={`/volunteer-single/${team.slug}`}>{team.title}</Link></h3>
                                        <span>{team.subtitle}</span>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
             
            </div>
        </section>
    )
}
export default TeamSectionS2;

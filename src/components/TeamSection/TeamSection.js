import React from "react";
import { Link } from "react-router-dom";
import Teams from "../../api/team";


const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const TeamSection = (props) => {

    return (
        <section className={"" + props.hclass}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-12">
                    <div className="section-title text-center">
    <span>You Can Empower Girls With Us</span>
    <h2>Meet the <span>Team</span> Members</h2>
</div>

                    </div>
                </div>
                <div className="row">
                    {
                        Teams.slice(0, 5).map((team, titem) => (
                            <div className="col-lg-3 col-md-6 col-12" key={titem}>
                                <div className="vol-card">
                                    <div className="image">
                                        <img src={team.timg} alt="" />
                                        <span className="hover-icon"><i className="flaticon-share"></i></span>
                                        <ul>
                                            <li><a onClick={ClickHandler} href={team.instagram}><i className="flaticon-camera"></i></a></li>
                                            {/* <li><Link onClick={ClickHandler} to="#"><i className="flaticon-facebook-app-symbol"></i></Link></li> */}
                                            <li><a onClick={ClickHandler} href={team.linkedIn} target="_blank"><i className="flaticon-linkedin"></i></a></li>
                                            {/* <li><Link onClick={ClickHandler} to="#"><i className="flaticon-twitter"></i></Link></li> */}
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
                <div className="all-btn">
                    <Link onClick={ClickHandler} to="/volunteer-1" className="theme-btn">All Volunteer</Link>
                </div>
            </div>
        </section>
    )
}
export default TeamSection;

import React from "react";
import { Link } from "react-router-dom";
import Teams from "../../api/team";


const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const TeamSectionS3 = (props) => {

    return (
        <section className="volunteer-section volunteer-section-s3 section-padding">
            <div className="container">
                <div className="row">
                    {
                        Teams.slice(0, 4).map((team, titem) => (
                            <div className="col-lg-3 col-md-6 col-12" key={titem}>
                                <div className="vol-card">
                                    <div className="image">
                                        <img src={team.timg} alt="" />
                                        <span className="hover-icon"><i className="flaticon-share"></i></span>
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
export default TeamSectionS3;
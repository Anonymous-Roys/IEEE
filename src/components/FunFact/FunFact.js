import React from 'react';
import CountUp from 'react-countup';
import Shape from '../../images/funfuck-shape.svg';

const FunFact = (props) => {

    return (
        <section className="funfact-section section-padding">
    <div className="container">
        <div className="row align-items-center">
            <div className="col-lg-6 col-12">
                <div className="content">
                    <h2>Empowerment, Education, and Growth</h2>
                    <h3>We inspire, guide, and <span>never</span> stop believing</h3>
                    <p>Girl Genius Foundation is dedicated to uplifting young girls through education, mentorship, and innovative programs, creating tomorrow's leaders.</p>
                    <a href="tel:+4733378901">
                        <i className="flaticon-phone-call"></i>
                        <span>+233 24 057 3206</span>
                    </a>
                </div>
            </div>
            <div className="col-lg-6 col-12">
                <div className="funfact">
                    <ul>
                        <li>
                            <div className="count">
                                <h3><CountUp end={2} enableScrollSpy />+</h3>
                            </div>
                            <span>Schools impacted</span>
                        </li>
                        <li>
                            <div className="count">
                                <h3><CountUp end={20} enableScrollSpy /><CountUp end={0} enableScrollSpy />+</h3>
                            </div>
                            <span>Girls supported monthly</span>
                        </li>
                        <li>
                            <div className="count">
                                <h3><CountUp end={30} enableScrollSpy />+</h3>
                            </div>
                            <span>Webinars organized</span>
                        </li>
                        <li>
                            <div className="count">
                                <h3><CountUp end={100} enableScrollSpy />%</h3>
                            </div>
                            <span>Successful initiatives</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div className="shape">
        <img src={Shape} alt="" />
    </div>
</section>

    )

}

export default FunFact;
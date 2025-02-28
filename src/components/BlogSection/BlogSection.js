import React from "react";
import { Link } from "react-router-dom";
import blogs from '../../api/blogs'
import Shape from '../../images/blog/bg-shape.png'
import Shape1 from '../../images/blog/business.svg'

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const BlogSection = (props) => {



    return (
        <section className={"" + props.tClass}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-12">
                        <div className="section-title">
                            <span>Hope, Support, and Love for All.</span>
                            <h2>our latest article news
                                & blogs you need</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {
                        blogs.slice(0,3).map((bloge, bkye) => (
                            <div className="col-lg-4 col-md-6 col-12" key={bkye}>
                                <div className="blog-card">
                                    <div className="image">
                                        <img src={bloge.screens} alt="" />
                                        <img src={bloge.screens} alt="" />
                                    </div>
                                    <ul>
                                        <li><i className="flaticon-calendar"></i>{bloge.create_at}</li>
                                        <li><i className="flaticon-chat"></i>2 Comments</li>
                                    </ul>
                                    <div className="content">
                                        <h3><Link onClick={ClickHandler} to={`/blog-single/${bloge.slug}`}>{bloge.title}</Link></h3>
                                        <p>{bloge.description}</p>
                                        <div className="content_bottom">
                                            <span><Link onClick={ClickHandler} to={`/blog-single/${bloge.slug}`}>Read More <i className="flaticon-next"></i></Link></span>
                                            <span><Link onClick={ClickHandler} to={`/blog-single/${bloge.slug}`}>
                                                <img src={Shape1} alt="" />
                                                Business</Link></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="shape">
                <img src={Shape} alt="" />
            </div>
        </section>
    );
}

export default BlogSection;





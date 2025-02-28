import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import TeamSection from '../../components/TeamSection/TeamSection';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '../../images/logo.png'
import FooterS3 from '../../components/footerS3/FooterS3';


const AboutPage = () => {
    return (
        <Fragment>
            <Navbar hclass={'wpo-site-header'} Logo={Logo} />
            <PageTitle pageTitle={'About Us'} pagesub={'About'} />
            {/* <AboutS2 hclass={'about-section-s4 section-padding'} />
            <FunFactS2 hclass={'funfact-section-s2'} />
            <ServiceSection4 hclass={"service-section-s5 section-padding"} />
            <CtaSection hclass={'cta-section'} /> */}
            {/* <DonateSection /> */}
            <TeamSection hclass={'volunteer-section section-padding'} />
            {/* <ProjectSectionS2 hclass={'project-section-s2 section-padding'} /> */}
            {/* <Testimonial2 tClass={'testimonial-section-s2 section-padding'} /> */}
            {/* <PartnerSectionS3 /> */}
            {/* <BlogSection tClass={'blog-section-s4 section-padding'} /> */}
            <FooterS3 />
            <Scrollbar />
        </Fragment>
    )
};
export default AboutPage;

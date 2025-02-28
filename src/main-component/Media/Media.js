import React, { Fragment, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '../../images/logo.png';
import FooterS3 from '../../components/footerS3/FooterS3';
import './MediaGallery.css';

const Media = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    // Sample media data - replace with your actual data
    const mediaItems = [
        {
            id: 1,
            image: '/images/gallery/large1.jpg',
            title: 'Company Retreat 2024',
            description: 'Our team building activities at the annual company retreat in Colorado.',
            size: 'large'
        },
        {
            id: 2,
            image: '/images/gallery/medium1.jpg',
            title: 'Product Launch',
            description: 'Unveiling our latest innovation at the tech convention in Las Vegas.',
            size: 'medium'
        },
        {
            id: 3,
            image: '/images/gallery/small1.jpg',
            title: 'Community Outreach',
            description: 'Participating in local community service projects to give back.',
            size: 'small'
        },
        {
            id: 4,
            image: '/images/gallery/medium2.jpg',
            title: 'Award Ceremony',
            description: 'Celebrating excellence with our industry recognition awards.',
            size: 'medium'
        },
        {
            id: 5,
            image: '/images/gallery/large2.jpg',
            title: 'International Conference',
            description: 'Representing our brand at the global industry summit in Tokyo.',
            size: 'large'
        },
        {
            id: 6,
            image: '/images/gallery/small2.jpg',
            title: 'Office Tour',
            description: 'A glimpse into our modern workspace designed for creativity and collaboration.',
            size: 'small'
        },
        {
            id: 7,
            image: '/images/gallery/medium3.jpg',
            title: 'Team Celebration',
            description: 'Celebrating our milestone achievements and team success.',
            size: 'medium'
        },
        {
            id: 8,
            image: '/images/gallery/small3.jpg',
            title: 'Behind the Scenes',
            description: 'The creative process that goes into developing our products.',
            size: 'small'
        }
    ];

    const openFullscreen = (item) => {
        setSelectedImage(item);
        document.body.style.overflow = 'hidden';
    };

    const closeFullscreen = () => {
        setSelectedImage(null);
        document.body.style.overflow = 'auto';
    };

    return (
        <Fragment>
            <Navbar hclass={'wpo-site-header'} Logo={Logo} />
            <PageTitle pageTitle={'About Us'} pagesub={'About'} />
            
            <section className="quasarx_media_section">
                <div className="nebulaz_container">
                    <div className="cosmoverse_section_title">
                        <h2>Our Media Gallery</h2>
                        <p>Explore our visual journey through the years</p>
                    </div>
                    
                    <div className="stellarforce_media_grid">
                        {mediaItems.map((item) => (
                            <div 
                                key={item.id} 
                                className={`galaxyview_media_item galaxyview_media_${item.size}`}
                                onClick={() => openFullscreen(item)}
                            >
                                <div className="quantumleap_image_container">
                                    <img src={item.image} alt={item.title} />
                                    <div className="aetherium_overlay">
                                        <h3 className="pulsarwave_title">{item.title}</h3>
                                        <p className="novastrike_description">{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            {selectedImage && (
                <div className="vortexdrive_fullscreen_modal" onClick={closeFullscreen}>
                    <span className="chronomancer_close_button">&times;</span>
                    <div className="hyperionflux_modal_content" onClick={(e) => e.stopPropagation()}>
                        <img src={selectedImage.image} alt={selectedImage.title} />
                        <div className="celestialorb_image_info">
                            <h3>{selectedImage.title}</h3>
                            <p>{selectedImage.description}</p>
                        </div>
                    </div>
                </div>
            )}
            
            <FooterS3 />
            <Scrollbar />
        </Fragment>
    );
};

export default Media;
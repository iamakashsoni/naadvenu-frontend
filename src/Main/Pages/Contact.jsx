import React from 'react';
import withPreloader from '../../Component/withPreloader';
import PageHeader from '../../Component/PageHeader';
// import mapIcon from '../../Images/mapIcon.png';
import GoogleMap from '../../Component/GoogleMap';

const Contact = () => {
    return (
        <>
            <section className="page">
                <PageHeader title="Contact" subtitle="Get in Touch with Us for Musical Inquiries." />
                <div className='page-bottom padding-top-0'>
                    <GoogleMap />
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="contact">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                            <div className="contact-item">
                                                <div className="icon">
                                                    <i className="fa fa-location-arrow"></i>
                                                </div>
                                                <p>Kids Planet, Sector-10,<br />Airoli, Navi Mumbai, Maharashtra, India</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                            <div className="contact-item">
                                                <div className="icon">
                                                    <i className="fa fa-phone"></i>
                                                </div>
                                                <a href="tel:(+91) 74002 96867">(+91) 74002 96867</a>
                                                <a href="tel:(+91) 74002 96867">(+91) 74002 96867</a>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                            <div className="contact-item">
                                                <div className="icon">
                                                    <i className="fa fa-envelope"></i>
                                                </div>
                                                <a href="mailto:contact@naadvenu.com">contact@naadvenu.com</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contact-bottom">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <h5 className="margin-bottom-30">Get in touch</h5>
                                    <div className="contact-text">
                                        <p>
                                            Connect with us for any inquiries related to music, events, or classes.
                                            We're here to assist you in every way we can.
                                        </p>
                                    </div>
                                </div>

                                <div className="col-lg-8 col-md-6 col-sm-12">
                                    <div className="contact-form">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-12 col-sm-12">
                                                <input type="text" placeholder="Name, surname" />
                                            </div>
                                            <div className="col-lg-6 col-md-12 col-sm-12">
                                                <input type="text" placeholder="E-Mail" />
                                            </div>
                                            <div className="col-lg-12">
                                                <textarea placeholder="Your message"></textarea>
                                            </div>
                                            <div className="col-lg-12">
                                                <button className="btn-primary-line">SEND</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default withPreloader(Contact);

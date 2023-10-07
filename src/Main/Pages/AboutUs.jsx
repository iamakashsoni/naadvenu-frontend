import React from 'react'
import withPreloader from '../../Component/withPreloader';
import PageHeader from '../../Component/PageHeader'
import Thumbnail from '../../Images/1.jpg'
import teamImage from '../../Images/team.jpg'


const featureData = [
    {
        id: 1,
        iconClass: 'fa fa-music',
        title: 'Flute Lessons',
        description: 'Learn to play the flute with expert guidance and personalized lessons.',
    },
    {
        id: 2,
        iconClass: 'fa fa-users',
        title: 'Community',
        description: 'Join a thriving flute community and share your music journey.',
    },
    {
        id: 3,
        iconClass: 'fa fa-microphone',
        title: 'Performance Opportunities',
        description: 'Showcase your talent with opportunities to perform at events and concerts.',
    },
];

const teamData = [
    {
        id: 1,
        quote: 'Namaskar! I am here to help you achieve your musical goals. Let\'s create some magical tunes together.',
        imageSrc: teamImage,
        userName: 'Aarav Sharma',
        userRole: 'Flute Guru',
    },
    {
        id: 2,
        quote: 'Swagatam! I am here to guide you on your musical journey. Let\'s explore the world of melodies together.',
        imageSrc: teamImage,
        userName: 'Ishika Patel',
        userRole: 'Music Mentor',
    },
    {
        id: 3,
        quote: 'Sat Sri Akal! Join me in the beautiful world of music. Let\'s make harmonious rhythms and melodies.',
        imageSrc: teamImage,
        userName: 'Rajinder Singh',
        userRole: 'Flute Instructor',
    },
];

const AboutUs = () => {
    return (
        <>
            <section className="page">
                <PageHeader title="About Naadvenu" subtitle="Discover the Beauty of Music with Us." />
                <div className="page-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="about">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-12 align-self-center">
                                            <div className="about-image">
                                                <img
                                                    src={Thumbnail}
                                                    className="img-fluid w-100"
                                                    alt="Naadvenu"
                                                />
                                                <a
                                                    href="https://www.youtube.com/watch?v=dPZTh2NKTm4"
                                                    className="play"
                                                >
                                                    <i className="fa fa-play"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 align-self-center mobile-top-fix">
                                            <h2>About Naadvenu</h2>
                                            <h3>Experience the Magic of Music</h3>
                                            <p>
                                                Dive into the world of music with Naadvenu. We're passionate about
                                                sharing the beauty and joy of music. Our mission is to simplify
                                                the learning process and provide a platform for musical exploration.
                                            </p>
                                            <a href="/contact" className="btn-line">
                                                Contact Us
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="parallax padding-bottom-100" data-image="assets/images/photos/parallax.jpg">
                <div className="parallax-content">
                    <div className="container">
                        <div className="row">
                            <div className="offset-lg-3 col-lg-6">
                                <div className="info">
                                    <h1>Welcome to Naadvenu</h1>
                                    <p>Experience the enchanting world of music with us. Fusce placerat pretium mauris, vel sollicitudin elit lacinia vitae. Quisque sit amet nisi erat.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section home-feature">
                <div className="container">
                    <div className="row">
                        {featureData.map((feature) => (
                            <div
                                key={feature.id}
                                className="col-lg-4 col-md-6 col-sm-6 col-12"
                                data-scroll-reveal={`enter bottom move 50px over 0.6s after 0.${feature.id}s`}
                            >
                                <a href="blue-features-single.html" className="features-small-item">
                                    <div className="icon">
                                        <i className={feature.iconClass}></i>
                                    </div>
                                    <h5 className="features-title">{feature.title}</h5>
                                    <p>{feature.description}</p>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="section padding-top-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="center-heading">
                                <h2 className="section-title">Our Team</h2>
                            </div>
                        </div>
                        <div className="offset-lg-3 col-lg-6">
                            <div className="center-text">
                                <p>Get to know our dedicated team members who are passionate about music and here to support your musical journey..</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {teamData.map((member) => (
                            <div
                                key={member.id}
                                className="col-lg-4 col-md-6 col-sm-12"
                                data-scroll-reveal={`enter bottom move 50px over 0.6s after 0.${member.id}s`}
                            >
                                <div className="team-item">
                                    <div className="team-content">
                                        <i className="fa fa-quote-left"></i>
                                        <p>{member.quote}</p>
                                        <div className="user-image">
                                            <img src={member.imageSrc} alt={member.userName} />
                                        </div>
                                        <div className="team-info">
                                            <h3 className="user-name">{member.userName}</h3>
                                            <span>{member.userRole}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default withPreloader(AboutUs)

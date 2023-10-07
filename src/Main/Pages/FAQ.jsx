import React from 'react';
import withPreloader from '../../Component/withPreloader';
import PageHeader from '../../Component/PageHeader';

const FAQ = () => {
    // Define FAQ data using an array of objects
    const faqData = [
        {
            question: "How do I use maps on your platform?",
            answer: "Using maps on our platform is easy. Simply open the map feature, enter your destination, and you'll get step-by-step directions and a detailed map to guide you."
        },
        {
            question: "Can I customize the map settings?",
            answer: "Yes, you can customize the map settings to suit your preferences. You can change map styles, enable or disable traffic information, and more in the settings menu."
        },
        {
            question: "Is map navigation available offline?",
            answer: "Absolutely! We offer offline map navigation. You can download maps for your area and use them without an internet connection."
        },
        {
            question: "What if I encounter an issue with the maps?",
            answer: "If you encounter any issues or inaccuracies with our maps, please report them through our app. We constantly update and improve our maps based on user feedback."
        },
    ];

    return (
        <>
            <section className="page">
                <PageHeader title="Frequently Asked Questions" subtitle="Explore Answers to Common Queries." />
                <div className='page-bottom'>
                    <div className="container">
                        <div className="row">
                            <div className="offset-lg-2 col-lg-8">
                                <div className="faq-wrapper">
                                    <div className="faq-header">
                                        <h2>Frequently Asked Questions</h2>
                                        <p>Welcome to our FAQ section where we address common questions about using maps on our platform.</p>
                                        <div className="search">
                                            <input type="text" placeholder="Search asked questions" />
                                            <button><i className="fa fa-search"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="accordion" id="accordionExample">
                                    {/* Map through FAQ data to generate questions and answers */}
                                    {faqData.map((item, index) => (
                                        <div className="accordion-item" key={index}>
                                            <h2 className="accordion-header" id={`heading-${index}`}>
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse-${index}`} aria-expanded="false" aria-controls={`collapse-${index}`}>
                                                    {item.question}
                                                </button>
                                            </h2>
                                            <div id={`collapse-${index}`} className="accordion-collapse collapse" aria-labelledby={`heading-${index}`} data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    {item.answer}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default withPreloader(FAQ);

import React, { useState } from 'react';
import withPreloader from '../../Component/withPreloader';
import PageHeader from '../../Component/PageHeader';
import BlogImage from '../../Images/blog.jpg';
import BlogImage1 from '../../Images/header.jpg';

const blogImages = [
    BlogImage,
    BlogImage1,
    BlogImage,
];

const BlogDetail = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleNextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === blogImages.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePrevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? blogImages.length - 1 : prevIndex - 1
        );
    };
    const totalPages = blogImages.length;
    const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

    return (
        <>
            <section className="page">
                <PageHeader title="Blog Detail" subtitle="Explore Our Latest Blog Posts." />
                <div className="page-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="blog-list">
                                            <div className="blog-post-thumb big mbottom-60">
                                                <div className="img">
                                                    <img src={blogImages[currentImageIndex]} alt="" />
                                                    <div className="date">
                                                        <strong>SEP-</strong>
                                                        <span>09</span>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-12 pull-right">
                                                        <button onClick={handlePrevImage} className='btn-blue-line'>Previous</button>
                                                        <button onClick={handleNextImage} className='btn-blue-line'>Next</button>
                                                    </div>
                                                </div>
                                                <div className="blog-content">
                                                    <div className="blog-text">
                                                        <ul className="post-meta mbottom-20">
                                                            <li><a href="#"><span className="icon fa fa-user"></span>by Akash Soni</a></li>
                                                            <li><a href="#"><span className="icon fa fa-comment-o"></span>3 Comments</a></li>
                                                        </ul>
                                                        <div className="text post-detail">
                                                            <p>Mauris tellus sem, ultrices varius nisl at, convallis iaculis mauris. Sed eget sem vitae purus tempus dignissim. Quisque euismod nec lacus sit amet maximus. Ut convallis sagittis lorem auctor malesuada. Morbi auctor tortor eu risus condimentum.</p>
                                                            <p>Quisque bibendum mi quis consequat ultricies. Donec quis pharetra nisi, a congue justo. Aliquam erat volutpat. Nunc id lacus egestas, accumsan lorem eu, rhoncus velit. Duis dapibus varius mauris, ut rutrum leo vulputate a. Praesent ac fringilla turpis. Donec rhoncus eget enim sit amet euismod. Pellentesque pellentesque malesuada lobortis. Quisque et dictum nulla. Sed eu ante at massa imperdiet ultricies. Vivamus vulputate faucibus lorem, eget efficitur purus dictum nec.</p>
                                                            <blockquote>
                                                                <div className="text">
                                                                    <p>Aliquam ullamcorper malesuada dapibus. Curabitur ac lectus sit amet dui euismod auctor. Suspendisse sagittis id lacus eget vulputate. Ut nec arcu ut sem molestie tincidunt luctus eget tellus. Etiam consectetur, eros eu laoreet sagittis.</p>
                                                                </div>
                                                                <div className="author">Parsley Montana</div>
                                                            </blockquote>
                                                            <p>Suspendisse condimentum, eros ac pulvinar iaculis, augue odio vehicula leo, vitae dictum nibh quam rhoncus risus. Nam tristique tellus et convallis faucibus. Cras in lacus at odio tristique tempor vel quis sem. Sed id lorem sit amet turpis mattis tempor.</p>
                                                        </div>
                                                        <div className="post-footer">
                                                            <ul className="share">
                                                                <span>Share - </span>
                                                                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                                                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                                                <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                                                <li><a href="#"><i className="fa fa-pinterest"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="section-comments">
                                            <h5 className="mbottom-30">Comments (3)</h5>
                                            <ul>
                                                <li>
                                                    <div className="avatar">
                                                        <img src="assets/images/photos/blog/comment-avatar.png" alt="" />
                                                    </div>
                                                    <div className="comment-content">
                                                        <div className="comment-by">
                                                            <strong>Hans Down</strong>
                                                            <span>09 SEP 2023</span>
                                                            <a href="#" className="btn-reply"><i className="fa fa-reply"></i> Reply</a>
                                                        </div>
                                                        <p>Praesent ut fringilla ligula. Vivamus et lacus nec risus malesuada vestibulum. Phasellus lobortis viverra lobortis. Donec iaculis, erat eu bibendum faucibus.</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="avatar">
                                                        <img src="assets/images/photos/blog/comment-avatar.png" alt="" />
                                                    </div>
                                                    <div className="comment-content">
                                                        <div className="comment-by">
                                                            <strong>Penny Tool</strong>
                                                            <span>09 SEP 2023</span>
                                                            <a href="#" className="btn-reply"><i className="fa fa-reply"></i> Reply</a>
                                                        </div>
                                                        <p>Praesent ut fringilla ligula. Vivamus et lacus nec risus malesuada vestibulum. Phasellus lobortis viverra lobortis. Donec iaculis, erat eu bibendum faucibus.</p>
                                                    </div>
                                                    <ul>
                                                        <li>
                                                            <div className="avatar">
                                                                <img src="assets/images/photos/blog/comment-avatar.png" alt="" />
                                                            </div>
                                                            <div className="comment-content">
                                                                <div className="comment-by">
                                                                    <strong>Eric Widget</strong>
                                                                    <span>09 SEP 2023</span>
                                                                    <a href="#" className="btn-reply"><i className="fa fa-reply"></i> Reply</a>
                                                                </div>
                                                                <p>Praesent ut fringilla ligula. Vivamus et lacus nec risus malesuada vestibulum. Phasellus lobortis viverra lobortis. Donec iaculis, erat eu bibendum faucibus.</p>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="post-comment">
                                            <h5 className="mbottom-30">Post a Comment</h5>
                                            <div className="comment-form">
                                                <form method="post">
                                                    <div className="row">
                                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                                            <div className="form-item">
                                                                <label htmlFor="f1">Name:</label>
                                                                <input type="text" id="f1" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                                            <div className="form-item">
                                                                <label htmlFor="f2">Email:</label>
                                                                <input type="text" id="f2" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <div className="form-item">
                                                                <label htmlFor="f3">Comment:</label>
                                                                <textarea id="f3"></textarea>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <button type="submit" className="btn-primary-line pull-right">Submit Comment</button>
                                                        </div>
                                                    </div>
                                                </form>
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
}

export default withPreloader(BlogDetail);

import React, { useState } from 'react';
import withPreloader from '../../Component/withPreloader';
import PageHeader from '../../Component/PageHeader';
import BlogImage from '../../Images/blog.jpg';

const BlogList = () => {
    const [blogPosts, setBlogPosts] = useState([
        {
            id: 1,
            title: "Asal Expands the Leadership Team with David Lin, Controller",
            date: "SEP 09",
            author: "Akash Soni",
            comments: 3,
            excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget ultricies lorem. Donec vitae semper urna. Nulla facilisi. Fusce vel eleifend purus.",
            image: BlogImage,
        },
        {
            id: 2,
            title: "Asal Partners with Velocloud to Deliver Managed SD-WAN",
            date: "SEP 09",
            author: "Akash Soni",
            comments: 3,
            excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget ultricies lorem. Donec vitae semper urna. Nulla facilisi. Fusce vel eleifend purus.",
            image: BlogImage,
        },
        {
            id: 3,
            title: "Asal Partners with Velocloud to Deliver Managed SD-WAN",
            date: "SEP 09",
            author: "Akash Soni",
            comments: 3,
            excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget ultricies lorem. Donec vitae semper urna. Nulla facilisi. Fusce vel eleifend purus.",
            image: BlogImage,
        },
    ]);

    return (
        <>
            <section className="page">
                <PageHeader title="Blog" subtitle="Explore Our Latest Blog Posts." />
                <div className="page-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="blog-list">
                                    <div className="row">
                                        {blogPosts.map((post) => (
                                            <div className="col-lg-6" key={post.id}>
                                                <div className="blog-post-thumb">
                                                    <div className="img">
                                                        <img src={post.image} alt="" />
                                                        <div className="date">
                                                            <strong>{post.date}</strong>
                                                        </div>
                                                    </div>
                                                    <div className="blog-content">
                                                        <ul className="post-meta">
                                                            <li>
                                                                <a href="#">
                                                                    <span className="icon fa fa-user"></span>by {post.author}
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <span className="icon fa fa-comment-o"></span>
                                                                    {post.comments} Comments
                                                                </a>
                                                            </li>
                                                        </ul>
                                                        <h3>
                                                            <a href="/blog-detail">{post.title}</a>
                                                        </h3>
                                                        <div className="text">{post.excerpt}</div>
                                                        <a href="/blog-detail" className="btn-primary-line">
                                                            Read More
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
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

export default withPreloader(BlogList);

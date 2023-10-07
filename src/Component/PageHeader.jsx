import React from 'react';

const PageHeader = ({ title, subtitle }) => {
    return (
        <div className="cover">
            <div className="cover-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1>{title}</h1>
                            <p>{subtitle}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cover-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <ol className="breadcrumb">
                                <li><a href="/">Home</a></li>
                                <li className="active">{title}</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageHeader;

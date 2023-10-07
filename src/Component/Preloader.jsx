import React from 'react';

const Preloader = ({ isLoading }) => {
    if (isLoading) {
        return (
            <div id="preloader">
                <div class="jumper">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        );
    }

    return null;
};

export default Preloader;

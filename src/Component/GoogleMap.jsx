import React from 'react';

const GoogleMap = () => {
    return (
        <div className="map-container">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.1175099410407!2d72.98686437393427!3d19.146332849763304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b943281be111%3A0xd23f28051dffdb8!2sNew%20kids%20planet!5e0!3m2!1sen!2sin!4v1696620739570!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: '0' }}
                allowFullScreen=""
                loading="lazy"
                title="Google Map"
            ></iframe>
        </div>
    );
};

export default GoogleMap;

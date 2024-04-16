import React from 'react';

const Banner = () => {
    const bannerStyle = {
        height: '100px',
        width: '100%',
        background: '#d35400', // Background color
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed', // Makes the banner fixed
        top: '120px', // Sets the top position below the header
        left: '0',
        zIndex: 1000, // Ensures it stays on top of other content
    };

    const textStyle = {
        fontSize: '40px', // Very big text size
        color: '#fff', // Text color
        fontWeight: 'bold', // Bold font weight
        textTransform: 'uppercase', // Uppercase text
    };

    return (
        <div style={bannerStyle}>
            <div style={textStyle}>WHAT CAN WE DO FOR YOU</div>
        </div>
    );
};

export default Banner;

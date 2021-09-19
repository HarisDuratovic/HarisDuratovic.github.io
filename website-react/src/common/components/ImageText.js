import React from 'react';

const ImageText = ({ children, image, ...props }) => {
    
    const style = {
        backgroundImage: `url(${image})`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "repeat",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        WebkitTextFillColor: "transparent",
        color: "#ddd",
        WebkitFontSmoothing: "antialiased",
        shadowColor: '#470000',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.2,
        elevation: 1
    }

    return (
        <span style={style} {...props}>{children}</span>
    );
}

export default ImageText;
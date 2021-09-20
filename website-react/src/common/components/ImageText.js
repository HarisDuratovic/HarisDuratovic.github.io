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
        textShadow: "rgba(0,0,0,0.2) 0px 0 2px",
    }

    return (
        <span style={style} {...props}>{children}</span>
    );
}

export default ImageText;
import React from 'react';

export {AltImage}

function AltImage({
    src,
    style,
    altText,
    ...props}) {
    return (
        <img src={src} style={style} alt={altText}/>
    )
}

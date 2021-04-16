import React from 'react';
import './Card.css';

const Images = (props) => {
    return <img src={props.imgsrc} alt="my pic" className="card__img" />;
}

export default Images;
import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';


const images = import.meta.glob('../assets/image/sliderImage/*.{png,jpg,jpeg,svg}', { eager: true });

const imageArray = Object.values(images).map((img) => img.default);

const SliderCom = () => {
    return (
        <Carousel>
            {imageArray.map((image, index) => (
                <Carousel.Item key={index}>
                    <img className="d-block w-100" src={image} alt={`Slide ${index + 1}`} />
                </Carousel.Item>
            ))}
        </Carousel>
    );
};

export default SliderCom;

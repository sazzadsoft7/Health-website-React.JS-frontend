import React from 'react';

const images = import.meta.glob('../assets/image/galleryImage/*.{png,jpg,jpeg,svg,webp}', { eager: true });
const imageArray = Object.values(images).map((img) => img.default);

const GalleryCom = () => {
    return (
        <div className="container  mt-5">
            <div className="row">
                <h4 className={'text-center'}>Gallery</h4>
            </div>
            <div className="row justify-content-center">
                {imageArray.map((image, index) => (
                    <div key={index} className="col-md-3 col-6 m-2 ">
                        <img
                            src={image}
                            className="w-100 shadow-1-strong rounded m-2"
                            alt={`Gallery Image ${index + 1}`}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GalleryCom;

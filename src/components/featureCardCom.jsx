import React from 'react';
import {Link} from "react-router-dom";



const FeatureCardCom = () => {

    const images = import.meta.glob('../assets/image/featureCardImage/*.{png,jpg,jpeg,svg}', { eager: true });
    const bgColors = [
        "#1F2937", // Dark Gray
        "#4B5563", // Slate Gray
        "#6B7280", // Cool Gray
        "#EF4444", // Red
        "#F97316", // Orange
        "#F59E0B", // Amber
        "#10B981", // Emerald Green
        "#3B82F6", // Blue
        "#6366F1", // Indigo
        "#8B5CF6", // Violet
    ];

    const imageArray = Object.entries(images).map(([path, img],index) => {
        // Extract filename and LinkTo from path (removing directories and extension)
        const fileName = path.split('/').pop().split('.')[1];
        const linkTo = path.split('/').pop().split('.').slice(2, -1).join('/');
        const bgColor = bgColors[index % bgColors.length]; // Cycle through the colors

        return {
            src: img.default,
            title: fileName, // Set title as filename
            linkTo: `/${linkTo}`, // Example dynamic link
            bgColor, // Assign a background color
        };
    });





    return (
      <>
          <div className="container">
              <div className="row d-flex justify-content-center">

                  {imageArray.map((card, index)=>(
                      <Link key={index} to={card.linkTo} className="col-md-3 col-12 m-3 p-3 rounded text-white text-decoration-none" style={{ backgroundColor: card.bgColor }}>
                          <img src={card.src} alt={card.title} height='30px'/>
                          <h4>{card.title}</h4>
                      </Link>
                  ))}
              </div>
          </div>
      </>
    );
};

export default FeatureCardCom;
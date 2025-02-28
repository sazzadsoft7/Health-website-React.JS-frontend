import React from 'react';
import serviceCardData from './../API stores/serviceCardData.js'
import {Link} from "react-router-dom";


const ServiceCardCom = () => {

    // image folder as array of path
    const images = import.meta.glob('../assets/image/serviceImage/serviceCardImage/*.{png,jpg,jpeg,svg,webp}', { eager: true });
    const imageArray = Object.values(images).map((img) => img.default);

    console.log(serviceCardData)

    return (
       <div className="container my-3">
           <div className="row">
               {serviceCardData.map((item, index)=>{
                   return (
                       <div key={index} className="col-md-4  ">
                           <div className="row">
                               <div className="col-4">
                                   <Link to={item.linkTo}>
                                       <img src={imageArray[index]} alt="card image" className="w-100" />
                                   </Link>
                               </div>
                               <div className="col-8">

                                       <h4>{item.title}</h4>
                                       <p>{item.desc}</p>

                               </div>
                           </div>
                       </div>
                   )
               })
               }
           </div>
       </div>
    );
};

export default ServiceCardCom;
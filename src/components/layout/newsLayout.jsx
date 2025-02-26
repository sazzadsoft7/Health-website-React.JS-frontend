import React from 'react';
import ad from './../../assets/image/newsImage/ad_ibn_sina.png'
import magazine from './../../assets/image/newsImage/magazine.jpg'

const NewsLayout = ({children}) => {
    return (
       <>
           <div className="container-fluid">
               <div className="row">
                   <div className='col-md-8'>
                       {children}
                   </div>
                   <div className='col-md-4'>
                        <h1 className='bg-danger text-white rounded text-center py-2 m-2'>Latest News</h1>
                       <img src={ad} alt="discount image"/>
                       <img src={magazine} alt="magazine image"/>
                   </div>
               </div>
           </div>
       </>
        
    );
};

export default NewsLayout;
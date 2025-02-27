import React, {useEffect} from 'react';
import ad from './../../assets/image/newsImage/ad_ibn_sina.png';
import magazine from './../../assets/image/newsImage/magazine.jpg';

const NewsLayout = ({ children, image }) => {

    useEffect(() => {
        const interval = setInterval(() => {
            const highLightElements = document.getElementsByClassName('highLight');
            if (highLightElements.length > 0) {
                Array.from(highLightElements).forEach((element) => {
                    element.classList.toggle('bg-danger');
                    element.classList.toggle('text-white');

                });
            }
        }, 500);

        return () => clearInterval(interval);
    }, []);




    return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-8">
                        {children}
                    </div>
                    <div className="col-md-4">
                        <h1 className="highLight bg-warning rounded text-center py-2 m-2">Latest News</h1>

                        {!image || image.length === 0 ? (
                            <div className={'w-100'}>
                                <img src={ad} alt="discount" className={'w-100 p-3'}/>
                                <img src={magazine} alt="magazine" className={'w-100 p-3'}/>
                            </div>
                        ) : (
                            image.map((imgSrc, index) => (
                                <img key={index} src={imgSrc} alt="news" className={'w-100 p-3'}/>
                            ))
                        )}
                    </div>
                </div>
            </div>
        );
    };


export default NewsLayout;

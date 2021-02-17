import React from 'react';
import './Carousel.css';


const CarouselComponent = (props) => {

    return(
        <div className="carousel slide carousel-component" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item">
                   {props.carouselProps.map(item => 
                    <div key={item.id}>
                     <img src={item.src} alt={item.altText} />
                       <p> {item.caption}</p>
                    </div>
                   )}
                </div>
            </div>
        </div>
    )
}

export default CarouselComponent;
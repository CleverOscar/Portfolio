import React, {useState} from 'react';
import {Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption, NavItem} from 'reactstrap';


const CarouselComponent = (props) => {

    // keep track of current image index
    const [activeIndex, setActiveIndex] = useState(0);
    // animation status
    const [animating, setAnimating] = useState(false);
    
    // next image
    const next = () => {
        if(animating) return;
        const nextIndex = activeIndex === 0 ? props.carouselProps.length - 1 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    // previous image
    const previous = () => {
        if(animating) return;
        const nextIndex = activeIndex === 0 ? props.carouselProps.length + 1 : activeIndex - 1;
    }
    
    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = props.carouselProps.map(image =>( 
            
                <CarouselItem
                    onExiting={()=> setAnimating(true)}
                    onExited={()=> setAnimating(false)}
                    key={image.src}
                    >

                </CarouselItem>
            )
        )

    return(
        <div>
            Carousel Container
        </div>
    )
} 

export default CarouselComponent;
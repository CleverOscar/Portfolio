import React from 'react';

const Image = (props) => {

    const source = props.images.map((item) => 
        <div key={item.id} className="carousel-item">
            <img className="d-block w-100" src={item.src} alt={item.caption} />
        </div>)

    return(
        <div>
            Image Element
            {source}
        </div>
    )
} 

export default Image;
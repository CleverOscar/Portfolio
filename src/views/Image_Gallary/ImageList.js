import React from 'react';
import {Col} from 'reactstrap';
const Gallary = (props) => (

        <Col xs='2'>

            {props.image.map(item => 
                    <li key={item.id}>
                    <img alt={item.altText} src={item.src} />
                </li>
            )} 
        </Col >
)

export default Gallary;
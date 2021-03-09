import React from 'react';
import {Row, Col} from 'reactstrap';
import './ImageList.css';

const Gallary = (props) => (
    <div>
        <h3 className="projects_header">Projects Worked On</h3>
        <Row>
            {props.images.map(img =>
                <Col 
                    className="gallaryImages" xs="auto"
                    sm="6"
                    md="6"
                    key={img.id}>

                    <h6>{img.caption}</h6> 
                    <img
                        className=""
                        src={img.src} 
                        alt={img.altText} />
                   
                </Col>
            )}
        </Row>
    </div>
)

export default Gallary;
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
                    key={img.id}>
                    
                    <img 
                        src={img.src} 
                        alt={img.altText} />
                    <p>{img.caption}</p>
                </Col>
            )}
        </Row>
    </div>
)

export default Gallary;
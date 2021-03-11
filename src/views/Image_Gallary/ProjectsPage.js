import React from 'react';

import Gallary from './ImageList.js';

const ProjectsPage = (props) => {
    return(
        <div>
            <Gallary images={props.images} />
        </div>
    )
}


export default ProjectsPage;
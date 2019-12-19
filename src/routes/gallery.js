import React from 'react';
import PolaroidWidget from '../components/polaroid'
const Gallary =(props) =>{
    return(
        <div className="polaroid-container shadow">
            <div id='widget-container'>
                <PolaroidWidget images={["/static/images/carousel.PNG", "/static/images/me.jpg", "/static/images/logo.png"]} />
            </div>
            <div id='about-text'>
                <h3>Record the whole experience</h3>
                <p>From first glance to gentle serenade</p>
            </div>
        </div>
    )
}

export default Gallary
import React from 'react';
import Carousel from '../components/carousel'
import PolaroidWidget from '../components/polaroid'
// <img src="/static/images/carousel.PNG" alt="" className='img-responsive' />

const Home =(props) =>{
return(
<React.Fragment>
    <div className='hero primary'>
        <div className='logo'></div>
    </div>

    <Carousel images={["/static/images/carousel.PNG", "/static/images/logo.PNG" ]} />

    <div className="polaroid-container shadow">
        <div id='widget-container'>
            <PolaroidWidget images={["/static/images/carousel.PNG", "/static/images/me.jpg", "/static/images/logo.png"]} />
        </div>
        <div id='about-text'>
            <h3>Record the whole experience</h3>
            <p>From first glance to gentle serenade</p>
        </div>
    </div>
    <div className="card-deck custom-deck">
        <div className="card">
            <img className="card-img-top" src="/static/images/carousel.PNG" />
            <div className="card-body">
                <h4 className="card-title">Wedding Photography</h4>
                <p className="card-text">Text</p>
            </div>
        </div>
        <div className="card">
            <img className="card-img-top" src="/static/images/carousel.PNG" />
            <div className="card-body">
                <h4 className="card-title">Corporate Events</h4>
                <p className="card-text">Text</p>
            </div>
        </div>
        <div className="card">
            <img className="card-img-top" src="/static/images/carousel.PNG" />
            <div className="card-body">
                <h4 className="card-title">Special Family Moments</h4>
                <p className="card-text">Text</p>
            </div>
        </div>
    </div>
</React.Fragment>


)
}

export default Home
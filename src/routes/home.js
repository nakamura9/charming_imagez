import React from 'react';
import Shutter from '../components/carousel'
import Carousel from 'react-bootstrap/carousel'
import TestimonialCard from '../components/testimonials'
import RevealCard from '../components/reveal_card'

const Home =(props) =>{
return(
<React.Fragment>
    
    <div className="jumbotron-fluid herotron">
        <div >
            <img src='/static/images/transparent.PNG' />
        </div>
    </div>
    
    <div className="jumbotron" style={{
        color: '#ffffee',
        background: 'linear-gradient(to right, rgb(106,44,112), rgb(255,255,238))',
        marginBottom: '0px',
    }}>
    <h1 style={{
        'fontFamily': 'AlexBrush', 
        fontSize: '5rem', 
        padding: '0.75rem',
        fontWeight: '400',
        
    }}>Stories</h1>
    <div  style={{
        display:'flex', 
        flexDirection: 'row', 
        justifyContent: 'center',
        flexWrap: 'wrap',
    }}>
        <RevealCard 
            src='/static/images/carousel.PNG'
            heading='Traditional Things!'
            text='We can execute your creative vision'
        />
        <RevealCard 
            src='/static/images/carousel.PNG'
            heading='Traditional Things!'
            text='We can execute your creative vision'
        />
        <RevealCard 
            src='/static/images/carousel.PNG'
            heading='Traditional Things!'
            text='We can execute your creative vision'
        />
    </div>
    
    </div>
    
    <div className="jumbotron" style={{
        color: '#ffffee',
        background: 'linear-gradient(to left, rgb(184,59,94), rgb(255,255,238))',marginBottomL:'0px'
    }}>
        <h1 style={{'fontFamily': 'AlexBrush', fontSize: '5rem', fontWeight: '200', textAlign: 'right'}}>Testimonials</h1>
        <Carousel>
        <Carousel.Item>
            <TestimonialCard 
                img='/static/images/rumbi-testimonial.png'
                text='A charming beginning with potential for massive growth...'
                name='Rumbidzai'
                location='Harare'/>
        </Carousel.Item>
        <Carousel.Item>
        <TestimonialCard 
            img='/static/images/tinsel-testimonial.png'
            text="I've had shoots before, but this guy really knows his craft.... I would recommend him any day, any place. Absolutely the best in the industry."
            name='Tinsel'
            location='Harare'/>
        </Carousel.Item>
        <Carousel.Item>
            <TestimonialCard 
                img='/static/images/anonymous.jpg'
                text="Had a photoshoot with Gerald recently, and was very impressed with his professionalism and skill. He is amazing with kids and made the experience enjoyable for the whole family. The photos are amazing and Gerald created everlasting memories for my family."
                name='Sandy'
                location='Harare'/>
        </Carousel.Item>
        <Carousel.Item>
            <TestimonialCard 
                img='/static/images/valery-testimonial.png'
                text="They focus on the details. They are the very best!"
                name='Valery'
                location='Harare'/>
        </Carousel.Item>
    </Carousel>
</div>
    
    
    
</React.Fragment>


)
}

export default Home
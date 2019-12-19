import React from 'react';
import Shutter from '../components/carousel'
import Carousel from 'react-bootstrap/carousel'
import TestimonialCard from '../components/testimonials'
import RevealCard from '../components/reveal_card'

const Home =(props) =>{
return(
<React.Fragment>
    <div className='hero primary'>
        <div className='logo'></div>
    </div>

    <Shutter images={["/static/images/carousel.PNG", "/static/images/logo.PNG" ]} />
    
    <div style={{
        display:'flex', 
        flexDirection: 'row', 
        justifyContent: 'center'
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

    <h3>Testimonials</h3>
    <Carousel>
        <Carousel.Item>
            <TestimonialCard 
                img='/static/images/testimonial.PNG'
                text='Charming Imagez really lives up to the name!'
                name='Julia'
                location='Bulawayo'/>
        </Carousel.Item>
        <Carousel.Item>
        <TestimonialCard 
            img='/static/images/testimonial-2.PNG'
            text='Family photos never looked this good!'
            name='Julia'
            location='Johannesburg'/>
        </Carousel.Item>
    </Carousel>
    
    
</React.Fragment>


)
}

export default Home
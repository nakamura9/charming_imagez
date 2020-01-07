import React from 'react';
import Shutter from '../components/carousel'
import Carousel from 'react-bootstrap/carousel'
import TestimonialCard from '../components/testimonials'
import RevealCard from '../components/reveal_card'

const Home =(props) =>{
return(
<React.Fragment>
    
    <div className="jumbotron-fluid herotron">
        
        {/* <div >
            <img src='/static/images/transparent.PNG'  />
        </div> */}
    </div>
    
    <div className="jumbotron" style={{
        color: '#444',
        background: 'linear-gradient(to right, rgb(201, 214, 223), rgb(240, 245, 249))',
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
            src='/static/images/stories/family.jpg'
            heading="Team family!"
            text="We're all number 1!"
        />
        <RevealCard 
            src='/static/images/stories/beach.jpg'
            heading='Wherever you are'
            text='We can execute your creative vision'
        />
        <RevealCard 
            src='/static/images/stories/cresta.jpg'
            heading="Perfect Symmetry!"
            text='The scene was perfect, the bridal party, even more so.'
        />
        
    </div>
    
    </div>
    <div className="jumbotron " style={{
        color: '#444',
        background: 'linear-gradient(to left, rgb(201, 214, 223), rgb(240, 245, 249))',marginBottomL:'0px'
    }}>
        <h1 style={{'fontFamily': 'AlexBrush', fontSize: '5rem', fontWeight: '200', textAlign: 'right'}}>Testimonials</h1>
        
        <div className='testimonial__container-flex'>
        <TestimonialCard 
            img='/static/images/mandlakazi-testimonial.jpg'
            text="We can't resist your work Gerrie.. To be honest it's s marvelous.. Thina sibonga wena yaz.. 🙏🙏👏👏May God continue to bless the work of your hands"
            name='Mandlakazi'
            location='South Africa'/>
        <TestimonialCard 
            img='/static/images/tinsel-testimonial.jpg'
            text="I've had shoots before, but this guy really knows his craft.... I would recommend him any day, any place. Absolutely the best in the industry."
            name='Tinsel'
            location='Harare'/>
        <TestimonialCard 
            img='/static/images/sandy-testimonial.jpeg'
            text="Had a photoshoot with Gerald recently, and was very impressed with his professionalism and skill. He is amazing with kids and made the experience enjoyable for the whole family. The photos are amazing and Gerald created everlasting memories for my family."
            name='Sandy'
            location='Australia'/>
        <TestimonialCard 
            img='/static/images/valery-testimonial.jpg'
            text="They focus on the details. They are the very best!"
            name='Valery'
            location='Harare'/>

    </div>
 
        <Carousel className='testimonial__container-carousel'>
        <Carousel.Item>
            <TestimonialCard 
                img='/static/images/mandlakazi-testimonial.jpg'
                text="We can't resist your work Gerrie.. To be honest it's s marvelous.. Thina sibonga wena yaz.. 🙏🙏👏👏May God continue to bless the work of your hands"
                name='Mandlakazi'
                location='South Africa'/>
        </Carousel.Item>
        <Carousel.Item>
        <TestimonialCard 
            img='/static/images/tinsel-testimonial.jpg'
            text="I've had shoots before, but this guy really knows his craft.... I would recommend him any day, any place. Absolutely the best in the industry."
            name='Tinsel'
            location='Harare'/>
        </Carousel.Item>
        <Carousel.Item>
            <TestimonialCard 
                img='/static/images/sandy-testimonial.jpeg'
                text="Had a photoshoot with Gerald recently, and was very impressed with his professionalism and skill. He is amazing with kids and made the experience enjoyable for the whole family. The photos are amazing and Gerald created everlasting memories for my family."
                name='Sandy'
                location='Australia'/>
        </Carousel.Item>
        <Carousel.Item>
            <TestimonialCard 
                img='/static/images/valery-testimonial.jpg'
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
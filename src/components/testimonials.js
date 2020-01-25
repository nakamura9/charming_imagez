import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

const TestimonialCard =(props) =>{
    return(
        <div className='testimonial-card'>
            <div className='testimonial-card__content'>
                <div>
                    <i className="fa fa-quote-left fa-3x" aria-hidden="true"></i>
                    <p style={{margin: '5px'}}>{props.text}</p>
                    <p className='testimonial-card__lower-icon'>
                        <i className="fa fa-quote-right fa-3x"  aria-hidden="true"></i>
                    </p>
                    <p style={{textAlign:'right'}}><i>{props.name}</i>, <b>{props.location}</b> </p>
                </div>
            </div>
            <ScrollAnimation animateIn="rubberBand">
                <div className='testimonial-card__image'
                    style={{
                    backgroundImage: 'url(' + props.img + ')',
                
                }}></div>
            </ScrollAnimation>
            
        </div>
    )
}

export default TestimonialCard
import React from 'react'

const TestimonialCard =(props) =>{
    return(
        <div style={{
                position: 'relative', 
                paddingBottom: '50px',
                width: '500px',
                margin: ' 25px auto'
            }}>
            <div style={{
                padding: '50px', 
                border: '3px solid #b83b5e',
                borderRadius: '30px 15px 0px 15px'
            }}>
            <i className="fa fa-quote-left fa-3x" aria-hidden="true"></i>
            <p style={{margin: '5px'}}>{props.text}</p>
            <p style={{
                textAlign: 'right'
            }}>
                <i className="fa fa-quote-right fa-3x"  aria-hidden="true"></i>
            </p>
            
            <p style={{textAlign:'right'}}><i>{props.name}</i>, <b>{props.location}</b> </p>
            </div>
            <div style={{
                backgroundImage: 'url(' + props.img + ')',
                backgroundSize: 'cover',
                borderRadius: '50px', 
                width: '100px',
                height: '100px',
                border: '5px solid white',
                zIndex: 10,
                position: 'absolute',
                left: '200px',
                bottom: '0px'
            }}></div>
        </div>
    )
}

export default TestimonialCard
import React, {useEffect} from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

const revealCard =(props) => {
    return(
        <ScrollAnimation animateIn='bounceInDown' delay={props.delay}>
            <div className="reveal-card">
            <div className="reveal-image"
                style={{backgroundImage: 'url(' + props.src+ ')'}}
               ></div>
            <div className="reveal-text" >
                <div className="text-heading">
                    <h4>{props.heading}</h4>
                </div>
                <div className="text-content">
                    <p>{props.text}</p>
                </div>
            </div>
        </div>

        </ScrollAnimation>
        )
}

export default revealCard
import React, {useEffect} from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import {Link} from 'react-router-dom'
const revealCard =(props) => {
    return(
        <ScrollAnimation animateIn='bounceInDown' delay={props.delay}>
            <div className="reveal-card">
            <div className="reveal-image"
                style={{backgroundImage: 'url(' + props.src+ ')'}}
               ></div>
            <div className="reveal-text" >
                <div className="text-heading">
                    <Link to={`/post/${props.postId}`}><h4>{props.heading}</h4></Link>
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
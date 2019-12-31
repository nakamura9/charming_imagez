import React, {useEffect} from 'react'

const revealCard =(props) => {
    return(
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
    )
}

export default revealCard
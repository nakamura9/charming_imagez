import React, {useEffect} from 'react'

const revealCard =(props) => {
    const cardRef = React.createRef()
    const textRef = React.createRef()
    const imgRef = React.createRef()
    useEffect(() =>{
        cardRef.current.addEventListener('mouseenter', function(){
            textRef.current.classList.add('reveal-text-hover')
            imgRef.current.classList.add('reveal-image-hover')
        })
        cardRef.current.addEventListener('mouseleave', function(){
            textRef.current.classList.remove('reveal-text-hover')
            imgRef.current.classList.remove('reveal-image-hover')

        })
    }, [])
    
    return(
        <div className="reveal-card" ref={cardRef}>
            <div className="reveal-image"
                style={{backgroundImage: 'url(' + props.src+ ')'}}
                ref={imgRef}></div>
            <div className="reveal-text" ref={textRef}>
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
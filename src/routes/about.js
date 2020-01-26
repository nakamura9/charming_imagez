import React from 'react';
import {Helmet} from 'react-helmet'

const About =(props) =>{
    const [visible, setVisible] = React.useState(false)
    React.useEffect(()=>{
        setTimeout(()=> setVisible(true), 2000)
    }, [])

    return(
        <div className="about__container">
            <Helmet>
                <title>Charming Imagez | About</title>
                <meta name="description" content="What is charming imagez? And what do we represent? Learn about The people behind charming-imagez" />
            </Helmet>
            <div className='container-fluid'>
            <div className="row">
                <div className="col-md-12 col-lg-3">
                    <div id="about__hero">
                        
                    </div>
                </div>
                <div className="col-md-12 col-lg-9">
                    <div className="about__divider">
                        <div style={{
                                opacity: visible ? 1 : 0
                                }}  className='typewriter'>
                            <h1 >Hi, I'm Gerald</h1>
                        </div>
                            <hr className="my-2"/>
                        <p>Photography is art, I paint with light.</p>
                        <p>If you want to make lasting memories, Charming Imagez is your only choice.</p>
                        <p>Not only do we treat all your occasions with respect, our passion for photography is captured with each click. Being destination photographers means we are with you wherever you choose to be.</p>
                        <p>Those moments which encapsulate your journey are the moments that make CIP come alive!</p>
                    </div>
                </div>
            </div>
        </div>
        </div>

        
    )
}

export default About
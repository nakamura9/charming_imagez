import React, {useState, useCallback} from 'react'
import PolaroidWidget from '../components/polaroid'
import PhotoGallery from 'react-photo-gallery'
import Carousel, { Modal, ModalGateway } from "react-images"

const photos = [
    {
        src: "/static/images/mombe.PNG",
        width: 1,
        height: 1
    },
    {
        src: "/static/images/stairs.PNG",
        width: 1,
        height: 1
    },
    {
        src: "/static/images/car.PNG",
        width: 1,
        height: 1
    },
    {
        src: "/static/images/proposal.PNG",
        width: 1,
        height: 1
    },
    {
        src: "/static/images/pregnant.PNG",
        width: 1,
        height: 1
    },
    {
        src: "/static/images/carousel.PNG",
        width: 1.5,
        height: 1
    },
    {
        src: "/static/images/rapids.PNG",
        width: 2,
        height: 1
    },
    {
        src: "/static/images/tsvimbo.PNG",
        width: 1,
        height: 2
    },
    {
        src: "/static/images/cuddle.PNG",
        width: 1,
        height: 1
    }
]

const Gallary =(props) =>{
    const [currentImage, setCurrentImage] = useState(0)
    const [viewerIsOpen, setViewerIsOpen] = useState(false)

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, [])

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };
    return(
        <React.Fragment>
            
        <div className="container-fluid">
            {/*<div className="row">
                <div className="col-lg-6 col-md-12 polaroid-container">
                    <PolaroidWidget images={[
                        "/static/images/carousel.PNG", 
                        "/static/images/me.jpg", 
                        "/static/images/logo.png"]} />
                </div>
                <div className="col-lg-6 col-md-12">
                    <div id='about-text'>
                        <h3>Record the whole experience</h3>
                        <p>From first glance to gentle serenade</p>
                    </div>
                </div>
            </div>*/}
            <div className="row">
                <div className="col-12">
                    <h1 style={{fontFamily: 'AlexBrush', fontWeight: 500, fontSize: '5rem', textAlign: 'center'}}>Photo Gallery</h1>
                    <PhotoGallery photos={photos} onClick={openLightbox}/>
                </div>
            </div>
        </div>
        <ModalGateway>
            {viewerIsOpen ? (
                <Modal onClose={closeLightbox}>
                <Carousel
                    currentIndex={currentImage}
                    views={photos.map(x => ({
                    ...x,
                    srcset: x.srcSet,
                    caption: x.title
                    }))}
                />
                </Modal>
            ) : null}
        </ModalGateway>
        </React.Fragment>
    )
}

export default Gallary
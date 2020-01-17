import React from 'react'
import PhotoGallery from 'react-grid-gallery'
const photos = [
    {
        thumbnail: "/static/images/thumbs/arch.jpg",
        src: "/static/images/arch.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 213
    },
    {
        src: "/static/images/baby.jpg",
        thumbnail: "/static/images/thumbs/baby.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 320
    },
    {
        src: "/static/images/baker.jpg",
        thumbnail: "/static/images/thumbs/baker.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 213
    },
    {
        src: "/static/images/beach.jpg",
        thumbnail: "/static/images/thumbs/beach.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 214
    },
    {
        src: "/static/images/benz.jpg",
        thumbnail: "/static/images/thumbs/benz.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 213
    },
    {
        src: "/static/images/cake.jpg",
        thumbnail: "/static/images/thumbs/cake.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 256
    },
    {
        src: "/static/images/cresta.jpg",
        thumbnail: "/static/images/thumbs/cresta.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 213
    },
    {
        src: "/static/images/cresta-2.jpg",
        thumbnail: "/static/images/thumbs/cresta-2.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 214
    },
    {
        src: "/static/images/family.jpg",
        thumbnail: "/static/images/thumbs/family.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 213
    },
    {
        src: "/static/images/family-chair.jpg",
        thumbnail: "/static/images/thumbs/family-chair.jpg",
        thumbnailWidth: 240,
        thumbnailHeight: 360
    },
    {
        src: "/static/images/family-half.jpg",
        thumbnail: "/static/images/thumbs/family-half.jpg",
        thumbnailWidth: 240,
        thumbnailHeight: 300
    },
    {
        src: "/static/images/family-kids.jpg",
        thumbnail: "/static/images/thumbs/family-kids.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 213
    },
    {
        src: "/static/images/family-left.jpg",
        thumbnail: "/static/images/thumbs/family-left.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 213
    },
    {
        src: "/static/images/family-three.jpg",
        thumbnail: "/static/images/thumbs/family-three.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 213
    },
    {
        src: "/static/images/friend.jpg",
        thumbnail: "/static/images/thumbs/friend.jpg",
        thumbnailWidth: 240,
        thumbnailHeight: 300
    },
    {
        src: "/static/images/girls.jpg",
        thumbnail: "/static/images/thumbs/girl-toys.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 213
    },
    {
        src: "/static/images/graduation.jpg",
        thumbnail: "/static/images/thumbs/graduation.jpg",
        thumbnailWidth: 240,
        thumbnailHeight: 336
    },
    {
        src: "/static/images/in-car.jpg",
        thumbnail: "/static/images/thumbs/in-car.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 213
    },
    {
        src: "/static/images/infant.jpg",
        thumbnail: "/static/images/thumbs/infant.jpg",
        thumbnailWidth: 240,
        thumbnailHeight: 360
    },
    {
        src: "/static/images/rings.jpg",
        thumbnail: "/static/images/thumbs/rings.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 214
    },
    {
        src: "/static/images/toys.jpg",
        thumbnail: "/static/images/thumbs/toys.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 320
    },
    {
        src: "/static/images/vet.jpg",
        thumbnail: "/static/images/thumbs/vet.jpg",
        thumbnailWidth: 200,
        thumbnailHeight: 300
    },
    {
        src: "/static/images/hiv.jpg",
        thumbnail: "/static/images/thumbs/hiv.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 213
    },
    {
        src: "/static/images/jack.jpg",
        thumbnail: "/static/images/thumbs/jack.jpg",
        thumbnailWidth: 213,
        thumbnailHeight: 300
    },
    {
        src: "/static/images/peter.jpg",
        thumbnail: "/static/images/thumbs/peter.jpg",
        thumbnailWidth: 300,
        thumbnailHeight: 300
    },
    {
        src: "/static/images/old.jpg",
        thumbnail: "/static/images/thumbs/old.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 213
    },
    {
        src: "/static/images/banner.jpg",
        thumbnail: "/static/images/thumbs/banner.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 213
    },
]

const Gallary =(props) =>{
    return(
        <React.Fragment>
            
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <h1 style={{fontFamily: 'AlexBrush', fontWeight: 500, fontSize: '5rem', textAlign: 'center'}}>Photo Gallery</h1>
                    <PhotoGallery images={photos}/>
                </div>
            </div>
        </div>
        </React.Fragment>
    )
}

export default Gallary
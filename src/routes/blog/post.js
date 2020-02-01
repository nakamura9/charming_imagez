import React from 'react';
import {createClient} from 'contentful'
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'
import {Helmet} from 'react-helmet'
import PhotoGallery from 'react-grid-gallery'


const client = createClient({
    space: "wnyml39s2hab",
    accessToken: "rbvcFmf67VobY-atlU3h8Jt6SiZBkpAh1tx_biN51Kk"
})

const Post =(props) =>{
    const [post, setPost] = React.useState(null)

    React.useEffect(()=>{
        client.getEntry(props.match.params.id).then(res=>{
            setPost(res)
            console.log(res)
        })
    }, [])
    return(
        <div className="container">
            
            <div className="row">
                <div className="col-12 blog__post">
                    {post != null ? <React.Fragment>
                        <Helmet>
                            <title>Charming Imagez | Blog Post</title>
                            <meta name="description" content={post.fields.title} />
                        </Helmet>
                        <h1>{post.fields.title}</h1>
                        <p><i> Published: {new Date(post.fields.published).toDateString()}</i></p>
                        <img src={`${post.fields.headingImage.fields.file.url}`} alt="Blog Post Title"/>
                        <br/>
                        <h5>By {post.fields.author.fields.fullName}</h5>
                        <hr className='my-2' />
                        
                        <div className='blog__post-content'>
                        {documentToReactComponents(post.fields.content)}
                        </div>
                        {post != null && post.fields.postImages ?
                            <PhotoGallery 
                                images={post.fields.postImages.map(img =>({
                                    src: img.fields.file.url,
                                    thumbnail: img.fields.file.url,
                                    thumbnailWidth: 320,
                                    thumbnailHeight: 240
                                }))}/>
                            :null}
                        <hr className='my-2' />
                        <p> <u> Tagged under:</u></p>
                        <div>
                            {post.fields.tags.map(tag=>(
                                <span className="blog__tag"># {tag.fields.name}</span>
                            ))}
                        </div>
                    </React.Fragment> 
                    : <p>Loading blog post...</p>
                }
                </div>
            </div>
        </div>
    )
}

export default Post
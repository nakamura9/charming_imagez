import React from 'react';
import {createClient} from 'contentful'
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'

const client = createClient({
    space: "wnyml39s2hab",
    accessToken: "rbvcFmf67VobY-atlU3h8Jt6SiZBkpAh1tx_biN51Kk"
})

const Post =(props) =>{
    const [post, setPost] = React.useState(null)

    React.useEffect(()=>{
        client.getEntry(props.match.params.id).then(res=>{
            setPost(res)
        })
    }, [])

    return(
        <div className="container">
            <div className="row">
                <div className="col-12 blog__post">
                    {post != null ? <React.Fragment>
                        <h1>{post.fields.title}</h1>
                        <p><i> Published: {new Date(post.fields.published).toDateString()}</i></p>
                        <img src={`${post.fields.headingImage.fields.file.url}`} alt="Blog Post Title"/>
                        <br/>
                        <h5>By {post.fields.author.fields.fullName}</h5>
                        <hr className='my-2' />
                        
                        <div className='blog__post-content'>
                        {documentToReactComponents(post.fields.content)}
                        </div>
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
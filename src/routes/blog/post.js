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
        client.getEntry(props.match.params).then(res=>{
            
            setPost(res)
        })
    }, [])

    return(
        <div className="container">
            <div className="row">
                <div className="col-12">
                    {post != null ? <React.Fragment>
                        <h1>{post.fields.title}</h1>
                        <h5>{post.fields.published}</h5>
                        <img src={`${post.fields.headingImage.fields.file.url}`} alt="Blog Post Title"/>
                        <h5>By {post.fields.author.fields.fullName}</h5>
                        {documentToReactComponents(post.fields.content)}
                        <p>Tagged under:</p>
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
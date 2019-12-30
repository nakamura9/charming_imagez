import React from 'react';
import {createClient} from 'contentful'
import {Link} from 'react-router-dom'

const client = createClient({
    space: "wnyml39s2hab",
    accessToken: "rbvcFmf67VobY-atlU3h8Jt6SiZBkpAh1tx_biN51Kk"
})



const Blog =(props) =>{
    const [posts, setPosts] = React.useState([])
    const [currentAuthor, setCurrentAuthor] = React.useState(null)
    const [currentTag, setCurrentTag] = React.useState(null)
    const [tags, setTags] = React.useState([])
    const [authors, setAuthors] = React.useState([])
    
    React.useEffect(()=>{
        client.getEntries({
            content_type: 'blogPost'
        }).then(res =>{
            console.log(res)
            let posts = res.items
            if(currentAuthor == null && currentTag == null){
                setPosts(posts)
                return;
            }
            if(currentAuthor != null){
                posts = posts.filter(post =>{
                    return(post.fields.author.sys.id == currentAuthor.sys.id)
                })
            }
            if(currentTag != null){
                posts = posts.filter(post =>{
                    for(tag of post.fields.tags){
                        if(currentTag.sys.id == tag.sys.id){
                            return true
                        }
                    }
                    return false
                })
            }
            
        });
        //tags 
        client.getEntries({
            content_type: 'tag'
        }).then(res =>{
            setTags(res.items)
        });

        //authors
        client.getEntries({
            content_type: 'author'
        }).then(res =>{
            setAuthors(res.items)
        });
    },[currentAuthor, currentTag])
    return(
        <React.Fragment>
        <h1  style={{
            'fontFamily': 'AlexBrush', 
            fontSize: '5rem', 
            padding: '0.75rem',
            fontWeight: '400',
            
        }} >Charming Imagez Blog</h1>
        <hr className="my-2"/>
        <p className='blog__p'>Showing <u>{currentTag !=null
            ? `posts tagged under ${currentTag.fields.name}`
            : currentAuthor !=null
                ? `posts by author ${currentAuthor.fields.fullName}`
                : 'all posts'}.</u> 
                <button className='btn blog__b'
                    onClick={()=>{setCurrentAuthor(null);setCurrentTag(null)}}> <i class="fas fa-filter    "></i> Clear Filters</button></p>
        <div className="container-fluid div row">
            <div className="col-md-8 sm-12">
                <h3 className='blog__heading'>Posts</h3>
                {posts.map(post =>(
                        <Link to={`/post/${post.sys.id}`} style={{textDecoration: 'none', color: '#6a2c70'}}>
                           <div className="blog__post-card">
                        <div style={{flex: 1}}>
                            <img src={post.fields.headingImage.fields.file.url}/>
                        </div>
                        <div style={{flex: 3}}>
                            <h4>{post.fields.title}</h4>
                            <p>Date: {post.fields.published}</p>
                            <h6>{post.fields.author.fields.fullName}</h6>
                            <div style={{padding: '0.5rem'}}>
                                {post.fields.tags.map(tag => (<span className="blog__tag"># {tag.fields.name}</span>))}
                            </div>
                        </div>

                    </div>
                    </Link>
                ))}

            </div>
            <div className="col-md-4 sm-12">
                <div className='blog__aside'>
                    <h4 className='blog__heading'>Authors</h4>
                    {authors.map(author =>(<div className="blog__author-card"
                                             onClick={()=>{setCurrentAuthor(author);setCurrentTag(null)}}>
                        <div className='blog__author-card--icon'
                            style={{backgroundImage: `url(${author.fields.thumbnail.fields.file.url})`}}></div>
                        <div className='blog__author-card--name'>
                            <h5>{author.fields.fullName}</h5>
                        </div>
                    </div>))}
                </div>
                <div className="blog__aside">
                    <h4 className='blog__heading'>Tags</h4>
                    {tags.map(tag =>(
                        <div className='blog__tag'
                            onClick={()=>{setCurrentTag(tag);setCurrentAuthor(null)}}>
                            #{tag.fields.name}
                        </div>))}
                </div>
            </div>

        </div>
        </React.Fragment>
    )
}

export default Blog
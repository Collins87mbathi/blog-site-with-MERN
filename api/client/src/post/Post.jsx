import React from 'react'
import './post.css';
import {Link} from "react-router-dom";

const Post = ({post}) => {

    return (
       <div className="post">
           
       <div className="postInfo">
           
           <Link className="link" to={`/post/${post._id}`}>
           <span className="postTitle">{post.title}</span>
           </Link>
          
           <hr/>
           <div className="postDate">{new Date(post.createdAt).toDateString()}</div>
       </div>
       <p className='postDesc'>
       {post.desc}
       </p>
        </div>
    );
}

export default Post

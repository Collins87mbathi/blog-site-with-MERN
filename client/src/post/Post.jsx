import React from 'react'
import './post.css';
import {Link} from "react-router-dom";

const Post = ({post}) => {

    return (
       
           
       <div className="postInfo">
           
           <Link className="link" to={`/post/${post._id}`}>
           <span className="postTitle">{post.title}</span>
           </Link>
          
           <hr/>
           <div className="postDate">{ post.createdAt }</div>
       </div>
       <p className='postDesc'>
       {post.desc}
       </p>
        </div>
    );
}

export default Post

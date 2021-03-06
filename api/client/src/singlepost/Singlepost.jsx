
import React, { useState,useContext,useEffect } from 'react'
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { axiosInstance } from '../config';
import { Context } from '../context/Context';
import './singlepost.css';

const Singlepost = () => {
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState({});
    const {user} = useContext(Context);
    const [title,setTitle] = useState("");
    const [desc,setDesc] = useState("");
    const [updateMode,setUpdateMode] = useState(false);

    useEffect(() => {
       const getPost = async () => {
           const res = await axiosInstance.get("/api/blog/posts/" + path);
           setPost(res.data);
           setTitle(res.data.title);
           setDesc(res.data.desc);
           console.log(res.data);
       };
       getPost();
    }, [path]);
    
    const handleDelete = async ()=> {
        try {
            await axiosInstance.delete(`/api/blog/posts/${post._id}`, { data: {username:user.username},
        });
            window.location.replace("/");
        } catch (error) {
            
        };
        
    }

   const handleUpdate = async () => {
    try {
        await axiosInstance.put(`/api/blog/posts/${post._id}`, { username:user.username, title,desc,
    });
       // window.location.reload();
       setUpdateMode(false);
    } catch (error) {
        
    };
   }

    return (
        <div className='singlepost'>
           <div className="singlePostWrapper">
           {
               updateMode ? <input type="text" value={title} className="singlePostTitleInput"  autoFocus 
               onChange={(e)=>setTitle(e.target.value)}
               /> : (
                <h1 className='singlePostTitle'>
                {post.title}
                  <div className="singlePostEdit">
                  <i className="singlePostIcon far fa-edit" onClick={()=>setUpdateMode(true)}></i>
                  <i className="singlePostIcon far fa-trash-alt" onClick={handleDelete}></i>
                      </div>
                 
                 
             </h1>

               )
           }
            
         
         <div className="singlePostInfo">
             <span className='singlepostAuthor'>Author:
             <Link to={`/?user=${post.username}`} className="link">
             <b>{post.username}</b> 
             </Link>
             </span>
             <span className='singlePostDate'>{new Date(post.createdAt).toDateString()}</span>
         </div>
         {updateMode ? (<textarea className="singlePostDescInput" value={desc} onChange={(e)=>setDesc(e.target.value)}/>)
         : (
            <p className='singlePostDesc'>{desc}</p>
         ) }

         {updateMode && (
         <button className="singlePostButton" onClick={handleUpdate}>Update</button>
         )}
         </div>
        </div>
    );
};

export default Singlepost

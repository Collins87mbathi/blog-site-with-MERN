import React, { useContext, useState } from 'react'
import './write.css';
import axios from "axios";
import { Context } from '../../context/Context';

const Write = () => {
    const [title,setTitle] = useState(""); 
    const [desc,setDesc] = useState("");
    const {user} = useContext(Context);

   const handleSubmit = async (e) => {
    e.preventDefault();
    const  newPost = {
        username : user.username,
        title,
        desc,
    };
    
    try {
     const res =  await axios.post("/posts", newPost);
     window.location.replace("/post/" + res.data._id); 
    } catch (error) {
        
    }
  
   }

    return (
        <div className='write'>
            
            <form className='writeForm' onSubmit={handleSubmit}>
                <div className="writeFormGroup">
                   
                 <input type="text" placeholder='Title' className='writeInput' autoFocus={true}
                  onChange={e => setTitle(e.target.value)}
                 />
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder='tell your story...' type="text" className="writeInput writeText"
                    onChange={e => setDesc(e.target.value)}
                    ></textarea>
                </div>
                <button className="writeSubmit">
                    Publish
                </button>
            </form>
            
        </div>
    )
}

export default Write

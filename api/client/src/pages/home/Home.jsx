import React, { useState,useEffect } from 'react'

import Header from '../../header/Header';
import Posts from '../../posts/Posts';
import './home.css';
import { useLocation } from 'react-router';
import { axiosInstance } from '../../config';

const Home = () => {
    const [posts, setPosts] = useState([]);
    
    const {search} = useLocation();

   useEffect(() => {
      const fetchPosts = async ()=>{
         const res = await axiosInstance.get("api/blog/posts" + search);
         console.log(res);
         setPosts(res.data)
      }
      fetchPosts()
   }, [search]);

    return (
        <>
        <Header/>
            
        <div className='home'>
           <Posts posts={posts}/>
        
        </div>
        </>
    )
}

export default Home

import React, { useState,useEffect } from 'react'
import axios from "axios"
import Header from '../../header/Header';
import Posts from '../../posts/Posts';
import './home.css';
import { useLocation } from 'react-router';

const Home = () => {
    const [posts, setPosts] = useState([]);
    
    const {search} = useLocation();

   useEffect(() => {
      const fetchPosts = async ()=>{
         const res = await axios.get("/posts" + search);
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

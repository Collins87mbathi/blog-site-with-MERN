import React, { useContext, useRef } from 'react'
import './login.css';
import { Link } from 'react-router-dom';
import axios from "axios"
import { Context } from '../../context/Context';

const Login = () => {
 const userRef = useRef();
 const passwordRef = useRef();
 const {dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) =>{
   e.preventDefault();
   dispatch({type:"LOGIN_START"});
   try {
    const res = await axios.post("/login", {
      username: userRef.current.value,
      password: passwordRef.current.value,
    }) 
    dispatch({type:"LOGIN_SUCCESS",payload:res.data});
   } catch (err) {
    dispatch({type:"LOGIN_FAILURE"});
   }
  }
    return (
        <div className="login">
        <span className="loginTitle">Login</span>
        <form className="loginForm" onSubmit={handleSubmit}>
          <label>Username</label>
          <input className="loginInput" type="text" placeholder="Enter your username..." 
          ref={userRef}
          />
          <label>Password</label>
          <input className="loginInput" type="password" placeholder="Enter your password..." 
          ref={passwordRef}
          />
          <button className="loginButton" type="submit" disabled={isFetching}><Link className="link" to="/Login">Login</Link></button>
        </form>
          <button className="loginRegisterButton"><Link className="link" to="/Register">Register</Link></button>
      </div>
    )
}

export default Login

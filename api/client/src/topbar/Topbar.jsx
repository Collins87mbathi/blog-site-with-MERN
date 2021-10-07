import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { Context } from '../context/Context';
import './topbar.css';

const Topbar  = () => {
    const {user,dispatch} = useContext(Context);

    const handleLogout = () =>{
        dispatch({type:"LOGOUT"})
    }
    return (
         
        <div className="top">
        <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon  fab fa-twitter-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        </div>
        <div className="topCenter">
            <ul className="topList">
                <li className='topListItem'>
                    <Link className='link' to='/' >Home</Link>
                </li>
                <li className='topListItem'><Link className='link' to='/' >About</Link></li>
                <li className='topListItem'><Link className='link' to='/' >Contact</Link></li>
                <li className='topListItem'><Link className='link' to='/write' >Write</Link></li>
                <li className='topListItem' onClick={handleLogout}>{user && "Logout"}</li>
            </ul>
        </div>
        <div className="topRight">
            {
                user ? (
                    <Link to='/settings'>
                  
                    <img
                    className='topImg'
                    src={user.profilePic} alt="pic" />
                       </Link>
                ) : (
                    <ul className="topList">
                   <li className='topListItem'><Link className="link" to="/Login">Login</Link></li>
                   <li className='topListItem'><Link className="link" to="/Register">Register</Link></li>
                  </ul>
                )
            }
            
 
        </div>
        </div>
    )
}

export default Topbar

import React from 'react'
import './header.css'

const Header = () => {
    return (
        <div className='header'> 
            <div className="headerTitles">
            <span className='headerTitleSm'>Write & learn</span> 
               <span className='headerTitleLg'>Pedre</span> 
            </div>
              <img className='headerImg' src='https://images.pexels.com/photos/7688314/pexels-photo-7688314.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'alt='header'/>
        </div>
    )
}

export default Header

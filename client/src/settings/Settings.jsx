import React from 'react'
import './setting.css'


const Settings = () => {
    return (
        <div className='settings'>
           <div className="settingsWrapper">
               <div className="settingsTitle">
                   <span className="settingsUpdateTitle">Update your account</span>
                   <span className="settingsDeleteTitle">Delete account</span>
               </div>
               <form className="settingsForm">
                <label>profile Picture</label>
                <div className="settingsPP">
          
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>{" "}
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="settingsPPInput"
            />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Collins" name="name" />
          <label>Email</label>
          <input type="email" placeholder="collinsmbathi@gmail.com" name="email" />
          <label>Password</label>
          <input type="password" placeholder="Password" name="password" />
          <button className="settingsSubmitButton" type="submit">
            Update
          </button>
               </form>
               
               </div> 
          
        </div>
    )
}

export default Settings

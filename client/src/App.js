import React, { useContext } from 'react'
import './App.css';
import Home from './pages/home/Home';
import Topbar from './topbar/Topbar';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import Write from './pages/write/Write';
import Settings from './settings/Settings';
import Single from './pages/single/Single';
import { Context } from './context/Context';

const App = () => {
  const {user} = useContext(Context);
  return (
    <Router>
   <Topbar/>
   <Switch>
  <Route exact path='/'><Home/></Route>
  <Route path='/register'>{user ? <Home/> : <Register/>}</Route>
  <Route path='/login'>{user ? <Home/> : <Login/>}</Route>
  <Route path='/write'>{user ? <Write/> : <Register/>}</Route>
  <Route path='/settings'>{user ? <Settings/> : <Register/>}</Route>
  <Route path='/post/:postId'><Single/></Route>
   </Switch>
  
   </Router>
  )
}

export default App


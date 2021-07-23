import React, { useEffect } from 'react'
import Home from './Pages/Home/Home';
import HomeHeader from './Components/HomeHeader/HomeHeader';

//Cấu hình route
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Login from './Pages/Login/Login';
import Profile from './Pages/Profile/Profile';
import UseStateDemo from './Pages/_Hooks/UseStateDemo/UseStateDemo';
import DemoUseEffect from './Pages/_Hooks/DemoUseEffect/DemoUseEffect';
import ApiReactClass from './Pages/DemoApi/ApiReactClass';
import ApiFunction from './Pages/DemoApi/ApiFunction';
import DemoHookRedux from './Pages/_Hooks/HookRedux/DemoHookRedux';
import Details from './Pages/Details/Details';
import LoginFormik from './Pages/Login/LoginFormik';
import DemoHoc from './Pages/HOC/DemoHoc';
import Modal from './Pages/HOC/Modal';
import { HomeTemplate } from './Templates/Home/HomeTemplate';
import { UserTemplate } from './Templates/UserTemplate/UserTemplate';

export default function App() {
  return (
    <BrowserRouter>
      <Modal />
      <Switch>
        

        <HomeTemplate path="/home" component={Home} />

        
        <HomeTemplate  path='/about' component={About} />
        <HomeTemplate  path='/contact' component={Contact} />
        <HomeTemplate exact path='/profile' component={Profile} />
        <HomeTemplate exact path='/usestate' component={UseStateDemo} />
        <HomeTemplate exact path='/useeffect' component={DemoUseEffect} />
        <HomeTemplate exact path='/demohookredux' component={DemoHookRedux} />
        <HomeTemplate exact path='/apiclass' component={ApiReactClass} />
        <HomeTemplate exact path="/loginform" component={LoginFormik} />
        <HomeTemplate exact path='/detail/:id' component={Details} />
        <HomeTemplate exact path='/demohoc' component={DemoHoc} />
        <HomeTemplate exact path='/apifunction' component={ApiFunction} />
        <UserTemplate exact path='/login' component={Login} />
      

        <HomeTemplate exact path='/' component={Home} />
      </Switch>


    </BrowserRouter>
  )
}

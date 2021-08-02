import React, { useEffect } from 'react'
import Home from './Pages/Home/Home';
import HomeHeader from './Components/HomeHeader/HomeHeader';

//Cấu hình route
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
import Register from './Pages/Register/Register';
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';

//Tạo ra đối tượng giúp chuyển hướng trang ở bất kì file nào trong phạm vi app
import {createBrowserHistory} from 'history'
import AdminTemplate from './Templates/AdminTemplate/AdminTemplate';
import Films from './Pages/Admin/Films/Films';
import CreateFilm from './Pages/Admin/CreateFilm.js/CreateFilm';
import ApiFunction_mobile from './Pages/DemoApi/ApiFunction_mobile';

export const history = createBrowserHistory();

export default function App() {
  return (
    <Router history={history}>
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
        <HomeTemplate exact path='/register' component={Register} />

        <HomeTemplate exact path='/apifunction' component={ApiFunction} />
        
        
        <HomeTemplate exact path='/films' component={ApiFunction} componentMobile={ApiFunction_mobile} />
        
        <UserTemplate exact path='/login' component={Login} />

        <AdminTemplate exact path="/admin/films" component={Films} />
        <AdminTemplate exact path="/admin/createfilm" component={CreateFilm} />

        <HomeTemplate exact path='/' component={Home} />
      </Switch>


    </Router>
  )
}

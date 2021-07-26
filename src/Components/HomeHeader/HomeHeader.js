import React, { Fragment } from 'react'
import { NavLink} from 'react-router-dom'

import {useSelector} from 'react-redux';
import { ACCESS_TOKEN, USER_LOGIN } from '../../util/settings';

export default function HomeHeader(props) {

    const {userLogin} = useSelector(state => state.QuanLyNguoiDungReducer);

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark text-white">
            <a className="navbar-brand" href="#">Cybersoft</a>
            <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/home" activeClassName="bg-white text-dark" activeStyle={{border:'1px solid red'}}>Home <span className="sr-only">(current)</span></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/about" activeClassName="bg-white text-dark" activeStyle={{border:'1px solid red'}}>About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/contact" activeClassName="bg-white text-dark" activeStyle={{border:'1px solid red'}}>contact</NavLink>
                    </li>
        
                    { userLogin ? 
                    <Fragment>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/profile" activeClassName="bg-white text-dark" activeStyle={{border:'1px solid red'}}>Hello ! {userLogin.hoTen}</NavLink>
                    </li> 
                    <li className="nav-item">
                        <a className="nav-link" href="#" onClick={()=> {
                            //Xoá localstorage và reload lại trang
                            localStorage.removeItem(USER_LOGIN);
                            localStorage.removeItem(ACCESS_TOKEN);
                            //reload
                            window.location.reload();
                        }}>Đăng xuất</a>
                    </li> 
                    </Fragment>
                    :
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/login" activeClassName="bg-white text-dark" activeStyle={{border:'1px solid red'}}>Login</NavLink>
                    </li> 
                    }

                    <li className="nav-item">
                        <NavLink className="nav-link" to="/demohoc" activeClassName="bg-white text-dark" activeStyle={{border:'1px solid red'}}>Demo HOC</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/register" activeClassName="bg-white text-dark" activeStyle={{border:'1px solid red'}}>Đăng ký</NavLink>
                    </li>
                  
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Hooks</a>
                        <div className="dropdown-menu" aria-labelledby="dropdownId">
                            <NavLink className="dropdown-item" to="/usestate">Use state</NavLink>
                            <NavLink className="dropdown-item" to="/useeffect">Use effect</NavLink>
                            <NavLink className="dropdown-item" to="/demohookredux">Hook redux</NavLink>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Api</a>
                        <div className="dropdown-menu" aria-labelledby="dropdownId">
                            <NavLink className="dropdown-item" to="/apiclass">Api class</NavLink>
                            <NavLink className="dropdown-item" to="/apifunction">Api function</NavLink>
                        </div>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>

    )
}

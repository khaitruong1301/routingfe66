import React, { useState } from 'react'
import Modal from './Modal'
import Register from '../Register/Register';
import Login from '../Login/Login'
import {useDispatch} from 'react-redux'

export default function DemoHoc() {

    const [Component,setComponent] = useState(<p>default</p>)
    const dispatch = useDispatch();

    return (
        <div className="container mt-5">
            <button className="btn btn-outline-success" data-toggle="modal" data-target="#modelId" onClick={()=>{
                dispatch({
                    type: 'OPEN_MODAL',
                    Component: Register
                })
            }}>Đăng ký</button>
            <br />
            <br />
            <button className="btn btn-outline-danger" data-toggle="modal" data-target="#modelId" onClick={()=>{
                 dispatch({
                    type: 'OPEN_MODAL',
                    Component: Login
                })
            }}>Đăng nhập</button>

            {/* <Modal Component={Component} /> */}
        </div>
    )
}



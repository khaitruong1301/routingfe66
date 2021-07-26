import React, { useState } from 'react'
import {useFormik} from 'formik';
import {useDispatch} from 'react-redux'
import { dangNhapAction } from '../../redux/action/QuanLyNguoiDungActions';
export default function Login(props) {

    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues:{
            taiKhoan:'',
            matKhau:''
        },
        onSubmit : (values) => {

            dispatch(dangNhapAction(values));
        }
    })
   
    return (
        <form className="container" onSubmit={formik.handleSubmit}>
            <h3 className="text-center">Đăng ký</h3>

            <div className="form-group">
                <p>Tài khoản</p>
                <input className="form-control" name="taiKhoan" onChange={formik.handleChange} />
            </div>
           
            <div className="form-group">
                <p>Mật khẩu</p>
                <input className="form-control" name="matKhau" onChange={formik.handleChange} />
              

            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-outline-success">Login</button>
            </div>
        </form>
    )
}

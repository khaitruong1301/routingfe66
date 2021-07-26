import React from 'react';
import {useFormik} from 'formik';
import { useDispatch } from 'react-redux';
import { dangKyAction } from '../../redux/action/QuanLyNguoiDungActions';
export default function Register() {

    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues:{
            taiKhoan:'',
            matKhau:'',
            email:'',
            soDt:'',
            hoTen:'',
            maNhom: 'GP01'
        },
        onSubmit: (values) => {
            console.log('values',values);
            console.log({values});
            //gọi action api 
            const action = dangKyAction(values);
            
            dispatch(action)

        }
    });

    return (
        <div className="container">
            <h3>Đăng ký</h3>
            <form onSubmit={formik.handleSubmit}>
                <div className="form-group">
                    <p>Tài khoản</p>
                    <input className="form-control" name="taiKhoan" onChange={formik.handleChange} />
                </div>
                <div className="form-group">
                    <p>Mật khẩu</p>
                    <input className="form-control" name="matKhau"  onChange={formik.handleChange} />
                </div>
                <div className="form-group">
                    <p>Email</p>
                    <input className="form-control" name="email"  onChange={formik.handleChange} />
                </div>
                <div className="form-group">
                    <p>Họ tên</p>
                    <input className="form-control" name="hoTen"  onChange={formik.handleChange} />
                </div>
                <div className="form-group">
                    <p>Số điện thoại</p>
                    <input className="form-control" name="soDt"  onChange={formik.handleChange} />
                </div>
                <div className="form-group">
                    <button className="btn btn-outline-success">Đăng ký</button>
                </div>

            </form>
        </div>
    )
}

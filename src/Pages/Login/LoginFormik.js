import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup';

export default function LoginFormik(props) {
    const formik = useFormik({
        initialValues: {
            taiKhoan: '',
            email: '',
            matKhau: '',
            ngaySinh:''
        },
        validationSchema: Yup.object().shape({
            taiKhoan: Yup.string().required('Không được bỏ trống'),
            email: Yup.string().required('Email không được bỏ trống!').matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,'Email không hợp lệ'),
            matKhau: Yup.string().required('Mật khẩu không được bỏ trống!').min(6,'Mật khẩu từ 6 - 32 ký tự !').max(32,'Mật khẩu từ 6 - 32 ký tự !')
        }),
        onSubmit: (values) => {
            console.log('values', values);
        }
    })

    
    const handleChangeDate = (event) => {
        let {value} = event.target;
        formik.setFieldValue('ngaySinh',value); //Set giá trị cho lỗi => tự customize
        // formik.setFieldError('ngaySinh','ABC'); //Set giá trị cho lỗi => tự customize
    }

    return (
        <form className="container" onSubmit={formik.handleSubmit}>
            Login
            <div className="form-group">
                <p>username</p>
                <input  className="form-control" name="taiKhoan" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                <div className="text text-danger">{formik.errors.taiKhoan && formik.touched.taiKhoan ? (<div>{formik.errors.taiKhoan}</div>) : null}
                </div>
            </div>
            <div>
                <input type="date" className="form-control" onChange={handleChangeDate} />
            </div>
            <div className="form-group">
                <p>email</p>
                <input  className="form-control" name="email" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                <div className="text text-danger">{formik.errors.email && formik.touched.email ? (<div>{formik.errors.email}</div>) : null} </div>
            </div>
            <div className="form-group">
                <p>password</p>
                <input type="password" className="form-control" name="matKhau" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                <div className="text text-danger">{formik.errors.matKhau && formik.touched.matKhau ? (<div>{formik.errors.matKhau}</div>) : null} </div>
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-outline-success">Login</button>
            </div>
        </form>
    )
}

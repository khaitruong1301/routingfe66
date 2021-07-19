import React, { useState } from 'react'

export default function Login(props) {

    const [state, setState] = useState({
        values: { taiKhoan: '', matKhau: '', email: '' },
        errors: { taiKhoan: '', matKhau: '', email: '' }
    })

    console.log('state', state);
    const handleChangeInput = (event) => {
        let { value, name } = event.target; // {name='taiKhoan',value:'Nguyễn Văn A'}

        //Lấy ra 1 thuộc tính (attribute) tự đặt trên thẻ 
        let typeEmail = event.target.getAttribute('typeEmail'); // => email

        //Xử lý values
        // setState({...state,[values]: {...state.values,[name]:value}});
        let newValues = { ...state.values }; //{taiKhoan:'',matKhau:''},
        newValues[name] = value;
        //Xử lý errors
        let newErrors = { ...state.errors };
        let messageError = '';
        if (newValues[name].trim() === '') {
            messageError = name + ' không được bỏ trống !';
        }
        if (typeEmail === 'email') {
            //check email 
            let regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if(!regexEmail.test(newValues[name])) {
                messageError = 'Email không hợp lệ!';
            }
        }
        newErrors[name] = messageError;
        setState({
            values: newValues,
            errors: newErrors
        })
    }

    return (
        <form className="container">
            Login

            <div className="form-group">
                <p>username</p>
                <input className="form-control" name="taiKhoan" value={state.values.taiKhoan} onChange={handleChangeInput} />
                <p className="text text-danger">{state.errors.taiKhoan}</p>
            </div>
            <div className="form-group">
                <p>email</p>
                <input typeEmail='email' className="form-control" name="email" value={state.values.email} onChange={handleChangeInput} />
                <p className="text text-danger">{state.errors.email}</p>
            </div>
            <div className="form-group">
                <p>password</p>
                <input className="form-control" name="matKhau" value={state.values.matKhau} onChange={handleChangeInput} />
                <p className="text text-danger">{state.errors.matKhau}</p>

            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-outline-success">Login</button>
            </div>
        </form>
    )
}

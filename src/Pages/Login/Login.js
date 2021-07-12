import React from 'react'

export default function Login(props) {



    return (
        <div className="container">
            Login

            <div className="form-group">
                <p>username</p>
                <input />
            </div>
            <div className="form-group">
                <p>password</p>
                <input />
            </div>
            <div className="form-group">
                <button onClick={()=> {
                    
                    //Ví dụ login thành công => chuyển hướng
                    props.history.push('/profile');

                    // props.history.replace('/profile');


                }}>Login</button>
            </div>
        </div>
    )
}

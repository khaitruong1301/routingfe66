import React, { useState } from 'react'

import BaiTapChonXe from './BaiTapChonXe';

export default function UseStateDemo(props) {
    /*
        this.state = {
            like: 1
        }
    */
    let [state, setState] = useState({ like: 1 });
    const handleLike = () => {
        setState({ 
            like: state.like + 1 
        });
    }
    return (
        <div className="container">
            <h3>Demo useState</h3>
            <div className="card w-25">
                <img src="https://picsum.photos/id/55/200/200" alt='...' />
                <div className="card-body">
                    <p>{state.like} like</p>

                    <button onClick={handleLike}>Like</button>
                </div>
            </div>
            <hr />
            <h3>Bài tập chọn xe</h3>
            <BaiTapChonXe />
        </div>
    )
}

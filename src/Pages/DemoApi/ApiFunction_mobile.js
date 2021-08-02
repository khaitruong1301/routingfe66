import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { layDanhSachPhimAction } from '../../redux/action/QuanLyPhimActions';
export default function ApiFunction_mobile() {

    const { arrPhim } = useSelector(state => state.QuanLyPhimReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        /*
            dispatch(action): 
            + action1: object {type:'ten_action', payload: data}
            + action2: function (callback) => thực thi xong mới có kết quả để dispatch

        */
        //Gọi 1 hàm kết quả trả về là 1 hàm chưa gọi(callback function) closure function
        const action = layDanhSachPhimAction('GP01');

        dispatch(action);

    }, []);

    const renderPhim = () => {
        return arrPhim.map((phim, index) => {
            return <div className="mt-2" key={index}>
                <div className="">
                    <div className="d-flex">
                        <img src={phim.hinhAnh} width={100} alt="..." onError={(e) => { e.target.onerror = null; e.target.src = "https://picsum.photos/200/200" }} />
                        <div className="ml-2">
                            <p>{phim.moTa}</p>
                            <div className=" text-right">
                                <button className="btn btn-success">Xem chi tiết</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        })
    }
    return (
        <div className="container mt-2">
            <h3>Danh sách phim</h3>
            {renderPhim()}
        </div>
    )
}

import React, { Component } from 'react';
import axios from 'axios';
export default class ApiReactClass extends Component {

    state = {
        arrPhim : [],
      
    }


    getApi =  () => {
        let promise = axios({
            url:'http://movieapi.cyberlearn.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01',
            method:'GET'
        });
        //Xử lý thành công
        promise.then((result) => {
            console.log('result',result.data);
            //Sau khi lấy dữ liệu từ api trả về => đưa vào state thông qua hàm setState
            this.setState({
                arrPhim: result.data.content
            })
        });
        //Xử lý thất bại
        promise.catch((errors)=>{
            console.log('errors',errors.response?.data);
        })
    }


    renderPhim = () => {
        return this.state.arrPhim.map((phim,index) => {
            return <div className="col-4 mt-2" key={index}>
                <div className="card">
                    <img src={phim.hinhAnh} alt="..." />
                    <div className="card-body bg-dark text-white">
                        <h3>{phim.tenPhim}</h3>
                        <p>{phim.moTa}</p>
                    </div>
                </div>
            </div>
        })
    }


    render() {
        return (
            <div className="container mt-2">
                <button className="btn btn-success" onClick={()=>{
                    this.getApi()
                }}>Get api phim</button>
                <h3>Danh sách phim</h3>
                <div className="row">
                    {this.renderPhim()}
                </div>
            </div>
        )
    }


    componentDidMount() {
        this.getApi();
    }
}

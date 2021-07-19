import axios from "axios";





export const layDanhSachPhimAction = (maNhom = 'GP01') => {

    return async (dispatch) => {
        try {
            //Async await thường dùng cho các nghiệp vụ thực hiện các promise tuần tự
            const result = await axios({
                url: `http://movieapi.cyberlearn.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=${maNhom}`,
                method: 'GET'
            });
            await dispatch({
                type: 'SET_DATA_FILMS',
                arrPhim: result.data.content
            });

            // await dispatch({})
        } catch (errors) {
            console.log(errors.response?.data);
        }

    }
}



export const layChiTietPhimAction = (maPhim) => {

    return async (dispatch,getState) => {

        try {
            const result = await axios({
                url:`http://movieapi.cyberlearn.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
                method:'GET'
            });

            //Sau khi có dữ liệu dispatch lên reducer

            dispatch({
                type:'SET_CHI_TIET_PHIM',
                chiTietPhim:result.data.content
            })

        }catch(errors) {
            console.log(errors.response?.data);
        }

    }

}



    // //Dùng trong trường hợp gọi các api không quan nhau
        // let promise = axios({
        //     url:`http://movieapi.cyberlearn.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=${maNhom}`,
        //     method:'GET'
        // });
        // // //Xử lý thành công
        // // promise.then((result) => {
        // //     console.log('result',result.data);
        // //     //Sau khi lấy dữ liệu từ api trả về đưa dữ liệu lên reducer
        // //     dispatch({
        // //         type:'SET_DATA_FILMS',
        // //         arrPhim:result.data.content
        // //     })
        // // });
        // // //Xử lý thất bại
        // // promise.catch((errors)=>{
        // //     console.log('errors',errors.response?.data);
        // // })

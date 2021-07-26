import axios from 'axios';
import { history} from '../../App';
import { qlNguoiDungService } from '../../services/QuanLyNguoiDungService';
import { ACCESS_TOKEN, DOMAIN, USER_LOGIN } from '../../util/settings';

// thongTinNguoiDung = {
//   "taiKhoan": "string",
//   "matKhau": "string",
//   "email": "string",
//   "soDt": "string",
//   "maNhom": "string",
//   "hoTen": "string"
// }
export const dangKyAction = (thongTinNguoiDung) => {

    return async dispatch => {
        try {

            const result = await qlNguoiDungService.dangKy(thongTinNguoiDung);

            //Sau khi đăng nhập thành công => chuyển hướng trang

            console.log({result})

        }catch (error) {
            console.log({error})
        }

    }
}



export const dangNhapAction = (thongTinNguoiDung) => {

    return async dispatch => {
            try {
                const result = await qlNguoiDungService.dangNhap(thongTinNguoiDung);
                //Lưu thông tin đăng nhập người dùng vào localstorage
                localStorage.setItem(USER_LOGIN,JSON.stringify(result.data.content));
                localStorage.setItem(ACCESS_TOKEN,result.data.content.accessToken)
                //Dùng history để chuyển trang tương ứng với bên trong component là props.history.push
                console.log({result});
                dispatch({
                    type:'DANG_NHAP',
                    userLogin: result.data.content
                })


                history.push('/');


        }catch (error) {
            console.log({error})
        }

    }
}




export const getProfileAction = () => {
    return async dispatch => {
        try{
            const result = await axios({
                url:`${DOMAIN}/api/QuanLyNguoiDung/ThongTinTaiKhoan`,
                method:'POST',
                headers:{
                    "Authorization": `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`
                }});


                //Sau khi có dữ liệu từ api => dispatch lên reducer

                dispatch({
                    type:'SET_PROFILE',
                    profile:result.data.content
                })
            

        }catch(err){
            console.log({err})
        }
    }
}
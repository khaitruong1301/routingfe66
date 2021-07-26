import { USER_LOGIN } from "../../util/settings";


let usLogin = null;
if(localStorage.getItem(USER_LOGIN)){
    usLogin = JSON.parse(localStorage.getItem(USER_LOGIN));
}




const stateDefaut = {
    userLogin : usLogin,
    profile: {
        "taiKhoan": "",
        "matKhau": "",
        "hoTen": "default",
        "email": "",
        "soDT": null,
        "maNhom": "",
        "loaiNguoiDung": null,
        "thongTinDatVe": []
    }
}


export const QuanLyNguoiDungReducer = (state=stateDefaut,action) => {
    switch(action.type) {
        case 'DANG_NHAP': {
            state.userLogin = action.userLogin;
            return {...state}
        }

        case 'SET_PROFILE': {
            state.profile = action.profile;
            return {...state}
        }
        default: return state;
    }
}
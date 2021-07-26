import axios from "axios"
import { baseService } from "./baseService";

export class QuanLyNguoiDungService extends baseService { 

    dangKy = (thongTinNguoiDung)=> {
        return  this.post('/api/quanlynguoidung/dangky',thongTinNguoiDung);
    }


    dangNhap = (thongTinNguoiDung) => {
        return this.post('/api/quanlynguoidung/dangnhap',thongTinNguoiDung);
        // axios({
        //     url:`${DOMAIN}/api/QuanLyNguoiDung/DangNhap`,
        //     method:'POST',
        //     data:thongTinNguoiDung //data là phần body (header,body,footer)
        // });
    }

}


export const qlNguoiDungService = new QuanLyNguoiDungService();


// blob //file
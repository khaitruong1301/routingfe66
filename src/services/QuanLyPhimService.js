import axios from "axios"
import { baseService } from "./baseService";

export class QuanLyPhimService extends baseService { 


    themPhimUploadHinh = (frmDataFilm) => {
        return this.post('/api/quanlyphim/themphimuploadhinh',frmDataFilm);
    }
   

}


export const qlPhimService = new QuanLyPhimService();


// blob //file
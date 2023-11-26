import { axiosWithoutAuth } from "./axios.config"
import {TFilmAPI} from "src/pages/home/convert"
import { IDFilm } from "src/pages/detail/type";

export const getAllFilm = async (): Promise<TFilmAPI[]> => {
    try{
        const resp = await axiosWithoutAuth("QuanLyPhim/LayDanhSachPhim");
    return resp.data.content;
    } catch (error: any) {
       throw new Error(error);
    }
    
}



export const getFilmId = async (maPhim: string): Promise<IDFilm> => {
    try {
      const resp = await axiosWithoutAuth("/QuanLyPhim/LayThongTinPhim", {
        params: { maPhim },
      });
  
      return resp.data.content;
    } catch (error: any) {
      throw new Error(error);
    }
  };


  export const getTime = async (maPhim: string): Promise<IDFilm> => {
    try {
      const resp = await axiosWithoutAuth("/QuanLyRap/LayThongTinLichChieuPhim", {
        params: { maPhim },
      });
  
      return resp.data.content;
    } catch (error: any) {
      throw new Error(error);
    }
  };





// export const getFilmByID = async(id:number) =>{
//     try{
//         const resp = await axiosWithoutAuth("QuanLyPhim/LayDanhSachPhim");
//     return resp.data.content;
//     } catch (error: any) {
//        throw new Error(error);
//     }
// }
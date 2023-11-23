import { axiosWithoutAuth } from "./axios.config"
import {TFilmAPI} from "src/pages/home/convert"

export const getAllFilm = async (): Promise<TFilmAPI[]> => {
    try{
        const resp = await axiosWithoutAuth("QuanLyPhim/LayDanhSachPhim");
    return resp.data.content;
    } catch (error: any) {
       throw new Error(error);
    }
    
}





// export const getFilmByID = async(id:number) =>{
//     try{
//         const resp = await axiosWithoutAuth("QuanLyPhim/LayDanhSachPhim");
//     return resp.data.content;
//     } catch (error: any) {
//        throw new Error(error);
//     }
// }
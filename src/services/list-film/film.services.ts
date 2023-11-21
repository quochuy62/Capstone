import { axiosWithoutAuth } from "./axios.config"

export const getAllFilm = async () => {
    try{
        const resp = await axiosWithoutAuth("/QuanLyPhim/LayDanhSachPhim");
    return resp.data.content;
    } catch (error: any) {
       throw new Error(error);
    }
    
}
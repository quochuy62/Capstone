import { axiosWithoutAuth } from "./axios.config";



export const getAllRap = async () => {
    try{
        const resp = await axiosWithoutAuth("QuanLyRap/LayThongTinHeThongRap");
    return resp.data.content;
    } catch (error: any) {
       throw new Error(error);
    }
    
}
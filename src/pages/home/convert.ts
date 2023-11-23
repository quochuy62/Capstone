import { TCard } from "src/components/list-card/card";

export type TFilmAPI = {
  maPhim: number;
  tenPhim: string;
  biDanh: string;
  trailer: string;
  hinhAnh: string;
  moTa: string;
  maNhom: string;
  ngayKhoiChieu: string;
  danhGia: number;
  hot: boolean;
  dangChieu: boolean;
  sapChieu: boolean;
};

export const convertFilm = (data: TFilmAPI[]): TCard[] => 
{
    return data.map((item) => ({
        src: item.hinhAnh,
        name: item.tenPhim,
        id: item.maPhim,
        
    }))
};
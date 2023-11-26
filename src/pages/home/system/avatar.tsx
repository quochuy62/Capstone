import React from 'react'
import * as Sys from "./style"

export type TAvatar ={
  id: any;
  alt?:string;
  logo: string;
  danhSachPhim: {
    tenPhim: string;
    lstLichChieuTheoPhim:{
      tenRap: string;
      ngayChieuGioChieu: string;
    }
  }
  }
 
type Props = Omit<TAvatar,"danhSachPhim">;
// type Props = TAvatar;
export function Avatar(props: Props) {
  return (
    <div>
      <Sys.Card src={props.logo} alt={props.alt}/>
    </div>
  )
};


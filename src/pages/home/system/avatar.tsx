import React from 'react'
import * as Sys from "./style"

export type TAvatar ={
  id: any;
  alt?:string;
  logo: string;
}

type Props = Omit<TAvatar,"id">
export function Avatar(props: Props) {
  return (
    <div>
      <Sys.Card src={props.logo} alt={props.alt}/>
    </div>
  )
};


import React from 'react';
import {Avatar} from "./avatar";
import type { TAvatar } from './avatar';
import * as Sys from "./style";

type Props ={
  rap: TAvatar[];
}

function ListSystem(props: Props) {
  return (
    <Sys.List>
      {props.rap.map((item) => {
        return (
            <Avatar key={item.id} logo={item.logo} />
        );
      })}
    </Sys.List>
  )
}

export default ListSystem;

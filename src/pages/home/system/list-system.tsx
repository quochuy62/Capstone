import React, { useState } from "react";
import { Tabs } from "antd";
import { Avatar } from "./avatar";
import type { TAvatar } from "./avatar";
import * as Sys from "./style";
import { getAllRap } from "src/services/list-film/rap.services";


type Props = {
  rap: TAvatar[];
};

function ListSystem(props: Props) {

  return (
    <Tabs
    tabPosition="left"
    items={props.rap.map((a,i) =>{
      return {
       label: (
          <Avatar key={a.id} logo={a.logo}/>
        ),
        key:i,
        children: 'loading'
      } 
    })}
    />
  )
}

export default ListSystem;



// import React, { useState } from "react";
// import { Tabs } from "antd";
// import type { TabsProps } from 'antd';
// import { Avatar } from "./avatar";
// import type { TAvatar } from "./avatar";
// import * as Sys from "./style";

// type Props = {
//   rap: TAvatar[];
// };

// function ListSystem(props: Props) {
//   return (
//     <Sys.List>
//       {props.rap.map((item) => {
//         return (
//             <Avatar key={item.id} logo={item.logo} />
//         );
//       })}
//     </Sys.List>
//   )
// }

// export default ListSystem;

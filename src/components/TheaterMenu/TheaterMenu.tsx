import { Tabs, message } from "antd";
import React, { useEffect, useState } from "react";
import { theaterServ } from "src/services/rap/theater.service";
import TheaterMenuItem from "./TheaterMenuItem";

import * as S from './styled';

const TheaterMenu: React.FC = () => {
    const [theater, setTheater] = useState<any[]>([]);
  
    useEffect(() => {
      theaterServ
        .getAllTheaters()
        .then((res: any) => {
          setTheater(res.data.content);
        })
        .catch((err: any) => {
          message.error(err.response.data);
        });
    }, []);
  
    const renderItemTab = () => {
      return theater.map((item: any, index: number) => {
        return {
          label: (
            <S.Img
              src={item.logo}
              alt=""
            //   className="w-14 h-14 text-left bg-yellow-500 rounded-lg shadow-lg"
            />
          ),
          key: index + 1,
          children: <TheaterMenuItem maHeThongRap={item.maHeThongRap} />,
        };
      });
    };
  
    return (
      <div className="max-w-screen-xl mx-auto mb-16">
        <div className="">
          <Tabs tabPosition={"left"} items={renderItemTab()} />
        </div>
      </div>
    );
  };
  
  export default TheaterMenu;
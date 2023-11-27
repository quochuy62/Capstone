import { Tabs, message } from "antd";
import React, { useEffect, useState } from "react";
import { theaterServ } from "src/services/rap/theater.service";
import { NavLink } from "react-router-dom";
import { getLocal } from "src/utils/localStore";
import * as S from './styled';
import moment from 'moment';

interface ScheduleItem {
    tenCumRap: string;
    diaChi: string;
  }
  
  interface MovieItem {
    hinhAnh: string;
    tenPhim: string;
    lstLichChieuTheoPhim: {
      ngayChieuGioChieu: string;
    }[];
  }
  
  interface TheaterMenuItemProps {
    maHeThongRap: string;
  }
  
  function TheaterMenuItem({ maHeThongRap }: TheaterMenuItemProps) {
    const [schedule, setSchedule] = useState<ScheduleItem[]>([]);
    useEffect(() => {
      theaterServ
        .getAllMovieSchedules(maHeThongRap)
        .then((res) => {
          setSchedule(res.data.content);
        })
        .catch((err) => {
          message.error(err.response.data);
        });
    }, [maHeThongRap]);
    const renderTheaterMenuItem = () => {
      return schedule[0]?.lstCumRap.map((item, index) => {
        return {
          label: (
            <div className="text-left w-96 p-4 bg-yellow-500 rounded-lg shadow-lg">
              <p className="font-semibold text-lg text-white truncate">
                {item.tenCumRap}
              </p>
              <p className="text-sm text-gray-600 line-clamp-2">{item.diaChi}</p>
            </div>
          ),
          key: index,
          children: (
            <S.Div className="space-y-7 mr-5">
              {item.danhSachPhim.map((item, index) => {
                if (item.dangChieu) {
                  return (
                    <S.Divv
                      key={index}
                      className="flex py-5 px-5 bg-gradient-to-r from-yellow-500 to-blue-500 rounded-lg shadow-lg"
                    >
                      <div className="w-3/12 p-2">
                        <S.Img1
                          src={item.hinhAnh}
                          alt=""
                          className="object-cover h-72 rounded-lg shadow-lg"
                        />
                      </div>
                      <S.Inf className="w-9/12 px-5">
                        <h3 className="mb-3 text-2xl font-bold text-white">
                          {item.tenPhim}
                        </h3>
                        <S.Date className="grid grid-cols-2 gap-5">
                          {item.lstLichChieuTheoPhim
                            .slice(0, 5)
                            .map((suatChieu, index) => {
                              return (
                                <NavLink
                                  to={getLocal("user") ? "/booking" : "/login"}
                                  key={index}
                                >
                                  <p className="py-3 text-center text-lg font-semibold bg-white border border-gray-300 rounded-full cursor-pointer hover:bg-gray-200 hover:shadow-md">
                                    <span className="mr-2 text-green-600">
                                      {moment(suatChieu.ngayChieuGioChieu).format(
                                        "DD-MM-YYYY",
                                      )} 
                                    </span>
                                    ~
                                    <span className="ml-2 text-red-500">
                                       {moment(suatChieu.ngayChieuGioChieu).format(
                                        "h:mm",
                                      )} 
                                    </span>
                                  </p>
                                </NavLink>
                              );
                            })}
                        </S.Date>
                      </S.Inf>
                    </S.Divv>
                  );
                }
                return "";
              })}
            </S.Div>
          ),
        };
      });
    };
    return (
      <Tabs
        tabPosition={"top"}
        items={renderTheaterMenuItem()}
        style={{ maxHeight: "500px", overflowY: "scroll" }}
      />
    );
  }
  
  export default TheaterMenuItem;
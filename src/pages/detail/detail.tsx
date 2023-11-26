import React, { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { Col, Row } from 'antd';
import * as D from './styled';
import { IDFilm } from './type';
import { IIFE } from 'src/utils/homedetail';
import { getFilmId } from 'src/services/list-film/film.services';


function Detail() {


  const params = useParams<{idDetail:string}>();

  const [detail,setDetail] = useState<IDFilm>();
  useEffect(() =>{

    IIFE(async () => {
      if (params.idDetail) {
        const resp = await getFilmId(params.idDetail);
        setDetail(resp);
      }
    });

  },[params.idDetail]);
  return (
    <D.Div>
      <Row>
      <Col span={12}>
      <D.Img src ={detail?.hinhAnh}/>

      </Col>

      <Col span={12}>
        <D.Name>
          {detail?.tenPhim}
        </D.Name>

        <D.Desc>
          Mô tả: {detail?.moTa}
          <br/> <br/>
          Ngày khởi chiếu: {detail?.ngayKhoiChieu}<br/>
          Đánh giá: {detail?.danhGia}/10 <br/>

          <D.status>
          {detail?.dangChieu ? "Đang chiếu" : ""}
          {detail?.sapChieu ? "Sắp chiếu" : ""}
          </D.status>

        </D.Desc>
    
      </Col>

      </Row>

      

     


    
    </D.Div>
  )
}

export default Detail

import React from 'react';
import { Carousel } from 'antd';
import * as S from './style';
// autoplay
export function Slider(){
  return(
    <S.MyCarousel autoplay  dots={{className:"custom-dot"}}>
    <div>
      <S.CarouselItem>
      1
      </S.CarouselItem>
    </div>
    <div>
      <S.CarouselItem>
     2
      </S.CarouselItem>
    </div>
    <div>
      <S.CarouselItem>
      3
      </S.CarouselItem>
    </div>
  </S.MyCarousel>
  )
}

export default Slider;
{/* <S.Img src='http://movieapi.cyberlearn.vn/hinhanh/ban-tay-diet-quy.png'/>
 <S.Img src='http://movieapi.cyberlearn.vn/hinhanh/lat-mat-48h.png'/>
 <S.Img src='http://movieapi.cyberlearn.vn/hinhanh/cuoc-chien-sinh-tu.png'/> */}
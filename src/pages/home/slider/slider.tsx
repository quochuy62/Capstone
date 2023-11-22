import React from 'react';
import { Carousel } from 'antd';
import * as S from '../style';
// autoplay
export function Slider(){
  return(
    <S.MyCarousel autoplay  dots={{className:"custom-dot"}}>
    <div>
      <S.CarouselItem>
      <S.Img src='http://movieapi.cyberlearn.vn/hinhanh/ban-tay-diet-quy.png'/>
      </S.CarouselItem>
    </div>
    <div>
      <S.CarouselItem>
      <S.Img src='http://movieapi.cyberlearn.vn/hinhanh/lat-mat-48h.png'/>
      </S.CarouselItem>
    </div>
    <div>
      <S.CarouselItem>
      <S.Img src='http://movieapi.cyberlearn.vn/hinhanh/cuoc-chien-sinh-tu.png'/>
      </S.CarouselItem>
    </div>
  </S.MyCarousel>
  )
}

export default Slider;

 
 
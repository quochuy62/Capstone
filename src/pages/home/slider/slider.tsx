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
      <S.CarouselItem>2</S.CarouselItem>
    </div>
    <div>
      <S.CarouselItem>3</S.CarouselItem>
    </div>
  </S.MyCarousel>
  )
}

export default Slider;

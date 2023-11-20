import React from 'react'
import { Slider } from './slider/slider'
import * as S from "src/pages/home/slider/style"


function Home() {
  return (
    <div>
      <Slider/>
      <S.Title>MOVIE SELECTION</S.Title>
    </div>
  )
}

export default Home

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Slider } from './slider/slider';
import * as S from "src/pages/home/slider/style";
import {ListCard} from "src/components/list-card";
import { getAllFilm } from 'src/services/list-film';
import { IIFE } from 'src/utils/homedetail';

function Home() {
  const [listFilm, setListFilm] = useState([]);
  useEffect(() =>{
   IIFE(async () => {
    const resp = await getAllFilm();
    setListFilm(resp);
   });
  },[]);

  console.log({listFilm})
  return (
    <div>
      <Slider/>
      <S.Title>MOVIE SELECTION</S.Title>


      <div style={{
        margin:'4rem'
      }}>
      <ListCard/>

      </div>
      
    </div>
  )
}

export default Home;

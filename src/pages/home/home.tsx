import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Slider } from './slider/slider';
import * as S from "./style";
import {ListCard} from "src/components/list-card";
import { getAllFilm } from 'src/services/list-film';
import { IIFE } from 'src/utils/homedetail';
import { convertFilm } from './convert';

function Home() {
  const [listFilm, setListFilm] = useState([]);
  useEffect(() =>{
   IIFE(async () => {
    const resp = await getAllFilm();
    setListFilm(convertFilm(resp));
   });
  },[]);

  return (
    <div>
      <Slider/>
      <S.Title>MOVIE SELECTION</S.Title>
      <hr/>


      <div style={{
        margin:'4rem'
      }}>
      <ListCard film={listFilm}/>

      </div>
      
    </div>
  )
}

export default Home;

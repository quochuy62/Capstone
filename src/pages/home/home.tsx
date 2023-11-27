import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Slider } from './slider/slider';
import * as S from "./style";
import {ListCard} from "src/components/list-card";
import { getAllFilm, getAllRap } from 'src/services/list-film';
import { IIFE } from 'src/utils/homedetail';
import { convertFilm } from './convert';
import ListSystem from './system/list-system';
import {TheaterMenu} from 'src/components/TheaterMenu';

function Home() {
  const [listFilm, setListFilm] = useState([]);
  useEffect(() =>{
   IIFE(async () => {
    const resp = await getAllFilm();
    setListFilm(convertFilm(resp));
   });
  },[]);


  const [listRap, setListRap] = useState([]);
  useEffect(() =>{
   IIFE(async () => {
    const resp = await getAllRap();
    setListRap(resp);
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


      <S.Title>CINEMA SYSTEM</S.Title>
      <hr/>

      {/* <ListSystem rap={listRap}/> */}
      <TheaterMenu/>

      
    </div>
  )
}

export default Home;

import React, { useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';

function Detail() {
  const params = useParams<{idDetail:string}>();
  useEffect(() =>{

  },[])
  return (
    <div>
      Detail

      <Outlet/>
    </div>
  )
}

export default Detail

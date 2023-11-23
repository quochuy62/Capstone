import React, {PropsWithChildren, Suspense} from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './footer/footer';
import Header from './header/header';

function HomeTemplate(props: PropsWithChildren) {
  return (
    <div>
        <Header/>


        
        <Suspense fallback = {<p>"Loading........"</p>}>
        <Outlet/>
        </Suspense>

        

        <Footer/>
    </div>
  )
}

export default HomeTemplate
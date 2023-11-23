import React from "react";
import { Card } from "./card";
import type { TCard } from "./card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
import { Navigation} from "swiper/modules";


type Props = {
  film: TCard[];
};

export function ListCard(props: Props) {
  return (
    <Swiper
    navigation={true}
    modules={[Navigation]}
    spaceBetween={50}
    slidesPerView={5}
    >
      {props.film.map((item) => {
        return (
          <SwiperSlide>
            <Card key={item.id} src={item.src} name={item.name} id={item.id} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

{
  /* <div
style={{
display: "flex",
gap: "5rem",
flexWrap: "wrap",
}}
>
{props.film.map((item) => {
return <Card key={item.id} src={item.src} name={item.name} id={item.id} />;
})}
</div> */
}

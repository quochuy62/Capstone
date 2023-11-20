import {styled} from "styled-components"
import {Carousel} from "antd";

const MyCarousel = styled(Carousel)`
   .slick-dots.custom-dot li{
    &.slick-active{
        width: unset;
    }
    button{
        height: 1rem;
        width: 1rem;
        border-radius: 50%;
    }

   } 
`;

const CarouselItem = styled.h3`
height: 160px;
/* color: #fff; */
/* line-height: 160px; */
text-align: center;
background: #364d79;
`;




export {CarouselItem, MyCarousel};



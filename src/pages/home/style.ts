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

const CarouselItem = styled.div`
text-align: center;
height: 650px;
`;
const Img = styled.img`
object-fit: cover;
`

const Title = styled.h2`
padding-top: 1rem;
font-size: 3rem;
font-weight: 600;
color: #d4b447;
`




export {CarouselItem, MyCarousel, Title, Img};
                  


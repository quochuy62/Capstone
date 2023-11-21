import { Card } from "./card";
import type {TCard} from "./card"

type Props = {
    film: TCard[];
};

export function ListCard(props:Props) {
  return (
    <div 
    style={{
        display:"flex",
        gap:"5rem",
        flexWrap:"wrap",
    }}
    >
        {props.film.map((item) =>{
                return (
                <Card 
                src={item.src} 
                name={item.name} 
                />);
            })}
    
    </div>
  );
}

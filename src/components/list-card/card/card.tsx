import * as S from "./styled"
import { useNavigate } from "react-router-dom";
export type TCard ={
    id: any;
    src: string;
    alt?: string;
    name: string;
}

// type Props = Omit<TCard,"id">;
type Props = TCard;
export function Card(props: Props){
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/detail/${props.id}`)
    };
    return (
    <S.Wrapper>
        <div>
        <S.Img onClick={handleNavigate} src={props.src} alt={props.alt} />

        </div>
         <div className="content">
        <S.Name>{props.name}</S.Name>

        </div> 
        <div className="action">
            <S.Button onClick={handleNavigate}>Chi tiết</S.Button>
        </div>

        
        
    </S.Wrapper>
    );
}
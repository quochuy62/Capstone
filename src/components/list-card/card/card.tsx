import * as S from "./styled"
export type TCard ={
    src: string;
    alt?: string;
    name: string;
}

type Props = TCard;
export function Card(props: Props){
    return (
    <S.Wrapper>
        <div>
        <S.Img src={props.src} alt={props.alt} />

        </div>
         <div className="content">
        <S.Name>{props.name}</S.Name>

        </div> 
        <div className="action">
            <S.Button>ĐẶT VÉ</S.Button>
        </div>

        
        
    </S.Wrapper>
    );
}
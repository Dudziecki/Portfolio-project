import React from 'react';

import {Link} from "../../../../components/Link";
import {S} from "../Works_Styles"
import {Button} from "../../../../components/Button";

type WorkPropsType={
    title:string
    text:string
    src:string
}
export const Work:React.FC<WorkPropsType> = (props:WorkPropsType) => {
    return (
        <S.Work>
            <S.ImageContainer>
                <S.Image src={props.src} alt=""/>
                <Button>View project</Button>
            </S.ImageContainer>


            <S.DescriptionContainer>
                <S.Title>{props.title}</S.Title>
                <S.Text>{props.text}</S.Text>
                <Link active href={"#"}>demo</Link>
                <Link href={"#"}>code</Link>
            </S.DescriptionContainer>


        </S.Work>
    );
};




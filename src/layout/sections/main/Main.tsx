import React from 'react';
import {S} from "../main/Main_Styles"
import photo from '../../../assets/images/photo.webp'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../styles/Container";



export const Main:React.FC = () => {
    return (
        <S.Main>
            <Container>
                <FlexWrapper align={"center"} justify={"space-around"} wrap={"wrap"}>

                    <div>
                        <S.SmallText>Hi There</S.SmallText>
                        <S.Name>I am <span>Michael Dudik</span></S.Name>
                        <S.MainTitle>A Web Developer. </S.MainTitle>
                    </div>
                    <S.ImageWrapper>
                        <S.Photo src={photo}/>
                    </S.ImageWrapper>

                </FlexWrapper>
            </Container>

        </S.Main>
    );
};



import React from 'react';
import {S} from "../main/Main_Styles"
import photo from '../../../assets/images/photo.webp'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../styles/Container";

import Typewriter from 'typewriter-effect';


export const Main: React.FC = () => {
    return (
        <S.Main>
            <Container>
                <FlexWrapper align={"center"} justify={"space-around"} wrap={"wrap"}>

                    <div>
                        <S.SmallText>Hi There</S.SmallText>
                        <S.Name>I am <span>Michael Dudik</span></S.Name>

                        <S.MainTitle>
                            <p> Web Developer.</p>
                            <Typewriter
                                options={{
                                    strings: ['A Web Developer','A Frontend Developer'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </S.MainTitle>
                    </div>
                    <S.ImageWrapper>
                        <S.Photo src={photo}/>
                    </S.ImageWrapper>

                </FlexWrapper>
            </Container>

        </S.Main>
    );
};



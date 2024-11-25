import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import Icon from "../../../components/icon/Icon";
import {Slider} from "../../../components/slider/Slider";
import {FlexWrapper} from "../../../components/FlexWrapper";

import {Container} from "../../../styles/Container";
import {S} from "../skills/Skills_Styles";

export const Testimony:React.FC = () => {
    return (
        <StyledTestimony>
            <Container>
                <SectionTitle>Testimony</SectionTitle>
                <FlexWrapper direction={"column"} align={"center"}>
                    <S.IconWrapper>
                        <Icon iconId="queteSvg"/>
                    </S.IconWrapper>

                    <Slider/>
                </FlexWrapper>

            </Container>

        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
    //min-height: 100vh;
    background-color: #aeb9ff;

    ${S.IconWrapper} {
        margin: 40px 0 70px;
    }
`


import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import Icon from "../../../components/icon/Icon";
import {Slider} from "../../../components/slider/Slider";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Testimony = () => {
    return (
        <StyledTestimony>
            <SectionTitle>Testimony</SectionTitle>
            <FlexWrapper direction={"column"} align={"center"} >
                <Icon iconId="queteSvg"/>
                <Slider/>
            </FlexWrapper>

        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
    min-height: 100vh;
    background-color: #aeb9ff;
`


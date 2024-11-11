import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/images/photo.webp'
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={"center"} justify={"space-around"}>

                <div>
                    <span>Hi There</span>
                    <Name>I am Michael Dudik</Name>
                    <MainTitle>A Web Developer. </MainTitle>
                </div>

                <Photo src={photo}/>
            </FlexWrapper>
        </StyledMain>
    );
};
const StyledMain= styled.div`
    min-height: 100vh;
    background-color: #f6ddbb;
`
const Photo = styled.img`
    width: 350px;
    height: 500px;
    object-fit: center;
`
const Name = styled.h2`

`
const MainTitle=styled.h1`
`


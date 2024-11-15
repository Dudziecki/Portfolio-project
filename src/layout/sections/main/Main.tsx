import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/images/photo.webp'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../styles/Container";
import {theme} from "../../../styles/Theme";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={"center"} justify={"space-between"}>

                    <div>
                        <SmallText>Hi There</SmallText>
                        <Name>I am <span>Michael Dudik</span></Name>
                        <MainTitle>A Web Developer. </MainTitle>
                    </div>
                    <ImageWrapper>
                        <Photo src={photo}/>
                    </ImageWrapper>

                </FlexWrapper>
            </Container>

        </StyledMain>
    );
};
const StyledMain = styled.section`
    min-height: 100vh;
    background-color: #f6ddbb;
    display:flex;
    
`
const Photo = styled.img`
    width: 350px;
    height: 430px;
    object-fit: center;
`
const Name = styled.h2`
    font-weight: 700;
    font-size: 50px;
    font-family: "Josefin Sans", sans-serif;
    margin:10px 0;
    z-index:0;
    span{
        position:relative;
        z-index:0;
        &::before{
            content:"";
            display:inline-block;
            width: 100%;
            height: 20px;
            background-color: ${theme.colors.accent};
            
            position:absolute;
            bottom:0;
            z-index:-1;
        }
    }
`
const MainTitle = styled.h1`
    font-weight: 400;
    font-size: 27px;
    
`
const SmallText = styled.span`
    font-weight: 400;
    font-size: 14px;
`
 const ImageWrapper =styled.div`
     position:relative;
     z-index:0;
    &::before{
        content:"";
        display:inline-block;
        width: 360px;
        height: 470px;
        border:5px solid ${theme.colors.accent};
        
        position:absolute;
        top:-24px;
        left:20px;
        z-index:-1;
    }
 `


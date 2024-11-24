import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";

const Main = styled.section`
    min-height: 100vh;
    background-color: #f6ddbb;
    display:flex;
    
`
const Photo = styled.img`
    width: 350px;
    height: 430px;
    object-fit: cover;
    margin-right:20px;
    
    @media ${theme.media.mobile}{
        width: 310px;
        height: 380px;
    }
`
const Name = styled.h2`
    ${font({family:"'Josefin Sans', sans-serif",weight:700,Fmax:50,Fmin:36})};
    
    //font-size: 50px;
   
    margin:10px 0;
    z-index:0;
    span{
        position:relative;
        z-index:0;
        white-space: nowrap;
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
    @media ${theme.media.mobile}{
        margin:15px 0 22px;
       
    }
`
const MainTitle = styled.h1`
    
    ${font({weight:400,Fmax:27,Fmin:20})};
    
`
const SmallText = styled.span`
    font-weight: 400;
    font-size: 14px;
    display: inline-block;
    margin-top:15px;
   
    
`
const ImageWrapper =styled.div`
    position: relative;
    z-index: 0;


    &::before {
        content: "";
        display: inline-block;
        width: 360px;
        height: 470px;
        border: 5px solid ${theme.colors.accent};

        position: absolute;
        top: -24px;
        left: 20px;
        z-index: -1;
        @media ${theme.media.mobile} {
            width: 314px;
            height: 414px;
            top: -17px;
            left: 20px;

        }
    }

    @media ${theme.media.mobile} {
        margin-top: 65px;
    }


`
export const S={
    Main,
    Photo,
    MainTitle,
    Name,
    SmallText,
    ImageWrapper
}
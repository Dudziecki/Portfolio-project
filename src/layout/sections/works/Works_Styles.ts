import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {Button} from "../../../components/Button";
import {Link} from "../../../components/Link";
import {FlexWrapper} from "../../../components/FlexWrapper";

const Works = styled.section`
    ${FlexWrapper}{
        gap:30px;
        flex-grow:1;
    }
`
const Work= styled.div`
    background-color: ${theme.colors.secondaryBg};
    flex-grow: 1;
    width: 330px;
    max-width:47%;
    ${Link}{
        padding:10px 0;

    }
    ${Link} + ${Link} {
        margin-left: 20px;
    }
    @media(${theme.media.desktop}){
        max-width: 540px;
    }
    
    
  
`
const Image= styled.img`
    width: 100%;
    height:260px;
    object-fit: cover;
`
const Title= styled.h3`
    font-family: "Josefin Sans", sans-serif;
    font-size: 16px;
    font-weight: 600;
`
const Text= styled.p`
    margin:15px 0 10px;
`
const DescriptionContainer= styled.div`
    padding:25px 20px;
   
  
`
const ImageContainer =styled.div`
    position:relative;

     &::before{
         content:'';
         display:inline-block;
         backdrop-filter: blur(8px);
         background: rgba(0, 0, 0, 0.3);
         opacity:0;

         position: absolute;
         top: 0;
         left: 0;
         right: 0;
         bottom: 0;
     }
     &:hover{
         &::before{
             opacity:1;
         }
         ${Button}{
             opacity:1;
         }
     }
     ${Button}{
         opacity:0;
         position: absolute;
         top:50%;
         left:50%;
         transform: translate(-50%, -50%);
         &::before{
             width: 100%;
             height: 100%;
         }
     }
     @media ${theme.media.tablet}{
         &::before{
             opacity:1;
         }
         ${Button}{
             opacity:1;
         }
     }
     
 `
export const S={
    Works,
    Work,
    Image,
    Title,
    Text,
    DescriptionContainer,
    ImageContainer
}
import React from 'react';
import styled from "styled-components";
import {Link} from "../../../../components/Link";
import {theme} from "../../../../styles/Theme";
import {Button} from "../../../../components/Button";

type WorkPropsType={
    title:string
    text:string
    src:string
}
export const Work = (props:WorkPropsType) => {
    return (
        <Styledwork>
            <ImageContainer>
                <Image src={props.src} alt=""/>
                <Button>View project</Button>
            </ImageContainer>


            <DescriptionContainer>
                <Title>{props.title}</Title>
                <Text>{props.text}</Text>
                <Link href={"#"}>demo</Link>
                <Link href={"#"}>code</Link>
            </DescriptionContainer>


        </Styledwork>
    );
};

const Styledwork= styled.div`
    background-color: ${theme.colors.secondaryBg};
    max-width: 540px;
    width: 100%;
    ${Link}{
        padding:10px 0;

    }
    ${Link} + ${Link} {
        margin-left: 20px;
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
     &:hover{
         &::before{
             content:'';
             display:inline-block;
             backdrop-filter: blur(8px);
             background: rgba(0, 0, 0, 0.3);

             position: absolute;
             top: 0;
             left: 0;
             right: 0;
             bottom: 0;
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
     
 `


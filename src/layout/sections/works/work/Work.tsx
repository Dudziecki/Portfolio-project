import React from 'react';
import styled from "styled-components";

type WorkPropsType={
    title:string
    text:string
    src:string
}
export const Work = (props:WorkPropsType) => {
    return (
        <Styledwork>
            <Image src={props.src} alt=""/>
            <Title>{props.title}</Title>
            <Text>props.text</Text>
            <Link href={"#"}>demo</Link>
            <Link href={"#"}>code</Link>

        </Styledwork>
    );
};

const Styledwork= styled.div`
    background-color: #ffe869;
    max-width: 540px;
    width: 100%;
`
const Image= styled.img`
    width: 100%;
    height:260px;
    object-fit: cover;
`
const Title= styled.h3`
`
const Text= styled.p`
`
const Link= styled.a`
`

import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import {Container} from "../../../styles/Container";
import {theme} from "../../../styles/Theme";

export const Contact = () => {
    return (
        <StyledContact>
            <Container>
                <SectionTitle>Contact</SectionTitle>
                <StyledForm>
                    <Field placeholder={"Name"}/>
                    <Field placeholder={"Subject"}/>
                    <Field placeholder={"Message"} as={"textarea"}/>
                    <Button type={"submit"}>Send Message</Button>
                </StyledForm>
            </Container>


        </StyledContact>
    );
};
const StyledContact = styled.section`
    min-height:50vh;
    
`
const StyledForm = styled.form`
    max-width: 540px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap:16px;
    margin: 0 auto;
    align-items: center;
    textarea{
        resize: none;
        height: 155px;
    }
   
    
`
const Field = styled.input`
    width: 100%;
    background-color: ${theme.colors.secondaryBg};
    padding:7px  15px;

    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: 12px;
    letter-spacing: 0.05em;
    color: ${theme.colors.textColor};
    
    border:1px solid ${theme.colors.borderColor};
    &::placeholder{
        color:${theme.colors.placeholderColor};
        text-transform: capitalize;
    }
    &:focus-visible{
        outline:1px solid ${theme.colors.borderColor};
    }
`


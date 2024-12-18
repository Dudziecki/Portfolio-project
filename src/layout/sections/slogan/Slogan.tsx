import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import {Container} from "../../../styles/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Slogan:React.FC = () => {
    return (
        <StyledSlogan>
            <Container>
                <FlexWrapper direction="column" align="center" >
                    <SectionTitle>I Am Available For Freelance</SectionTitle>
                    <Button>Hire Me</Button>
                </FlexWrapper>

            </Container>


        </StyledSlogan>
    );
};
const StyledSlogan = styled.section`
    min-height: 30vh;
    background-color: burlywood;

`


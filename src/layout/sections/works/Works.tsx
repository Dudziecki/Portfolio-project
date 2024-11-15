import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";

import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import socialImg from "../../../assets/images/project-1.webp"
import timerImg from "../../../assets/images/project-2.webp"
import {HeaderMenu} from "../../header/headerMenu/HeaderMenu";

const workItems = ["All", "Landing Page", "React", "Spa"]

export const Works = () => {
    return (
        <StyledWorks>
            <SectionTitle>My works</SectionTitle>
            <HeaderMenu menuItems={workItems}/>
            <FlexWrapper justify={"space-around"}>
                <Work title={"Social Network"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."} src={socialImg}/>
                <Work title={"Timer"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."} src={timerImg}/>
            </FlexWrapper>
        </StyledWorks>
    );
};
const StyledWorks = styled.section`
    min-height: 100vh;
    background-color: #deefff;
`


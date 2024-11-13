import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import Icon from "../../../components/icon/Icon";
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>My Skills</SectionTitle>
            <FlexWrapper wrap={"wrap"} justify={"space-between"}>
                <Skill iconId={"codeSvg"} title={"Html5"}
                       description={"Lorem hghgh jgj jg jjg  gkk kgk kgf kkfk kkkdkddj"}/>
                <Skill iconId={"cssSvg"} title={"Css3"}
                       description={"Lorem hghgh jgj jg jjg  gkk kgk kgf kkfk kkkdkddj"}/>
                <Skill
                    iconId={"reactSvg"} title={"React"}
                    description={"Lorem hghgh jgj jg jjg  gkk kgk kgf kkfk kkkdkddj"}/>
                <Skill iconId={"typesctiptSvg"}
                       title={"Typescript"}
                       description={"Lorem hghgh jgj jg jjg  gkk kgk kgf kkfk kkkdkddj"}/>
                <Skill iconId={"styledComponentsSvg"} title={"Styled Components"}
                       description={"Lorem hghgh jgj jg jjg  gkk kgk kgf kkfk kkkdkddj"}/>
                <Skill
                    iconId={"figmaSvg"} title={"Figma"}
                    description={"Lorem hghgh jgj jg jjg  gkk kgk kgf kkfk kkkdkddj"}/>
            </FlexWrapper>


        </StyledSkills>
    );
};
const StyledSkills = styled.section`
    background-color: burlywood;
    min-height: 100vh;
`


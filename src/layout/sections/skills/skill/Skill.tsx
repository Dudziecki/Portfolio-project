import React from 'react';
import Icon from "../../../../components/icon/Icon";
import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {theme} from "../../../../styles/Theme";

type SkillPropsType = {
    iconId: string
    title:string
    description:string
}
export const Skill = (props:SkillPropsType) => {
    return (
        <StyledSkill>
            <FlexWrapper direction={"column"} align="center">
                <IconWrapper>
                    <Icon iconId={props.iconId}/>
                </IconWrapper>

                <SkillTitle>{props.title}</SkillTitle>
                <SkillText>{props.description}</SkillText>
            </FlexWrapper>

        </StyledSkill>
    );
};
const StyledSkill = styled.div`
    width: 338px;
    padding: 20px 40px;
`
const SkillTitle = styled.h3`
    font-weight: 700;
    font-size: 16px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    margin: 70px 0 15px;
`
const SkillText = styled.p`
    text-align: center;
    font-weight: 400;
    font-size: 14px;
`
const IconWrapper= styled.div`
    position:relative;
    &::before{
        content:'';
        display: inline-block;
        width: 80px;
        height: 80px;
        background-color: rgba(255,255,255,11%);
        
        position:absolute;
        transform:rotate(45deg) translate(-50%,-50%);
        left: 50%;
        top: 50%;
        transform-origin: top left;
    }
`


import {theme} from "../../../styles/Theme";
import styled from "styled-components";

const Skills = styled.section`
    position:relative;
`

const Skill = styled.div`
    width: 330px;
    flex-grow:1;
    padding: 44px 20px 52px;
    @media ${theme.media.mobile}{
        padding: 62px 0 40px;
    }
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
export const IconWrapper= styled.div`
    position: relative;

    &::before {
        content: '';
        display: inline-block;
        width: 80px;
        height: 80px;
        background-color: rgba(255, 255, 255, 11%);

        position: absolute;
        transform: rotate(45deg) translate(-50%, -50%);
        left: 50%;
        top: 50%;
        transform-origin: top left;
    }
`
export const S={
    Skills,
    Skill,
    SkillTitle,
    SkillText,
    IconWrapper,
}
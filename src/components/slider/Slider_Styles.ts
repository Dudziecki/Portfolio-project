import styled from "styled-components";
import {theme} from "../../styles/Theme";

const Slider = styled.div`

    max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor:grab;
    &:active{
        cursor:grabbing;
    }
`
const Slide = styled.div`
    text-align: center;`
const Text = styled.p``
const Name = styled.span`
    font-family: "Josefin Sans", sans-serif;
    font-weight: 600;
    font-size: 16px;
    letter-spacing: 0.06em;
    text-transform: uppercase;

    display: inline-block;
    margin: 22px 0 42px;
`

export const S={
    Slider,
    Slide,
    Text,
    Name,

}
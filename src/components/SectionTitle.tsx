import React from 'react';
import styled from "styled-components";
import {theme} from "../styles/Theme";
import {font} from "../styles/Common";

export const SectionTitle = styled.h2`
    ${font({family:" 'Josefin Sans', sans-serif",weight:600,Fmax:36,Fmin:30 })};
   
    letter-spacing: 0.14em;
    text-align: center;
    margin-bottom: 90px;
    
    position: relative;

    &::before {
        content: ' ';
        display: inline-block;
        width: 55px;
        height: 2px;
        background-color: ${theme.colors.accent};
        
        position:absolute;
        left:50%;
        bottom:-30px;
        transform: translateX(-50%);
        @media ${theme.media.tablet} {
            bottom:-24px;
        }
    }
`


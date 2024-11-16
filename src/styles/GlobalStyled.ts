import React from 'react';
import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme";

export const GlobalStyled = createGlobalStyle`
    *,
    *::before,
    *::after{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        margin: 0;
        font-family: "Poppins", sans-serif;
        font-weight: 400;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color:${theme.colors.textColor};
        line-height: 1.2;
    }
    a{
        text-decoration: none;
        color:${theme.colors.textColor};
        text-transform: uppercase;
    }
    ul{
        list-style:none;
    }
    section{
        padding:100px 0;
    }
    button{
        background-color: unset;
        border: none;
        cursor: pointer;
        color:${theme.colors.textColor};
    }
    section:nth-of-type(odd){
        background-color: ${theme.colors.primaryBg};
    }
    section:nth-of-type(even){
        background-color: ${theme.colors.secondaryBg};
    }
`
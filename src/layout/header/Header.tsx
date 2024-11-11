import React, {Component} from 'react';
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";
import styled from "styled-components";

export const Header = () => {

    return (
        <StyledHeader>
            <Logo/>
            <Menu/>
        </StyledHeader>
    );

};

const StyledHeader = styled.header`
    background-color: antiquewhite;
    display: flex;
    justify-content: space-between;
`


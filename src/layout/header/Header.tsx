import React, {Component} from 'react';
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";
import styled from "styled-components";

const Items = ["Home", "Skills", "Works", "Testimony", "Contacts"]
export const Header = () => {

    return (
        <StyledHeader>
            <Logo/>
            <Menu menuItems={Items}/>
        </StyledHeader>
    );

};

const StyledHeader = styled.header`
    background-color: antiquewhite;
    display: flex;
    justify-content: space-between;
`


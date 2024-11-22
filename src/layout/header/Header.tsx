import React, {Component} from 'react';
import {Logo} from "../../components/logo/Logo";

import styled from "styled-components";
import {Container} from "../../styles/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {HeaderMenu} from "./headerMenu/HeaderMenu";
import {MobileMenu} from "./mobileMenu/MobileMenu";

const Items = ["Home", "Skills", "Works", "Testimony", "Contacts"]
export const Header = () => {

    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify="space-between" align={"center"}>
                    <Logo/>
                    <HeaderMenu menuItems={Items}/>
                    <MobileMenu menuItems={Items}/>
                </FlexWrapper>

            </Container>

        </StyledHeader>
    );

};

const StyledHeader = styled.header`
    background:rgba(31,31,32,0.9);
    display: flex;
    justify-content: space-between;
    padding:20px 0;
    position:fixed;
    top:0;
    left:0;
    right:0;
    z-index:99999;
`


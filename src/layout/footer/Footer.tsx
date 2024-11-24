import React from 'react';
import styled from "styled-components";
import Icon from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";
import {theme} from "../../styles/Theme";
import {font} from "../../styles/Common";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction={"column"} align={"center"}>
                <Name>Michael</Name>
                <SocialList>

                    <SocialItems>
                        <SocialIconLink href={"#"}>
                            <Icon iconId={"instaSvg"}></Icon>
                        </SocialIconLink>
                    </SocialItems>
                    <SocialItems>

                        <SocialIconLink href={"#"}>
                            <Icon iconId={"telegSvg"}></Icon>
                        </SocialIconLink>
                    </SocialItems>

                    <SocialItems>
                        <SocialIconLink href={"#"}>
                            <Icon iconId={"vkSvg"}></Icon>
                        </SocialIconLink>
                    </SocialItems>

                    <SocialItems>
                        <SocialIconLink href={"#"}>
                            <Icon iconId={"linkdSvg"}></Icon>
                        </SocialIconLink>
                    </SocialItems>

                </SocialList>
                <Copyright>© 2024 Michael Dudik, All Rights Reserved.</Copyright>
            </FlexWrapper>

        </StyledFooter>
    );
};
const StyledFooter = styled.footer`
    min-height: 20vh;
    background-color: ${theme.colors.primaryBg};
    padding: 40px 0;
`
const Name = styled.span`
    ${font({family:"'Josefin Sans', sans-serif",weight:700,Fmax:22,Fmin:16})}
    font-family: "Josefin Sans", sans-serif;
    font-weight: 700;
    font-size: 22px;
    letter-spacing: 0.14em;
`
const SocialList = styled.ul`
    display: flex;
    gap:20px;
    list-style: none;
    margin:30px 0;
    
`
const SocialIconLink = styled.a`
   
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    width: 35px;
    height: 35px;
    color:${theme.colors.accent};
    
    display: flex;
    justify-content: center;
    align-items: center;
`
const SocialItems = styled.li`
    `
const Copyright = styled.span``



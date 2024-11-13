import React from 'react';
import styled from "styled-components";
import Icon from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";

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
                <Copyright>© 2023 Svetlana Dyablo, All Rights Reserved.</Copyright>
            </FlexWrapper>

        </StyledFooter>
    );
};
const StyledFooter = styled.footer`
    min-height: 20vh;
    background-color: antiquewhite;
`
const Name = styled.span``
const SocialList = styled.ul`
    display: flex;
    gap:5px;
    list-style: none;
    
`
const SocialIconLink = styled.a``
const SocialItems = styled.li``
const Copyright = styled.span``


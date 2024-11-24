import React from 'react';
import styled, {css} from "styled-components";
import {theme} from "../../../styles/Theme";

export const MobileMenu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledMenu>
            <BurgerMenu isOpened={false}>
                <span></span>
            </BurgerMenu>
            <MobileMenuPopup isOpened={false}>
                <ul>
                    {props.menuItems.map((item, index) => {
                        return <ListItem key={index}>
                            <Link href="#">
                                {item}
                                <Mask>
                                    <span>{item}</span>
                                </Mask>
                                <Mask>
                                    <span>{item}</span>
                                </Mask>
                            </Link>
                        </ListItem>

                    })}

                </ul>
            </MobileMenuPopup>

        </StyledMenu>
    );
};
const StyledMenu = styled.nav`
    display: none;
    
    @media ${theme.media.tablet} {
        display: block;
    }


`
const BurgerMenu = styled.button<{isOpened:boolean}>`
    position: fixed;
    top: -100px;
    right: -100px;
    width: 200px;
    height: 200px;
    z-index:999999999;

    span {
        display: block;
        width: 36px;
        height: 2px;
        background-color: ${theme.colors.textColor};

        position: absolute;
        left: 40px;
        bottom: 50px;

        ${props => props.isOpened && css<{ isOpened: boolean }>`
                background-color:rgba(255,255,255,0);
            `}

        &::before {
            content: '';
            display: block;
            width: 36px;
            height: 2px;
            background-color: ${theme.colors.textColor};

            position: absolute;
            transform: translateY(-10px);

            ${props => props.isOpened && css<{ isOpened: boolean }>`
                transform: rotate(-45deg) translateY(0);
            `}
        }

        &::after {
            content: '';
            display: block;
            width: 24px;
            height: 2px;
            background-color: ${theme.colors.textColor};

            position: absolute;
            transform: translateY(10px);

            ${props => props.isOpened && css<{ isOpened: boolean }>`
                transform: rotate(45deg) translateY(0);
                width: 36px;
            `}
        }
    }

`
 const MobileMenuPopup= styled.div<{isOpened:boolean}>`
     position:fixed;
     left: 0;
     bottom: 0;
     right: 0;
     top: 0;
     background-color: rgba(31, 31, 32, 0.9);
     display:none;
     z-index:99999;
     ul{
         display:flex;
         flex-direction: column;
         align-items: center;
     }
     
     ${props => props.isOpened && css<{isOpened:boolean}>`
        display:flex;
         justify-content: center;
         align-items: center;
     `}
     ul {
         display: flex;
         gap: 20px;
     }
 `

const Link = styled.a`
    font-family: "Josefin Sans", sans-serif;
    font-weight: 400;
    font-size: 20px;
    color: transparent;

`
const Mask = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    height: 50%;
    overflow-y: hidden;
    //outline:1px solid red;
    color: ${theme.colors.accent};

    & + & {
        top: 50%;

        span {
            display: inline-block;
            transform: translateY(-50%);
        }
    }
`
const ListItem = styled.li`
    position: relative;

    &::before {
        content: '';
        display: inline-block;
        height: 3px;
        background-color: ${theme.colors.accent};

        position: absolute;
        top: 50%;
        left: -10px;
        right: -10px;
        z-index: 1;
        transform: scale(0);
    }

    &:hover {
        &::before {
            transform: scale(1);
        }

        ${Mask} {
            transform: skewX(12deg) translateX(3px);
            color: ${theme.colors.textColor};

            & + ${Mask} {
                transform: skewX(12deg) translateX(-3px);
            }
        }


    }
`

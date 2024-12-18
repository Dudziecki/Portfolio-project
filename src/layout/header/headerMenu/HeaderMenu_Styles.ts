import styled, {css} from "styled-components";
import {theme} from "../../../styles/Theme";
import {Link} from "react-scroll";

// Menu
const MenuItem = styled.li`
    position: relative;


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
    transition: ${theme.animations.transition};
    

    & + & {
        top: 50%;

        span {
            display: inline-block;
            transform: translateY(-50%);
        }
    }
`
const NavLink = styled(Link)`
    font-family: "Josefin Sans", sans-serif;
    font-weight: 400;
    font-size: 20px;
    color: transparent;
    transition: ${theme.animations.transition};
    
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

    &:hover,&.active {
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


// Mobile Menu
const MobileMenu = styled.nav`
    

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
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    top: 0;
    background-color: rgba(31, 31, 32, 0.9);

    z-index: 99999;
    display: flex;
    justify-content: center;
    align-items: center;
    
    transform: translateY(-100%);
    transition:1s ease-in-out;
    ul {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    ${props => props.isOpened && css<{ isOpened: boolean }>`
        transform: translateY(0);
       
    `}
    ul {
        display: flex;
        gap: 20px;
    }
`
// Desktop Menu

const DesktopMenu = styled.nav`
    ul {
        display: flex;
        gap: 20px;
    }

    
`

export const S= {
    NavLink,
    Mask,
    MenuItem,
    MobileMenu,
    BurgerMenu,
    MobileMenuPopup,
    DesktopMenu
}
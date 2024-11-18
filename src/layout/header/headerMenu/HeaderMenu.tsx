import React from 'react';
import styled from "styled-components";
import {theme} from "../../../styles/Theme";

export const HeaderMenu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledMenu>
            <ul>
                {props.menuItems.map((item,index) => {
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
        </StyledMenu>
    );
};
const StyledMenu = styled.nav`
    ul {
        display: flex;
        gap: 20px;
    }
`

const Link = styled.a`
    font-family:"Josefin Sans", sans-serif;
    font-weight: 400;
    font-size: 20px;
    color:${theme.colors.accent};
    
`
const Mask = styled.span`
    position:absolute;
    top: 0;
    left: 0;
    display: inline-block;
    height: 50%;
    overflow-y: hidden;
    //outline:1px solid red;
    color:${theme.colors.accent};
    & + &{
        top: 50%;
        span{
            display: inline-block;
            transform: translateY(-50%);
        }
    }
`
const ListItem = styled.li`
    position: relative;
    
    &:hover{
        ${Mask}{
            transform:skewX(12deg);
        }
    }
`

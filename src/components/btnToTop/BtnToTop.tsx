import React, {useEffect, useState} from 'react';
import Icon from "../icon/Icon";
import styled from "styled-components";
import {animateScroll as scroll} from "react-scroll";

export const BtnToTop = () => {
    const [showBtn, setshowBtn] = useState(false)
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 200) {
                setshowBtn(true)
            } else {
                setshowBtn(false)
            }
        })
    }, [])
    return (
        <>
            {showBtn &&(
                <StyledButton onClick={() => {
                    scroll.scrollToTop()
                }}>
                    <Icon iconId={"arrowToTop"} width={"16"} height={"15"} viewBox={"0 0 16 15"}></Icon>
                </StyledButton>
            )}


        </>
    );

};

const StyledButton = styled.button`
    background: rgba(0, 0, 0, 0.3);
    padding: 8px;

    position: fixed;
    right: 30px;
    bottom: 30px;
`

import React from 'react';
import {S} from "../footer/Footer_Styles"
import Icon from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";


const socialItemData = [
    {
        iconId: "instaSvg"
    },
    {
        iconId: "telegSvg"
    },
    {
        iconId: "vkSvg"
    },

    {
        iconId: "linkdSvg"
    }
]
export const Footer:React.FC = () => {
    return (
        <S.Footer>
            <FlexWrapper direction={"column"} align={"center"}>
                <S.Name>Michael</S.Name>
                <S.SocialList>
                    {socialItemData.map((social)=>{
                        return (
                            <S.SocialItems>
                                <S.SocialIconLink href={"#"}>
                                    <Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"} iconId={social.iconId}></Icon>
                                </S.SocialIconLink>
                            </S.SocialItems>
                        )
                    })}



                </S.SocialList>
                <S.Copyright>© 2024 Michael Dudik, All Rights Reserved.</S.Copyright>
            </FlexWrapper>

        </S.Footer>
    );
};


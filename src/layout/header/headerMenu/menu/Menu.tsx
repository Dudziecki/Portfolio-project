import React, {useState} from 'react';
import {S} from "../HeaderMenu_Styles"
// const Items = ["Home", "Skills", "Works", "Testimony", "Contacts"]
const Items=[
    {
        title:'Home',
        href:'home'
    },
    {
        title:'Skills',
        href:'skills'
    },
    {
        title:'Works',
        href:'works'
    },
    {
        title:'Testimony',
        href:'testimony'
    },
    {
        title:'Contacts',
        href:'contacts'
    }
]
interface MenuProps {
    closeMenu?: () => void;
}
export const Menu: React.FC<MenuProps> = ({closeMenu}) => {

    return (
        <ul>
            {Items.map((item, index) => {
                return <S.MenuItem key={index}>
                    <S.NavLink
                        to={item.href}
                        smooth={true}
                        activeClass="active"
                        spy={true}
                        onClick={closeMenu}
                    >
                        {item.title}
                        <S.Mask>
                            <span>{item.title}</span>
                        </S.Mask>
                        <S.Mask>
                            <span>{item.title}</span>
                        </S.Mask>
                    </S.NavLink>
                </S.MenuItem>

            })}

        </ul>
    );
};



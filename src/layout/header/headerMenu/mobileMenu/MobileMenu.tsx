import React, {useState} from 'react';
import {S} from "../HeaderMenu_Styles"
import {Menu} from "../menu/Menu";

export const MobileMenu:React.FC<{ menuItems: Array<string> }> = (props: { menuItems: Array<string> }) => {
    const[menuIsOpen,setMenuIsOpen] = useState(false);
    const onBurgerBtnClick=()=>{setMenuIsOpen(!menuIsOpen)}
    return (
        <S.MobileMenu>
            <S.BurgerMenu isOpened={menuIsOpen} onClick={onBurgerBtnClick}>
                <span></span>
            </S.BurgerMenu>
            <S.MobileMenuPopup isOpened={menuIsOpen} onClick={()=>{setMenuIsOpen(false)}}>
                <Menu menuItems={props.menuItems}/>
            </S.MobileMenuPopup>

        </S.MobileMenu>
    );
};




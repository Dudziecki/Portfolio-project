import React, {useState} from 'react';
import {S} from "../HeaderMenu_Styles"
import {Menu} from "../menu/Menu";

export const MobileMenu:React.FC = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    const onBurgerBtnClick = () => {
        setMenuIsOpen(!menuIsOpen);
    };

     const closeMenu = () => {
        setMenuIsOpen(false);
    };
    return (
        <S.MobileMenu>
            <S.BurgerMenu isOpened={menuIsOpen} onClick={onBurgerBtnClick}>
                <span></span>
            </S.BurgerMenu>
            <S.MobileMenuPopup isOpened={menuIsOpen} onClick={closeMenu}>
                <Menu closeMenu={closeMenu} />
            </S.MobileMenuPopup>

        </S.MobileMenu>
    );
};




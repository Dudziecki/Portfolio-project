import React from 'react';
import styled from "styled-components";
import {Link} from "../../../../components/Link";

export const TabMenu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledTabMenu>
            <ul>
                {props.menuItems.map((item,index) => {
                    return <List key={index}>
                        <Link href="#">{item}</Link>
                    </List>


                })}

            </ul>
        </StyledTabMenu>
    );
};
const StyledTabMenu = styled.nav`
   
    ul {
        display: flex;
        justify-content: space-between;
        //gap: 20px;
        max-width: 352px;
        width: 100%;
        margin:0 auto 40px;
        //border:1px solid red;
    }
    
   
`
const List = styled.li`
    
`


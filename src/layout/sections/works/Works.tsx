import React from 'react';
import {S} from "../works/Works_Styles"
import {SectionTitle} from "../../../components/SectionTitle";

import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import socialImg from "../../../assets/images/project-1.webp"
import timerImg from "../../../assets/images/project-2.webp"

import {TabMenu} from "./tabmenu/TabMenu";
import {Container} from "../../../styles/Container";

const workItems = ["All", "Landing Page", "React", "Spa"];
const workData =[
    {
        title:"Social Network",
        src:socialImg,
        text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."

    },
    {
        title:"Timer",
        src:timerImg,
        text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."

    },
];




export const Works:React.FC = () => {
    return (
        <S.Works>
            <Container>
                <SectionTitle>My works</SectionTitle>
                <TabMenu menuItems={workItems}/>
                <FlexWrapper justify={"space-between"} align={"flex-start"} wrap={"wrap"}>
                    {workData.map((w)=>{
                        return (
                            <Work title={w.title}
                                  text={w.text}
                                  src={w.src}/>
                        )
                    })}


                </FlexWrapper>
            </Container>

        </S.Works>
    );
};



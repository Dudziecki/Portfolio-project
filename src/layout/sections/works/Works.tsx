import React, {useState} from 'react';
import {S} from "../works/Works_Styles"
import {SectionTitle} from "../../../components/SectionTitle";

import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import socialImg from "../../../assets/images/project-1.webp"
import timerImg from "../../../assets/images/project-2.webp"

import {TabMenu, TabStatusType} from "./tabmenu/TabMenu";
import {Container} from "../../../styles/Container";

// const workItems = ["All", "Landing Page", "React", "Spa"];
const tabsItems: Array<{ status: TabStatusType, title: string }> = [
    {
        title: "All",
        status: "all"
    },
    {
        title: "Landing Page",
        status: "landing"
    },
    {
        title: "React",
        status: "react"
    },
    {
        title: "Spa",
        status: "spa"
    },
]
const worksData = [
    {
        title: "Social Network",
        src: socialImg,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        type: "spa"

    },
    {
        title: "Timer",
        src: timerImg,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        type: "react"

    },
];


export const Works: React.FC = () => {
    const [currentFilterStatus, setCurrentFilterStatus] = useState("all");
    let filteredWorks = worksData;
    if (currentFilterStatus === "landing") {
        filteredWorks = worksData.filter(work => work.type === "landing");
    }
    if (currentFilterStatus === "react") {
        filteredWorks = worksData.filter(work => work.type === "react");
    }
    if (currentFilterStatus === "spa") {
        filteredWorks = worksData.filter(work => work.type === "spa");
    }
    function changeFilterStatus(value:TabStatusType){
        setCurrentFilterStatus(value);
    }
    return (
        <S.Works>
            <Container>
                <SectionTitle>My works</SectionTitle>
                <TabMenu tabsItems={tabsItems} changeFilterStatus={changeFilterStatus}
                         currentFilterStatus={currentFilterStatus}/>
                <FlexWrapper justify={"space-between"} align={"flex-start"} wrap={"wrap"}>
                    {filteredWorks.map((w) => {
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



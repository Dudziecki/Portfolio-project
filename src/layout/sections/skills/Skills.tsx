import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {S} from "../skills/Skills_Styles";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";
import {Container} from "../../../styles/Container";

const skillData = [
    {
        iconId: "codeSvg",
        title: "Html5",
        description: "Lorem hghgh jgj jg jjg  gkk kgk kgf kkfk kkkdkddj"
    },
    {
        iconId: "cssSvg",
        title: "Css3",
        description:  "Lorem hghgh jgj jg jjg  gkk kgk kgf kkfk kkkdkddj"
    },
    {
        iconId: "reactSvg",
        title: "React",
        description: "Lorem hghgh jgj jg jjg  gkk kgk kgf kkfk kkkdkddj"
    },
    {
        iconId: "typesctiptSvg",
        title: "Typescript",
        description: "Lorem hghgh jgj jg jjg  gkk kgk kgf kkfk kkkdkddj"
    },
    {
        iconId: "styledComponentsSvg",
        title: "Styled Components",
        description:  "Lorem hghgh jgj jg jjg  gkk kgk kgf kkfk kkkdkddj"
    },
    {
        iconId: "figmaSvg",
        title: "Web Design",
        description:  "Lorem hghgh jgj jg jjg  gkk kgk kgf kkfk kkkdkddj"
    }
]
export const Skills = () => {
    return (
        <S.Skills>
            <Container>
                <SectionTitle>My Skills</SectionTitle>
                <FlexWrapper wrap={"wrap"} justify={"space-between"}>
                    {skillData.map((s,index)=>{
                        return (
                            <Skill iconId={s.iconId} key={index} title={s.title} description={s.description}/>
                        )
                    })}

                </FlexWrapper>
            </Container>


        </S.Skills>
    );
};



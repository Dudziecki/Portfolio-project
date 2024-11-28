import React from 'react';
import {S} from "../contact/Contacts_Styles"
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import {Container} from "../../../styles/Container";


export const Contact:React.FC = () => {
    return (
        <S.Contact id={'contacts'}>
            <Container>
                <SectionTitle>Contact</SectionTitle>
                <S.Form>
                    <S.Field placeholder={"Name"}/>
                    <S.Field placeholder={"Subject"}/>
                    <S.Field placeholder={"Message"} as={"textarea"}/>
                    <Button type={"submit"}>Send Message</Button>
                </S.Form>
            </Container>


        </S.Contact>
    );
};


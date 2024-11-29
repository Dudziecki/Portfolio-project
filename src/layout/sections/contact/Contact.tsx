import React, {ElementRef, useRef} from 'react';
import {S} from "../contact/Contacts_Styles"
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import {Container} from "../../../styles/Container";
import emailjs from '@emailjs/browser';


export const Contact:React.FC = () => {
    const form = useRef<ElementRef<'form'>>(null);

    const sendEmail = (e: any) => {
        e.preventDefault();
        if (!form.current) return
        emailjs
            .sendForm('service_0jqzslj', 'template_uf2dn3y', form.current, {
                publicKey: 'ZjRr3DV0f42Fk6yH-',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },

            );
        e.target.reset()
    };
        return (
            <S.Contact id={'contacts'}>
                <Container>
                    <SectionTitle>Contact</SectionTitle>
                    <S.Form ref={form} onSubmit={sendEmail}>
                        <S.Field required={true} placeholder={"Name"} name={"user_name"}/>
                        <S.Field required={true} placeholder={"Email"} name={"user_email"}/>
                        <S.Field required={true} placeholder={"Subject"} name={"subject"} />
                            <S.Field required={true} placeholder={"Message"} as={"textarea"} name={"message"} />
                            <Button type={"submit"}>Send Message</Button>
                    </S.Form>
                </Container>


            </S.Contact>
    );

    }


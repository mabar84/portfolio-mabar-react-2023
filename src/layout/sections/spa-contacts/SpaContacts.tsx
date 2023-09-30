import React, {ElementRef, useRef} from 'react';
import styled from "styled-components";
import {H2, H2Colored} from "../../../components/h2/H2";
import {StyledSectionText} from "../../../components/StyledSectionText";
import {myTheme} from "../../../styles/Theme.styled";
import emailjs from '@emailjs/browser';

export const SpaContacts = () => {

    const form = useRef<ElementRef<'form'>>(null);

    const sendEmail = (e: any) => {
        e.preventDefault();

        if (!form.current) return

        emailjs.sendForm('service_tnj302b', 'template_lmerh7m', form.current, 'UMFVQEPDFXFggvlM3')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            })

        e.target.reset()
    }

    return (
        <StyledSpaContacts className={'container'} id={'contacts'}>
            <H2 content={'For any questions please mail me:'}/>
            <a className={'email'} href="mailto:mabar@mabar.ru">
                <H2Colored coloredContent={'mabar@mabar.ru'}/>
            </a>

            <StyledSectionText>
                or my telegram
                <strong>
                    <a href="https://tele.click/@mabartutby"> @mabartutby </a>
                </strong>
                or my
                <strong>
                    <a href="https://www.linkedin.com/in/%D0%BC%D0%B8%D1%85%D0%B0%D0%B8%D0%BB-%D0%B1%D0%B0%D1%80%D0%B0%D0%BD%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9-8121ab287/"> LinkedIn </a>

                </strong>
            </StyledSectionText>
            <StyledSectionText>

            </StyledSectionText>
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" className="input modal__input" placeholder="Your Full Name*" name="name" required/>
                <input type="email" className="input modal__input" placeholder="Email*" name="email" required/>
                <textarea className="message modal__message" placeholder="Message" name="message" required></textarea>
                <button className="button modal__button" type="submit">Отправить</button>
            </form>
        </StyledSpaContacts>
    );
};
const StyledSpaContacts = styled.section`
  H2 {
    text-align: center;
  }

  .email {
    width: max-content;
    margin: 0 auto 38px;
    display: block;
  }

  a {
    transition: color 0.3s;

    &:hover {
      color: ${myTheme.colors.gradientTo};
    }
  }

  p {
    text-align: center;
  }

`
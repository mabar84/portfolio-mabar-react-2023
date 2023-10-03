import React, {ElementRef, useRef} from 'react';
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import {myTheme} from "../../styles/Theme.styled";

export const Form = () => {

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
        <StyledForm ref={form} onSubmit={sendEmail}>
            <input type="text" className="input modal__input" placeholder="Your Full Name*" name="name" required/>
            <input type="email" className="input modal__input" placeholder="Email*" name="email" required/>
            <textarea className="message modal__message" placeholder="Message*" name="message" required></textarea>
            <button className="button modal__button" type="submit">Send</button>
        </StyledForm>
    );
};

const StyledForm = styled.form`
  max-width: 700px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 10px;

  input {
    padding: 5px;
    border-radius: 5px;
    font-size: 14px;
    color: black;
    font-weight: 500;
    font-family: sans-serif;
    border: none;

    &::placeholder {
      font-size: 14px;
      color: gray;
      font-weight: 500;
      font-family: sans-serif;
    }
  }

  textarea {
    height: 100px;
    resize: none;
    padding: 5px;
    border-radius: 5px;
    font-size: 14px;
    color: black;
    font-weight: 500;
    font-family: sans-serif;
    border: none;

    &::placeholder {
      font-size: 14px;
      color: gray;
      font-weight: 500;
      font-family: sans-serif;
    }
  }

  button {
    padding: 5px 10px;
    margin: 0 auto 5px;
    max-width: 100px;
    cursor: pointer;
    border-radius: 5px;
    font-size: 14px;
    color: gray;
    font-weight: 500;
    font-family: sans-serif;
    transition: 0.3s;
    background-color: ${myTheme.colors.title};
    border: none;

    &:hover {
      color: ${myTheme.colors.gradientTo};

    }
  }

`

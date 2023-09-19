import React from 'react';
import styled from "styled-components";
import {H2, H2Colored} from "../../../components/h2/H2";
import {StyledSectionText} from "../../../components/StyledSectionText";
import {myTheme} from "../../../styles/Theme.styled";

export const SpaContacts = () => {
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
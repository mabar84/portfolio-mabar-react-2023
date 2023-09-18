import React from 'react';
import styled from "styled-components";
import {H2, H2Colored} from "../../../components/h2/H2";

export const SpaContacts = () => {
    return (
        <StyledSpaContacts className={'container'}>
            <H2 content={'For any questions please mail me:'}/>
            <H2Colored coloredContent={'mabar@mabar.ru'}/>
        </StyledSpaContacts>
    );
};
const StyledSpaContacts = styled.section`
  H2 {
    text-align: center;
  }
`

//
//     <form className="subscription__form form" action="send.php" method="POST">
//     <input type="email" className="subscription__input" placeholder="Email" name="email" required>
// <button className="button subscription__button">Подписаться</button>
// </form>
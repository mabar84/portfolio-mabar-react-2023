import React from 'react';
import {MainPhoto} from "./main-photo/MainPhoto";
import {H2, H2Colored} from "../../../components/h2/H2";
import {StyledH1} from "../../../components/h1/H1";
import styled from "styled-components";
import {myTheme} from "../../../styles/Theme.styled";


export const SpaMain = () => {
    return (
        <StyledMainContainer className={'container'}>
            <div>
                <H2Colored content={'👋,'} coloredContent={'Hi'}/>
                <H2 content={'My name is'}/>
                <H2 content={'Mikhail Baranouski'}/>

                <StyledH1> I'm a Web Developer </StyledH1>
            </div>

            <MainPhoto/>
        </StyledMainContainer>
    )
};

const StyledMainContainer = styled.section`
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: space-between;

  ${myTheme.media.less1080} {
    flex-direction: column;
    align-items: start;
  }
`

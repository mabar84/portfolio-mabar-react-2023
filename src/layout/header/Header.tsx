import React from "react";
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Nav} from "../../components/menu/Nav";
import {myTheme} from "../../styles/Theme.styled";
import {SocialMedia} from "../../components/social-media/SocialMedia";

export const Header = () => {
    return (
        <StyledHeader className={'container'}>
            <Logo/>
            <Nav/>
            <SocialMedia/>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  padding: 10px 0;
  display: flex;
  justify-content: end;
  gap: 50px;
  background-color: ${myTheme.colors.background};

  &.container {
    margin-bottom: 80px;

    ${myTheme.media.less1080} {
      gap: 15px;
      justify-content: space-between;
    }

    ${myTheme.media.less640} {
      flex-direction: column;
      gap: 0;
      margin-bottom: 30px;
    }
  }



`;

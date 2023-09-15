import React from "react";
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Nav} from "../../components/menu/Nav";
import {myTheme} from "../../styles/Theme.styled";
import {StyledFlexWrapper} from "../../components/StyledFlexWrapper";
import {SocialMedia} from "../../components/social-media/SocialMedia";

export const Header = () => {
    return (
        <StyledHeader>
            <StyledFlexWrapper className={'container'} gap={'50px'} justify={'end'}>
                <Logo/>
                <Nav/>
                <SocialMedia/>
            </StyledFlexWrapper>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  padding: 10px 0;
  margin-bottom: 80px;
  background-color: ${myTheme.colors.background};
`;

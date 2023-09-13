import React from "react";
import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Nav } from "../../components/menu/Nav";

export const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <Nav />
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: #9b4242;
  display: flex;
`;

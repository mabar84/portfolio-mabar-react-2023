import React from "react";
import styled from "styled-components";

export const Nav = () => {
    return (
        <StyledNav>
            <ul>
                <li>
                    <a href="src/components/menu/Nav#">Home</a>
                </li>
                <li>
                    <a href="src/components/menu/Nav#">About</a>
                </li>
                <li>
                    <a href="src/components/menu/Nav#">Tech Stack</a>
                </li>
                <li>
                    <a href="src/components/menu/Nav#">Projects</a>
                </li>
                <li>
                    <a href="src/components/menu/Nav#">Contact</a>
                </li>
            </ul>
        </StyledNav>
    );
};

const StyledNav = styled.nav`
  ul {
    display: flex;

    li {
    }

  }
`;

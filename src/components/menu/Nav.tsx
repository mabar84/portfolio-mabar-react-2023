import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

export const Nav = () => {
    return (
        <StyledNav>
            <ul>

                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
                <li>
                    <a href="/skills">Tech Stack</a>
                </li>
                <li>
                    <a href="/projects">Projects</a>
                </li>
                <li>
                    <a href="/contacts">Contact</a>
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

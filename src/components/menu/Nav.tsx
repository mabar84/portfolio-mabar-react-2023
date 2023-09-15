import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {myTheme} from "../../styles/Theme.styled";
import {Icon} from "../icon/Icon";
import {SocialMedia} from "../social-media/SocialMedia";

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
    gap: 50px;
    height: 100%;
    align-items: center;
    color: ${myTheme.colors.text};

    li {
      text-align: center;
      font-size: 20px;
      font-style: normal;
      font-weight: 500;
      line-height: 26px;
      display: flex;
      align-items: center;

      a {
        transition: color 0.3s;

        &:hover {
          color: ${myTheme.colors.gradientTo};
        }
      }
    }
  }
`;

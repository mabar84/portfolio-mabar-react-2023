import React from "react";
import styled from "styled-components";
import {myTheme} from "../../styles/Theme.styled";
import {Link} from "react-router-dom";

export const Nav = () => {
    return (
        <StyledNav>
            <ul>
                {myTheme.state.navItems.map((el, ind) => {
                    return <li key={ind}>
                        <Link to={el[1]}>{el[0]}</Link>
                    </li>
                })}
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
      white-space: nowrap;

      ${myTheme.media.less700} {
        font-size: 16px;
      }

      a {
        transition: color 0.3s;

        &:hover {
          color: ${myTheme.colors.gradientTo};
        }
      }
    }

    ${myTheme.media.less1080} {
      gap: 15px;
    }

    ${myTheme.media.less700} {
      justify-content: start;
      flex-wrap: nowrap;
      overflow: auto;
      gap: 10px;
    }
  }
`;

import React from "react";
import {Icon} from "../icon/Icon";
import styled from "styled-components";
import {myTheme} from "../../styles/Theme.styled";

export const Logo = () => {
    return (
        <StyledLogo href="/">
            <Icon iconId={'logo'} width={'105'} height={'105'} viewBox={'0 0 105 105'}/>
        </StyledLogo>

    );
};

const StyledLogo = styled.a`
  margin-right: auto;
  margin-left: 3px;

  svg {
    fill: white;
    stroke: black;
    transition: fill 1s, stroke 1s;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:hover {
    svg {
      fill: ${myTheme.colors.gradientFrom};
      stroke: rgba(231, 15, 170, 0.76);
    }
  }

  ${myTheme.media.less1080} {
    display: none;
  }
`
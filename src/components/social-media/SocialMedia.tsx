import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {myTheme} from "../../styles/Theme.styled";
import {Icon} from "../icon/Icon";

export const SocialMedia = () => {
    return (
        <StyledSocialMedia>

            <li>
                <a href="https://github.com/mabar84">
                    <Icon iconId={'soc-git'} viewBox={'0 0 50 50'} width={'48'} height={'48'}/>

                </a>
            </li>
            <li>
                <a href="https://tele.click/@mabartutby">
                    <Icon iconId={'soc-telegram'} viewBox={'0 0 50 50'} width={'48'} height={'48'}/>
                </a>
            </li>
            <li>
                <a href="#">
                    <Icon iconId={'soc-linkedin'} viewBox={'0 0 50 50'} width={'48'} height={'48'}/>
                </a>
            </li>

        </StyledSocialMedia>
    );
};

const StyledSocialMedia = styled.ul`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  color: ${myTheme.colors.text};

  li {
    a {
      &:hover {
        svg {
          fill: ${myTheme.colors.gradientTo};
        }
      }

      svg {
        margin-top: 10px;
        fill: #666666;
        transition: fill 0.3s;
      }
    }
  }
`;

import React from "react";
import styled from "styled-components";
import {myTheme} from "../../styles/Theme.styled";
import {Icon} from "../icon/Icon";

export const SocialMedia = () => {
    return (
        <StyledSocialMedia>
            {myTheme.state.socialMediaItems.map((el, ind) => {
                return <li key={ind}>
                    <a href={el.href}>
                        <Icon iconId={el.iconId} viewBox={'0 0 50 50'} width={'48'} height={'48'}/>
                    </a>
                </li>
            })}
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

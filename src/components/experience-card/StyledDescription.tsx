import styled, {css} from "styled-components";
import {myTheme} from "../../styles/Theme.styled";

type StyledDescriptionPropsType = {
    showPlace?: boolean
}

export const StyledDescription = styled.span<StyledDescriptionPropsType>`
  ${props => props.showPlace && css`
    width: 200px;`}

  display: inline-block;
  color: ${myTheme.colors.description};
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
`
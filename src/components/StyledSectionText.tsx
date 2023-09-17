import styled from "styled-components";
import {myTheme} from "../styles/Theme.styled";

export const StyledSectionText = styled.p`
  margin-bottom: 38px;
  color: ${myTheme.colors.text};
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 144%;

  ${myTheme.media.less1080} {
    margin-bottom: 20px;
    font-size: 16px;
  }
`
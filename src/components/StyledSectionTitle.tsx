import styled from "styled-components";
import {myTheme} from "../styles/Theme.styled";

export const StyledSectionTitle = styled.h3`
  margin-bottom: 38px;
  color: ${myTheme.colors.title};
  font-size: 42px;
  font-style: normal;
  font-weight: 700;
  line-height: 124%;
  letter-spacing: -0.4px;

  ${myTheme.media.less1080} {
    font-size: 30px;
    margin-bottom: 15px;
  }
`
import styled from "styled-components";
import {myTheme} from "../../styles/Theme.styled";

export const StyledLabel = styled.p`
  min-width: 84px;
  width: max-content;
  max-width: 200px;
  padding: 6px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  background: #666666;
  color: ${myTheme.colors.title};
  text-align: center;
  font-size: 9px;
  font-style: normal;
  font-weight: 600;
  line-height: 12px;
`
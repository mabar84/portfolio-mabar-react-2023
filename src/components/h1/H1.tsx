import React from 'react';
import styled from "styled-components";
import {myTheme} from "../../styles/Theme.styled";

// export const H1 = (props: { content: string }) => {
//     return (
//         <StyledH1>
//             {props.content}
//         </StyledH1>
//     );
// };

export const StyledH1 = styled.h1`
  color: ${myTheme.colors.title};
  font-family: Poppins;
  font-size: 58px;
  font-style: normal;
  font-weight: 700;
  line-height: 70px;
  letter-spacing: -1px;
}
`
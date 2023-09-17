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
  //font-size: 58px;
  font-size: calc(32px + 16 * ((100vw - 320px) / (1280 - 320)));
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  letter-spacing: -1px;
}
`
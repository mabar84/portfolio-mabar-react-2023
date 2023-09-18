import React from 'react';
import styled from "styled-components";
import {myTheme} from "../../styles/Theme.styled";

export const H2 = (props: { content: string }) => {
    return (
        <StyledH2>
            {props.content}
        </StyledH2>
    );
};

export const H2Colored = (props: { content?: string, coloredContent: string }) => {
    return (
        <StyledH2>
            <span>
            {props.coloredContent}
            </span>
            {props.content}
        </StyledH2>
    );
};

const StyledH2 = styled.h2`
  color: ${myTheme.colors.title};
  //font-size: 58px;
  font-size: calc(32px + 16 * ((100vw - 320px) / (1280 - 320)));
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  letter-spacing: -1px;

  span {
    font-weight: 900;
    background: -webkit-linear-gradient(135deg, #a855f7, rgba(233, 14, 138, 0.91));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
`
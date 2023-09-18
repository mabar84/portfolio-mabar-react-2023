import React from 'react';
import styled from "styled-components";
import mainPhoto from "../../../../assets/images/my-photo.jpg";
import {myTheme} from "../../../../styles/Theme.styled";

export const MainPhoto = () => {
    return (
        <StyledMainPhoto>
            <div className={'bg'}></div>

            <img src={mainPhoto} alt={'me'}/>
        </StyledMainPhoto>
    );
};

const StyledMainPhoto = styled.div`
  width: 349px;
  height: 349px;
  border-radius: 50%;
  position: relative;
  flex-shrink: 0;

  ${myTheme.media.less640} {
    width: 320px;
    height: 320px;
  }

  .bg {
    width: 100%;
    height: 100%;
    border: 10px solid transparent;
    border-radius: 50%;
    transition: transform 2s;
    background: linear-gradient(0deg, ${myTheme.colors.gradientFrom}, ${myTheme.colors.gradientTo}) border-box;
  }

  &:active .bg, &:hover .bg {
    transform: rotate(270deg);
  }

  img {
    width: calc(100% - 20px);
    height: calc(100% - 20px);
    border-radius: 50%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    object-fit: cover;
  }

  ${myTheme.media.less1080} {
    margin: 0 auto;
  }
`
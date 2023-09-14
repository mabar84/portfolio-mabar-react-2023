import React from 'react';
import styled from "styled-components";
import mainPhoto from "../../../assets/images/my-photo.jpg";


export const SpaMain = () => {
    return (
        <StyledMainPhoto>
            SpaMain
            <div className=""></div>
            <img src={mainPhoto} alt="photo"/>
        </StyledMainPhoto>

    );
};

const StyledMainPhoto = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;

  position: relative;

  div {
    width: 100%;
    height: 100%;
    border: 10px solid transparent;
    border-radius: 50%;
    transition: transform 2s;

    background: linear-gradient(0deg, #00C0FD, #E70FAA) border-box;
  }

  &:hover div {
    transform: rotate(180deg);
  }


  img {
    width: calc(100% - 20px);
    height: calc(100% - 20px);
    border-radius: 50%;
    position: absolute;
    left: calc(50% - 0px);
    top: calc(50% + 20px);
    transform: translate(-50%, -50%);


  }

  //-webkit-mask: linear-gradient(#fff 0 0) padding-box,
  //linear-gradient(#fff 0 0);
  //-webkit-mask-composite: xor;
  //mask-composite: exclude;
`


//#E70FAA, #00C0FD
import React from 'react';
import styled from "styled-components";
import mainPhoto from "../../../assets/images/my-photo.jpg";


export const Main = () => {
    return (
        <StyledMainPhoto>
            <img src={mainPhoto} alt="photo"/>
        </StyledMainPhoto>

    );
};

const StyledMainPhoto = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  border: 10px solid transparent;
  background: linear-gradient(0deg, #00C0FD, #E70FAA) border-box;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);


  }

  //-webkit-mask: linear-gradient(#fff 0 0) padding-box,
  //linear-gradient(#fff 0 0);
  //-webkit-mask-composite: xor;
  //mask-composite: exclude;
`


//#E70FAA, #00C0FD
import React from 'react';
import styled from "styled-components";
import {myTheme} from "../../styles/Theme.styled";

type SliderPropsType = {
    content: string[]
}

export const Slider = (props: SliderPropsType) => {
    return (
        <StyledSlider>
            {/*{props.content.map((el, ind) => {*/}
            {/*    return <img key={ind} src={require(`./../../assets/images/${el.toLowerCase()}.png`)}*/}
            {/*                title={el} alt={el}/>*/}
            {/*})}*/}
            <div className="slide-track">
                {props.content.map((el, ind) => {
                    return <img key={ind} src={require(`./../../assets/images/${el.toLowerCase()}.png`)}
                                title={el} alt={el}/>
                })}
                {props.content.map((el, ind) => {
                    return <img key={ind} src={require(`./../../assets/images/${el.toLowerCase()}.png`)}
                                title={el} alt={el}/>
                })}
            </div>

        </StyledSlider>
    );
};

const StyledSlider = styled.div`

  @-webkit-keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-250px * 7));
    }
  }
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-250px * 7));
    }
  }

  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.125);
  height: 100px;
  margin: 0 auto 38px;
  overflow: hidden;
  position: relative;
  width: 1180px;

  &:before, &:after {
    background: linear-gradient(to right, ${myTheme.colors.background} 0%, rgba(19, 19, 19, 0) 100%);
    content: "";
    height: 100px;
    position: absolute;
    width: 200px;
    z-index: 2;
  }

  &::after {
    right: 0;
    top: 0;
    transform: rotateZ(180deg);
  }

  &::before {
    left: 0;
    top: 0;
  }

  .slide-track {
    -webkit-animation: scroll 40s linear infinite;
    animation: scroll 40s linear infinite;
    display: flex;
    width: calc(250px * 14);
  }

  img {
    height: 100px;
    width: 100px;
    margin-right: 50px;
    margin-left: 50px;
    object-fit: cover;
  }
`
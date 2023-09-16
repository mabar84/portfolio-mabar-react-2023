import React from 'react';
import styled, {css} from "styled-components";
import {myTheme} from "../../styles/Theme.styled";

type SliderPropsType = {
    content: string[],
    reverse?: boolean
}

export const Slider = (props: SliderPropsType) => {
    return (
        <StyledSlider reverse={props.reverse}>
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

const StyledSlider = styled.div<{ reverse?: boolean }>`

  @-webkit-keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-250px * 7));
    }
  };
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-250px * 7));
    }
  }

  .slide-track {
    -webkit-animation: scroll 40s linear infinite;
    animation: scroll 40s linear infinite;
    display: flex;
    width: calc(250px * 14);
  }

  ${props => props.reverse && css`
    @-webkit-keyframes scroll-reverse {
      0% {
        transform: translateX(calc(-250px * 7));
      }
      100% {
        transform: translateX(0);
      }
    }
    @keyframes scroll-reverse {
      0% {
        transform: translateX(calc(-250px * 7));
      }
      100% {
        transform: translateX(0);
      }
    }

    .slide-track {
      -webkit-animation: scroll-reverse 40s linear infinite;
      animation: scroll-reverse 40s linear infinite;
      display: flex;
      width: calc(250px * 14);
    }
  `}
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


  img {
    height: 100px;
    width: 100px;
    margin-right: 50px;
    margin-left: 50px;
    object-fit: cover;
  }
`
import React from 'react';
import styled from "styled-components";

type SliderPropsType = {
    content: string[]
}

export const Slider = (props: SliderPropsType) => {
    return (
        <StyledSlider>
            {props.content.map((el, ind) => {
                return <img key={ind} src={require(`./../../assets/images/${el.toLowerCase()}.png`)}
                            title={el} alt={el}/>
            })}
        </StyledSlider>
    );
};

const StyledSlider = styled.div`
  margin-bottom: 38px;

  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
  }
`
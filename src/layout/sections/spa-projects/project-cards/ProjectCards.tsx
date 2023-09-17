import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon";
import {myTheme} from "../../../../styles/Theme.styled";

export const ProjectCards = () => {
    return (
        <StyledProjectCards>
            {myTheme.state.projectsCards.map((el, ind) => {
                return <StyledProjectCard key={ind} title={el.name}>
                    <div>
                        <img src={require(`./../../../../assets/projects-images/${el.name}.jpg`)}
                             alt={el.name}/>
                        <StyledProjectCardTitle>
                            {el.title}
                        </StyledProjectCardTitle>
                        <StyledProjectCardText>
                            {el.text}
                        </StyledProjectCardText>
                    </div>

                    <a target={"_blank"} rel={'noreferrer'} href={el.link}>
                        <Icon iconId={'project-card-link-icon'} width={'20'} height={'20'} viewBox={'0 0 20 20'}/>
                        Live Preview
                    </a>
                </StyledProjectCard>
            })}
        </StyledProjectCards>
    );
};

const StyledProjectCards = styled.div`
  display: flex;
  row-gap: 62px;
  column-gap: 34px;
  overflow: visible;
  flex-wrap: wrap;
`
const StyledProjectCard = styled.div`
  width: 373px;
  border-radius: 20px;
  background: #363636;
  overflow: hidden;
  padding-bottom: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover a {
    color: ${myTheme.colors.gradientTo};
  }

  img {
    height: 260px;
    object-fit: cover;
    transition: transform 2s;
  }

  a {
    width: max-content;
    margin-left: 29px;
    color: #FFF;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
    text-decoration-line: underline;
    display: flex;
    gap: 10px;
    align-items: center;
    transition: color 0.3s;

    svg {
      margin-bottom: -5px;
      stroke: currentColor;
      fill: transparent;
    }

    &:hover {
      color: ${myTheme.colors.gradientTo};
    }
  }

  &:hover img {
    transform: scale(1.10);
  }
`
const StyledProjectCardTitle = styled.h4`
  padding: 27px 29px 17px;
  color: #CCC;
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 93%;
`
const StyledProjectCardText = styled.p`
  padding: 0 29px 12px;
  color: #CCC;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: 144%;
`
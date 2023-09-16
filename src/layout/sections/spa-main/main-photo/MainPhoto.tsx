import React from 'react';
import styled from "styled-components";
import mainPhoto from "../../../../assets/images/my-photo.jpg";
import abstract from "../../../../assets/images/abstract.svg";
import {myTheme} from "../../../../styles/Theme.styled";
import {Icon} from "../../../../components/icon/Icon";
import iconsSprite from "../../../../assets/images/icons-sprite.svg";


export const MainPhoto = () => {
    let name = 'my'
    return (
        <StyledMainPhoto>
            <div className=""></div>
            <img className="profile-photo" src={require(`./../../../../assets/images/${name}-photo.jpg`)}
                 alt={name}/>
            {/*<img src={mainPhoto}/>*/}

            {/*<Icon iconId={'abstract'} height={'444'} width={'444'} viewBox={'0 0 444 444'}/>*/}
        </StyledMainPhoto>

    );
};

const StyledMainPhoto = styled.div`
  width: 349px;
  height: 349px;
  border-radius: 50%;
  position: relative;

  //svg {
  //  stroke: #fff;
  //  transform: rotate(180deg);
  //}

  div {
    width: 100%;
    height: 100%;
    border: 10px solid transparent;
    border-radius: 50%;
    transition: transform 2s;
    background: linear-gradient(0deg, ${myTheme.colors.gradientFrom}, ${myTheme.colors.gradientTo}) border-box;
  }

  &:hover div {
    transform: rotate(180deg);
  }

  img {
    width: calc(100% - 20px);
    height: calc(100% - 20px);
    border-radius: 50%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`
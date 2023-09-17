import styled from "styled-components";
import {myTheme} from "../../styles/Theme.styled";
import {StyledLabel} from "./StyledLabel";
import {Icon} from "../icon/Icon";
import {StyledDescription} from "./StyledDescription";

export const ExperienceCard = ({title, organisation, place, date, label, showPlace}: ExperienceCardPropsType) => {
    return (
        <StyledExperienceCard>

            <div className="flex-wrapper">
                <h4>
                    {title}
                </h4>
                <StyledLabel>
                    {label ? label : 'Full Time'}
                </StyledLabel>
            </div>
            <div className="flex-wrapper">
                <div className="left">
                    <Icon viewBox={'0 0 16 12'} width={'16px'} height={'12px'} iconId={'building'}/>
                    <StyledDescription showPlace>
                        {organisation}
                    </StyledDescription>

                    {showPlace && <>
                        <Icon viewBox={'0 0 16 12'} width={'16px'} height={'12px'} iconId={'location'}/>
                        <StyledDescription>
                            {place ? place : 'From home'}
                        </StyledDescription>
                    </>}


                </div>
                <div className="right">
                    <Icon viewBox={'0 0 16 12'} width={'16px'} height={'12px'} iconId={'calendar'}/>
                    <StyledDescription>
                        {date}
                    </StyledDescription>

                </div>
            </div>


        </StyledExperienceCard>
    )
}

type ExperienceCardPropsType = {
    title: string,
    organisation: string,
    place?: string,
    date: string,
    label?: string,
    showPlace?: boolean
}

const StyledExperienceCard = styled.div`
  padding-bottom: 24px;
  border-bottom: 2px solid ${myTheme.colors.description};
  margin-bottom: 38px;


  h4 {
    color: ${myTheme.colors.text};
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    letter-spacing: 1px;

    ${myTheme.media.less1080} {
      font-size: 18px;
    }
  }

  .flex-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 4px;

    .left {
      display: flex;
      align-items: center;
      gap: 4px;


    }

    .right {
      display: flex;
      align-items: center;
      gap: 4px;


    }
  }
`
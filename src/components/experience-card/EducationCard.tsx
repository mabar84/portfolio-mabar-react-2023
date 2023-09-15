import styled from "styled-components";
import {myTheme} from "../../styles/Theme.styled";
import {StyledLabel} from "./StyledLabel";
import {Icon} from "../icon/Icon";
import {StyledDescription} from "./StyledDescription";

type EducationCardPropsType = {
    title: string,
    organisation: string,
    date: string,
    label?: string
}

export const EducationCard = ({title, organisation, date, label}: EducationCardPropsType) => {
    return (
        <StyledEducationCard>
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
                    <StyledDescription>
                        {organisation}
                    </StyledDescription>
                </div>
                <div className="right">
                    <Icon viewBox={'0 0 16 12'} width={'16px'} height={'12px'} iconId={'calendar'}/>
                    <StyledDescription>
                        {date}
                    </StyledDescription>

                </div>
            </div>


        </StyledEducationCard>
    )
}

const StyledEducationCard = styled.div`
  padding-bottom: 24px;
  border-bottom: 2px solid ${myTheme.colors.description};
  margin-bottom: 38px;

  h4 {
    color: ${myTheme.colors.text};
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 1px;
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

      span {
        width: auto;
      }
    }

    .right {
      display: flex;
      align-items: center;
      gap: 4px;

      span {
        width: auto;
      }
    }
  }
`
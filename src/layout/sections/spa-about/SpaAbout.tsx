import React from 'react';
import styled from "styled-components";
import {StyledSectionTitle} from "../../../components/StyledSectionTitle";
import {StyledSectionContainer} from "../../../components/SectionContainer";
import {StyledSectionText} from "../../../components/StyledSectionText";
import {ExperienceCard} from "../../../components/experience-card/ExperienceCard";
import {myTheme} from "../../../styles/Theme.styled";

export const SpaAbout = () => {
    return (
        <StyledSpaAbout className={'container'}>
            <StyledSectionTitle>
                About Me
            </StyledSectionTitle>
            <StyledSectionText>
                I have been interested in modern technologies all my life and working on a computer almost every day
                for almost a quarter of a century. Since February 2021, web development has become my main
                profession.
            </StyledSectionText>
            <StyledSectionTitle>
                Work Experience
            </StyledSectionTitle>

            {myTheme.state.experienceCards.map((el, ind) => {
                return <ExperienceCard key={ind} title={el.title} organisation={el.organisation} date={el.date}
                                       place={el.place} showPlace={el.showPlace} label={el.label}/>
            })}

            <StyledSectionTitle>
                Education
            </StyledSectionTitle>

            {myTheme.state.educationCards.map((el, ind) => {
                return <ExperienceCard key={ind} title={el.title} organisation={el.organisation} date={el.date}
                                       place={el.place} showPlace={el.showPlace} label={el.label}/>
            })}
        </StyledSpaAbout>
    );
};

const StyledSpaAbout = styled.section`
  max-width: 700px;
`
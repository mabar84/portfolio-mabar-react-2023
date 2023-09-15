import React from 'react';
import styled from "styled-components";
import {StyledSectionTitle} from "../../../components/StyledSectionTitle";
import {StyledSectionContainer} from "../../../components/SectionContainer";
import {StyledSectionText} from "../../../components/StyledSectionText";
import {ExperienceCard} from "../../../components/experience-card/ExperienceCard";
import {EducationCard} from "../../../components/experience-card/EducationCard";

export const SpaAbout = () => {
    return (
        <StyledSectionContainer>
            <StyledSpaAbout>
                <StyledSectionTitle>
                    About Me
                </StyledSectionTitle>
                <StyledSectionText>
                    I have been interested in modern technologies all my life and working on a computer almost every day
                    for
                    almost a quarter of a century. Since February 2021, web development has become my main profession.
                </StyledSectionText>
                <StyledSectionTitle>
                    Work Experience
                </StyledSectionTitle>

                <ExperienceCard title={'layout designer'} organisation={'1'} place={'2'} date={'3'}/>
                <ExperienceCard title={'layout designer'} organisation={'1'} place={'2'} date={'3'}/>
                <ExperienceCard title={'layout designer'} organisation={'1'} place={'2'} date={'3'}/>

                <StyledSectionTitle>
                    Education
                </StyledSectionTitle>

                <EducationCard title={'Manager-economist'}
                               organisation={'Belarusian State University'} date={'2004-2008'}
                />
                <EducationCard title={'Teacher of mathematics and computer science'}
                               organisation={'Mozyr State Pedagogical University'} date={'2001-2006'}
                               label={'In absentia'}/>


            </StyledSpaAbout>
        </StyledSectionContainer>
    );
};

const StyledSpaAbout = styled.div`
  max-width: 700px;
`
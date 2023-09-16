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
                {/*<a href={'https://saharok.info/'}>https://saharok.info/</a>*/}
                <ExperienceCard title={'Web developer'} organisation={'Local Internet'} date={'Apr 2023 - Jul 2023'}
                                label={'Project employment'}
                />
                <ExperienceCard title={`Layout designer`} organisation={'Design laboratory'}
                                label={'Project employment'} date={'Dec 2021 - Jan 2023'}/>
                <ExperienceCard title={'Web developer'} organisation={'Freelance'}
                                date={'Jun 2023 - present'}/>


                <StyledSectionTitle>
                    Education
                </StyledSectionTitle>

                <EducationCard title={'Manager-economist'}
                               organisation={'Belarusian State University'} date={' 2004 - 2008 '} label={'In absentia'}
                />
                <EducationCard title={'Teacher of mathematics and computer science'}
                               organisation={'Mozyr State Pedagogical University'} date={' 2001 - 2006 '}
                />


            </StyledSpaAbout>
        </StyledSectionContainer>
    );
};

const StyledSpaAbout = styled.div`
  max-width: 700px;
`
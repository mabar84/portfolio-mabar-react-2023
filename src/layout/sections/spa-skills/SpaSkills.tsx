import React from 'react';
import styled from "styled-components";
import {StyledSectionTitle} from "../../../components/StyledSectionTitle";
import {StyledSectionText} from "../../../components/StyledSectionText";
import {Slider} from "../../../components/Slider/Slider";
import {myTheme} from "../../../styles/Theme.styled";

export const SpaSkills = () => {
    return (
        <StyledSpaSkills className={'container'} id={'skills'}>
            <StyledSectionTitle>
                My Tech Stack
            </StyledSectionTitle>
            <StyledSectionText>
                Technologies I’ve been working with recently
            </StyledSectionText>
            <Slider content={myTheme.state.skills}/>
            <StyledSectionText>
                And my preferred tools
            </StyledSectionText>
            <Slider reverse content={myTheme.state.tools}/>

        </StyledSpaSkills>
    );
};

const StyledSpaSkills = styled.section`


`
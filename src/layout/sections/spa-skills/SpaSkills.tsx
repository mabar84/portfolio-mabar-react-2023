import React from 'react';
import styled from "styled-components";
import {StyledSectionTitle} from "../../../components/StyledSectionTitle";
import {StyledSectionContainer} from "../../../components/SectionContainer";
import {StyledSectionText} from "../../../components/StyledSectionText";
import {Slider} from "../../../components/Slider/Slider";
import {myTheme} from "../../../styles/Theme.styled";

export const SpaSkills = () => {
    return (
        <StyledSectionContainer>
            <StyledSectionTitle>
                My Tech Stack
            </StyledSectionTitle>
            <StyledSectionText>
                Technologies I’ve been working with recently
            </StyledSectionText>
            <Slider content={myTheme.state.skills}/>
            {/*<Slider content={myTheme.state.tools}/>*/}

        </StyledSectionContainer>
    );
};
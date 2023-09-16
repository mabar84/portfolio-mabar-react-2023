import React from 'react';
import styled from "styled-components";
import {StyledSectionTitle} from "../../../components/StyledSectionTitle";
import {StyledSectionContainer} from "../../../components/SectionContainer";
import {StyledSectionText} from "../../../components/StyledSectionText";

export const SpaSkills = () => {
    return (
        <StyledSectionContainer>
            <StyledSectionTitle>
                My Tech Stack
            </StyledSectionTitle>
            <StyledSectionText>
                Technologies I’ve been working with recently
            </StyledSectionText>
        </StyledSectionContainer>
    );
};
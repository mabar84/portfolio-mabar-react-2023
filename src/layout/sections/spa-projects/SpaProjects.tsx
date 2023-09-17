import React from 'react';
import styled from "styled-components";
import {StyledSectionTitle} from "../../../components/StyledSectionTitle";
import {StyledSectionText} from "../../../components/StyledSectionText";
import {StyledSectionContainer} from "../../../components/SectionContainer";

export const SpaProjects = () => {
    return (
        <StyledSpaProjects className={'container'}>
            <StyledSectionTitle>
                Projects
            </StyledSectionTitle>
            <StyledSectionText>
                Some of my works
            </StyledSectionText>


        </StyledSpaProjects>
    );
};

const StyledSpaProjects = styled.section``
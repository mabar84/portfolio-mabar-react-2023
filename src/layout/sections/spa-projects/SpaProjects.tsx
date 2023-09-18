import React from 'react';
import styled from "styled-components";
import {StyledSectionTitle} from "../../../components/StyledSectionTitle";
import {StyledSectionText} from "../../../components/StyledSectionText";
import {ProjectCards} from "./project-cards/ProjectCards";

export const SpaProjects = () => {
    return (
        <StyledSpaProjects className={'container'}>
            <StyledSectionTitle>
                Projects
            </StyledSectionTitle>
            <StyledSectionText>
                Some of my works
            </StyledSectionText>

            <ProjectCards/>

        </StyledSpaProjects>
    );
};

const StyledSpaProjects = styled.section`
`
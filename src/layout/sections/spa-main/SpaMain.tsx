import React from 'react';
import {MainPhoto} from "./main-photo/MainPhoto";
import {H2, H2Colored} from "../../../components/h2/H2";
import {StyledH1} from "../../../components/h1/H1";
import {StyledFlexWrapper} from "../../../components/StyledFlexWrapper";
import styled from "styled-components";
import {StyledSectionContainer} from "../../../components/SectionContainer";


export const SpaMain = () => {
    return (
        <StyledSectionContainer>
            <StyledFlexWrapper className={'container'} align={'center'} gap={'50px'}>
                <div className="">
                    <H2Colored content={'👋,'} coloredContent={'Hi'}/>
                    <H2 content={'My name is'}/>
                    <H2 content={'Mikhail Baranouski'}/>

                    <StyledH1> I'm a Web Developer </StyledH1>
                </div>

                <MainPhoto/>
            </StyledFlexWrapper>
        </StyledSectionContainer>
    )
};

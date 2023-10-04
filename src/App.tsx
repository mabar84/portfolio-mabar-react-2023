import "./App.css";
import {Header} from "./layout/header/Header";
import {SpaMain} from "./layout/sections/spa-main/SpaMain";
import {SpaSkills} from "./layout/sections/spa-skills/SpaSkills";
import {SpaAbout} from "./layout/sections/spa-about/SpaAbout";
import {SpaProjects} from "./layout/sections/spa-projects/SpaProjects";
import {SpaContacts} from "./layout/sections/spa-contacts/SpaContacts";

import styled from "styled-components";
import {GoTopButton} from "./components/goTopButton/GoTopButton";
import {BrowserRouter, Route, Routes} from "react-router-dom";


function App() {
    return (
        <StyledApp className="App">
            <StyledTestSquare>qwe</StyledTestSquare>

            <BrowserRouter>
                <Header/>

                <Routes>
                    <Route element={<SpaMain/>} path='/'/>
                    <Route element={<SpaMain/>} path='/home'/>
                    <Route element={<SpaAbout/>} path='/about'/>
                    <Route element={<SpaSkills/>} path='/skills'/>
                    <Route element={<SpaProjects/>} path='/projects'/>
                    <Route element={<SpaContacts/>} path='/contacts'/>
                </Routes>
            </BrowserRouter>

            <GoTopButton/>
        </StyledApp>
    );
}

export default App;

const StyledApp = styled.div`
  padding-bottom: 60px;
`

const StyledTestSquare = styled.div`
  width: 100px;
  height: 100px;
  background-color: red;
  cursor: pointer;
  transform-style: preserve-3d;
  transform: translate(50%, 40px);
  position: absolute;
  display: none;
`

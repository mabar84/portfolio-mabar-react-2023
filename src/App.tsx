import "./App.css";
import styled from "styled-components";
import {Header} from "./layout/header/Header";
import {SpaMain} from "./layout/sections/spa-main/SpaMain";
import {SpaSkills} from "./layout/sections/spa-skills/SpaSkills";
import {SpaAbout} from "./layout/sections/spa-about/SpaAbout";
import {SpaProjects} from "./layout/sections/spa-projects/SpaProjects";
import {SpaContacts} from "./layout/sections/spa-contacts/SpaContacts";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Router>
                <Header/>

                <Routes>
                    <Route element={<SpaMain/>} path='/'/>
                    <Route element={<SpaMain/>} path='/home'/>
                    <Route element={<SpaAbout/>} path='/about'/>
                    <Route element={<SpaSkills/>} path='/skills'/>
                    <Route element={<SpaProjects/>} path='/projects'/>
                    <Route element={<SpaContacts/>} path='/contacts'/>
                </Routes>
            </Router>


            {/*<SpaSkills/>*/}
            {/*<SpaProjects/>*/}
            {/*<SpaContacts/>*/}
        </div>
    );
}

export default App;


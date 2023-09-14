import "./App.css";
import styled from "styled-components";
import {Header} from "./layout/header/Header";
import {SpaMain} from "./layout/sections/spa-main/SpaMain";
import {SpaSkills} from "./layout/sections/spa-skills/SpaSkills";
import {SpaAbout} from "./layout/sections/spa-about/SpaAbout";
import {SpaProjects} from "./layout/sections/spa-projects/SpaProjects";
import {SpaContacts} from "./layout/sections/spa-contacts/SpaContacts";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Header/>
            {/*<main>*/}
            {/*    <Routes>*/}
            {/*        <Route path='/about'>*/}
            {/*            <SpaAbout/>*/}
            {/*        </Route>*/}

            {/*        <Route path='/'>*/}
            {/*            <SpaMain/>*/}

            {/*        </Route>*/}
            {/*    </Routes>*/}
            {/*</main>*/}


            {/*<SpaSkills/>*/}
            {/*<SpaProjects/>*/}
            {/*<SpaContacts/>*/}
        </div>
    );
}

export default App;


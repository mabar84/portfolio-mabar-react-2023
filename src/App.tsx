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
import {useEffect, useState} from "react";

function App() {

    type objType={
        a:number,
        b:number
    }

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState<objType>({a:4,"b":8});

    useEffect(() => {
        fetch("/box/db/db.json", {
            method: 'POST',
            mode: 'cors',
            body: "param=",
        })
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                },

                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    console.log(items.a+items.b)

    return (
        <StyledApp className="App">
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
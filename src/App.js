import { GlobalStyle } from "./components/GlobalStyles";
import { ThemeProvider } from "styled-components";
import './assets/css/style.css';
import {LightMode, DarkMode} from './assets/UI/themes';
import React, {useState} from 'react';

import {DarkModeSelectorStyle} from "./components/LandingPage/DarkModeSelector/darkModeSelector";
import LandingPage from "./components/LandingPage/landingPage";
import About from "./components/About/about";
import Project from "./components/Projects/projects";

function App() {
   
  const [mode, setMode] = useState(true);

  const toggleMode = () => {
    setMode((mode) => !mode);
  };


  return (
    <ThemeProvider theme={mode ? DarkMode: LightMode}>
      <GlobalStyle/> 
      <DarkModeSelectorStyle>
            <div class="dark-mode-selector">
                <label class="label-dark-mode">Light Mode</label>
                <input type="checkbox" class="switch-button" onClick={() => {
                  toggleMode();
                  var labelDarkMode = document.querySelector('.label-dark-mode');
                  if (labelDarkMode.innerHTML === "Light Mode") {
                    labelDarkMode.innerHTML = " Dark Mode";
                  } else {
                    labelDarkMode.innerHTML = "Light Mode"
                  };
                }}  ></input>
            </div>
        </DarkModeSelectorStyle>
        <LandingPage/>
        <About/>
        <Project/>
    </ThemeProvider>
  );
}

export default App;

import styled from "styled-components";
import React from "react";

import SideBar from "./SideBar/sideBar";

const AboutStyles = styled.div `
    
    
    
    width: 100%;
    height: 800px;
    background-color: ${ ({theme}) => theme.aboutBackground};
    display: flex;
    
    .aboutTitle {
        font-size: 45px;
        font-weight: 600;
        font-family:"Montserrat";
        color: ${ ({theme}) => theme.aboutTextH1};
        position: absolute;
        align-self: center;
        justify-self: center;
        text-align: center;
    }

    @media screen and (min-width: 1000px) {

        height: 118vh;
        .aboutTitle {
            display: none;
        }
    }

    
`


export default function About () {

    return (
            <AboutStyles id="About">
                <SideBar/>
                <h1 class="aboutTitle">Clique para acessar as informações</h1>
            </AboutStyles>
    );
};
import React from "react";
import styled from "styled-components";

import {AiFillHtml5} from 'react-icons/ai';
import {IoLogoCss3} from 'react-icons/io';

const HardSkillsStyle = styled.div `

    width: 100%;
    height: auto;
    background-color: ${ ({theme}) => theme.backgroundSkills};

    .projectTitle {
        font-size: 45px;
        font-weight: 600;
        font-family:"Montserrat";
        color: ${ ({theme}) => theme.titlleSkills};
        text-align: center;
        padding-top: 3%;
    }

    #container-habilidades{
    align-items: center;
    width: 80%;
    height: 500px;
    margin-left: 10%;
    margin-top: 2%;
    transition: ease-in-out .5s;
    border: 1px solid black;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: flex-start;

}


.card-habilidades{
    width: 25%;
    height: 200px;
    transition: ease .7s;
    cursor: pointer;
    border-radius: 10px;
    background-color: ${ ({theme}) => theme.backgroundCardSkills};
}

.card-habilidades:hover{
    height: 320px;
    box-shadow: 0 0 2px ${ ({theme}) => theme.titleCardSkills},
                0 0 7px ${ ({theme}) => theme.titleCardSkills},
                0 0 7px ${ ({theme}) => theme.titleCardSkills},
                0 0 7px ${ ({theme}) => theme.titleCardSkills},
                0 0 7px ${ ({theme}) => theme.titleCardSkills};
}



.card-habilidades h1{
    font-size: 25px;
    color: ${ ({theme}) => theme.titleCardSkills};
    font-family: "Prompt";
    text-align: center;
}

svg {
    width: 200px;
    height: 200px;
    position: relative;
    margin-left: -3%;
    margin-top: -20%;
    transition: all ease-in-out 0.5;
    z-index: 2;
}

circle {
    width: 200px;
    height: 200px;
    fill: none;
    stroke: black;
    stroke-width: 7;
    transform: translate(5px, 5px);
    stroke-dasharray: 753;
    stroke-dashoffset: 753;
    transition: all ease-in-out 0.5;
}

circle:nth-child(1) {
    stroke-dashoffset: 110;
    stroke: rgb(43, 43, 43);
}

circle:nth-child(2) {
    transition:  stroke-dashoffset 1.5s;
    stroke: rgb(128, 255, 0);
}

.imgCircle{
    width: 110px;
    height: 110px;
    border-radius: 100%;
    margin-left: 28.5%;
    margin-top: -50%;
    background-image: url(../img/html.png);
    background-size: cover;
    border: 2px solid transparent;
    background-repeat: no-repeat;
    filter: grayscale(1);
    transition: ease .5s;
    z-index: 1;
}

.card-habilidades:hover circle:nth-child(2) {
    stroke-dashoffset: 560;
}



.card-habilidades:hover .imgCircle{
    filter: grayscale(0);
}

.card-habilidades p{
    font-size: 18px;
    visibility: hidden;
    transition: ease .1s;
    color: white;
    font-family: "Montserrat";
    text-align: center;
}

.card-habilidades:hover p{
    margin-top: 7%;
    visibility: visible;
    transition-delay: .2s;
}


/* CARD DE CSS */

.card-habilidades:nth-child(3){
}

.imgCircle2 {
    width: 110px;
    height: 110px;
    border-radius: 100%;
    margin-left: 28.5%;
    margin-top: -50%;
    background-image: url(../img/css3.png);
    background-size: cover;
    border: 2px solid transparent;
    background-repeat: no-repeat;
    filter: grayscale(1);
    transition: ease .5s;
    z-index: 1;
}

.card-habilidades:hover #circleCSS3  {
    stroke-dashoffset: 530;
}

.card-habilidades:hover .imgCircle2{
    filter: grayscale(0);
}

/* CARD DE JAVASCRIPT */

.card-habilidades:nth-child(4){
}

.imgCircle3 {
    width: 110px;
    height: 110px;
    border-radius: 100%;
    margin-left: 28.5%;
    margin-top: -50%;
    background-image: url(../img/JavaScript.png);
    background-size: contain;
    border: 2px solid transparent;
    background-repeat: no-repeat;
    filter: grayscale(1);
    transition: ease .5s;
    z-index: 1;
}

.card-habilidades:hover .imgCircle3{
    filter: grayscale(0);
}

#VerMais {
    margin-left: 45%;
    margin-top: -3%;
    position: absolute;
    border-radius: 30px;
    height: 40px;
    width: 150px;
    font-size: 18px;
    cursor: pointer;
}

.card-habilidades:hover #circleJS  {
    stroke-dashoffset: 600;
}


/* CARD DE REACT */


#card-react{
    display: block;
}

.imgCircle4 {
    width: 100px;
    height: 100px;
    border-radius: 0%;
    margin-left: 30%;
    margin-top: -47%;
    background-image: url(../img/react.png);
    background-size: contain;
    border: 2px solid transparent;
    background-repeat: no-repeat;
    filter: grayscale(1);
    transition: ease .5s;
    z-index: 1;
}

.card-habilidades:hover .imgCircle4{
    filter: grayscale(0);
}

.card-habilidades:hover #circleReact  {
    stroke-dashoffset: 650;
}


/* CARD DE GIT/GIT-HUB */



#card-git{
    display: block;
}

.imgCircle5 {
    width: 100px;
    height: 100px;
    border-radius: 0%;
    margin-left: 30%;
    margin-top: -48%;
    background-image: url(../img/git.png);
    background-size: contain;
    border: 2px solid transparent;
    background-repeat: no-repeat;
    filter: grayscale(1);
    transition: ease .5s;
    z-index: 1;
}

.card-habilidades:hover .imgCircle5{
    filter: grayscale(0);
}

.card-habilidades:hover #circleGIT  {
    stroke-dashoffset: 670;
}


/* CARD DE API */


#card-api{
    display: block;
}

#card-api:hover {
    height: 350px;
}

.imgCircle6 {
    width: 100px;
    height: 100px;
    border-radius: 0%;
    margin-left: 30%;
    margin-top: -48%;
    background-image: url(../img/api.png);
    background-size: contain;
    border: 2px solid transparent;
    background-repeat: no-repeat;
    filter: grayscale(1);
    transition: ease .5s;
    z-index: 1;
}

.card-habilidades:hover .imgCircle6{
    filter: grayscale(0);
}

.card-habilidades:hover #circleAPI  {
    stroke-dashoffset: 710
}
    @media only screen and (max-width: 768px) {
        .projectTitle {
        font-size: 40px;
        padding-top: 18%;    
    }
    }

`

export default function HardSkills() {

    return (

        
        <HardSkillsStyle id="Skills">
                <h1 class="projectTitle">Hard Skills</h1>
                <div id="container-habilidades">
          <h2></h2>
          <div class="card-habilidades" id="HTML" onclick="HTML()">
            <h1>HTML-5</h1>
            <svg height="300px">
              <circle cx="130" cy="130" r="60"></circle>
              <circle id=""  cx="130" cy="130" r="60"></circle>
            </svg>
            <div class="imgCircle"></div>
            <p>Tenho conhecimento e experiência em projetos particulares utilizando HTML semântico e não semântico com boas práticas</p>
          </div>

          <div class="card-habilidades" id="CSS" onclick="CSS()">
            <h1>CSS-3</h1>
            <svg height="300px">
              <circle cx="130" cy="130" r="60"></circle>
              <circle id="circleCSS3"  cx="130" cy="130" r="60"></circle>
            </svg>
            <div class="imgCircle2"></div>
            <p>Trabalho com desenvolvimento mobile first</p>
          </div>

          <div class="card-habilidades" id="JavaScript" onclick="JS()">
            <h1>JavaScript</h1>
            <svg height="300px">
              <circle cx="130" cy="130" r="60"></circle>
              <circle id="circleJS"  cx="130" cy="130" r="60"></circle>
            </svg>
            <div class="imgCircle3"></div>
            <p>Uitilzo Javascript em meus projetos para validar funções, autenticações, consumo de API's.</p>
          </div>

          <div class="card-habilidades" id="card-react" onclick="REACT()">
            <h1>React</h1>
            <svg height="300px">
              <circle cx="130" cy="130" r="60"></circle>
              <circle id="circleReact"  cx="130" cy="130" r="60"></circle>
            </svg>
            <div class="imgCircle4"></div>
            <p>Tenho conhecimentos em React utilizando Styled-components, rotas e outros componentes</p>
          </div>

          <div class="card-habilidades" id="card-git" onclick="GIT()">
            <h1>Git/Git-Hub</h1>
            <svg height="300px">
              <circle cx="130" cy="130" r="60"></circle>
              <circle id="circleGIT"  cx="130" cy="130" r="60"></circle>
            </svg>
            <div class="imgCircle5"></div>
            <p>Utilizo Git e GitHub para armazenar meus códigos e versioná-los.</p>
          </div>

          <div class="card-habilidades" id="card-api" onclick=" API()">
            <h1>API</h1>
            <svg height="300px">
              <circle cx="130" cy="130" r="60"></circle>
              <circle id="circleAPI"  cx="130" cy="130" r="60"></circle>
            </svg>
            <div class="imgCircle6"></div>
            <p>Tenho experiência no consumo de API's em meus projetos</p>
          </div>
          </div>       
          </HardSkillsStyle>
    )
}
import styled from "styled-components";
import React from "react";

import MTS from '../../assets/img/MTS.JPG';
import pokedex from '../../assets/img/pokedex.JPG';
import dash from '../../assets/img/print.JPG';


const ProjectStyles = styled.div `
    
    width: 100%;
    height: 100vh;
    background-color: ${ ({theme}) => theme.backgroundProject};


    .projectTitle {
        font-size: 45px;
        font-weight: 600;
        font-family:"Montserrat";
        color: ${ ({theme}) => theme.titleProject};
        text-align: center;
        padding-top: 3%;
    }
    
.containerProjetos{
    width: 100%;
    display: flex;
    transform-style: preserve-3d;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 5%;
}


    input[type=radio] {
    display: none;
}

.imgProjeto{
    width: 100%;
    height: 100%;
    border-radius: 15px;
    background-size: cover;
}

.card {
    position: absolute;
    width: 500px;
    height: 300px;
    left: 0;
    right: 0;
    margin: auto;
    cursor: pointer;
    transition: transform .4s ease;
    cursor: pointer;
    text-align: center;
    box-shadow: 0 5px 10px 3px rgba(0, 0, 0, 0.6);
    border-radius: 15px;

}


.cards {
    position: relative;
    width: 100%;
    height: 100%;
}


.link__project {
    font-family: "Prompt";
    text-align: center;
    text-decoration: none;
    color: ${ ({theme}) => theme.headerText};
    transition: ease-in-out.5s;
    font-size: 26px;
    z-index: 9999;
}

.link__project:hover {
    transform: scaleX(1.1);
    color: crimson;
}


p{
    text-align: center;
    font-family: 'Montserrat';
    font-size: 20px;
    color: white;
    margin: 15px;
}

#song-1 a::before, #song-2 a::before, #song-3 a::before{
    background-color: transparent;
}



#projeto-1:checked ~.cards #song-3,
#projeto-2:checked ~.cards #song-1,
#projeto-3:checked ~.cards #song-2{
    transform: translateX(-60% ) scale(0.8);
    opacity: 0.2;
    z-index: 0;
}



#projeto-1:checked ~.cards #song-2,
#projeto-2:checked ~.cards #song-3,
#projeto-3:checked ~.cards #song-1 {
    transform: translateX(60% ) scale(0.8);
    opacity: 0.2;
    z-index: 0;
}

#projeto-1:checked ~.cards #song-1,
#projeto-2:checked ~.cards #song-2,
#projeto-3:checked ~.cards #song-3 {
    transform: translateX(0) scale(1);
    opacity: 1;
    z-index: 1;
}


#projeto-1:checked ~.cards #song-1 img,
#projeto-2:checked ~.cards #song-2 img,
#projeto-3:checked ~.cards #song-3 img {
    box-shadow: 0px 0px 25px 0px rgba(81,81,81,0.47);
}



@media only screen and (max-width:500px) {
    
    
    height: 700px;

    .projectTitle {
        padding-top: 25%;
        font-size: 40px;
    }

    .containerProjetos{
        margin-top: 35%;
    }
    
    .card {
        position: absolute;
        width: 225px;
        height: 125px;
        left: 0;
        right: 0;
        margin: auto;
        cursor: pointer;
        transition: transform .4s ease;
        cursor: default;
    }
    

    .card p{
        font-size: 13px;
    }


    #projeto-1:checked ~.cards #song-3,
    #projeto-2:checked ~.cards #song-1,
    #projeto-3:checked ~.cards #song-2 {
    transform: translateX(-40% ) scale(0.8);
    opacity: 0.4;
    z-index: 0;
}

    #projeto-1:checked ~.cards #song-2,
    #projeto-2:checked ~.cards #song-3,
    #projeto-3:checked ~.cards #song-1 {
    transform: translateX(40% ) scale(0.8);
    opacity: 0.4;
    z-index: 0;
}

    #projeto-1:checked ~.cards #song-1,
    #projeto-2:checked ~.cards #song-2,
    #projeto-3:checked ~.cards #song-3 {
    transform: translateX(0) scale(1);
    opacity: 1;
    z-index: 1;
}


    #projeto-1:checked ~.cards #song-1 img,
    #projeto-2:checked ~.cards #song-2 img,
    #projeto-3:checked ~.cards #song-3 img {
    box-shadow: 0px 0px 25px 0px rgba(81,81,81,0.47);
}


.link__project {
    font-size: 16px;
}


}

`


export default function Project() {

    return (
            <ProjectStyles id="Project">
                
                <h1 class="projectTitle">Projetos</h1>
                <div class="containerProjetos">
                    <input type="radio" name="slider" id="projeto-1" checked />
                    <input type="radio" name="slider" id="projeto-2" checked /> 
                    <input type="radio" name="slider" id="projeto-3" checked />

                    <div class="cards">
                        <label class="card project" for="projeto-1" id="song-1">
                        <img class="imgProjeto" src={pokedex} />
                            <a href="https://pokedexfelipemelo.netlify.app/" target="_blank" class="link__project" >Pokedex</a>
                            <p>Aplicação desenvolvida para aprimorar as habilidades em consumo de API’s, utilizando a Poke API, uma API aberta</p>
                        </label> 

                        <label class="card project" for="projeto-2" id="song-2">
                            <img class="imgProjeto" src={dash} />
                            <a href="#" target="_blank" class="link__project">Dash Comissões</a>
                            <p>Esta aplicação foi desenvolvida para calcular o comissionamento e metas do time comercial. </p>
                        </label>

                        <label class="card project" for="projeto-3" id="song-3">
                            <img class="imgProjeto" src={MTS} />
                            <a href="https://metroskateboarding.netlify.app/" target="_blank" class="link__project">Metro Skateboarding</a>
                            <p>Esta aplicação foi desenvolvida para aprimorar os conhecimentos em FlexBox e Grid Containers.</p>
                        </label>
                    </div>
                </div>
            
            </ProjectStyles>
    );
};
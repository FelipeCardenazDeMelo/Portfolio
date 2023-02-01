import React from "react";
import styled from "styled-components";

import Typewriter from "typewriter-effect";

const ContentStyle = styled.div `

    width: 75%;
    height: 60%;
    display: flex;
    margin: 3% 13.5%;

    .text-box {
        width: 50%;
        height: 95%;
        align-self: center;
        font-family: "Montserrat-Light";
        display: grid;
        grid-template-columns: auto 1fr;
        grid-auto-rows: 20%;
        
    }

    h2 {
        font-size: 38px;
        font-weight: 400;
        grid-column: 1 / 4;
        color: ${ ({theme}) => theme.contentTextH2};
        transition: ease-in-out .3s;

    }

    h1 {
        color: ${ ({theme}) => theme.contentTextH1};
        transition: ease-in-out .3s;
        

    }

    h1:nth-child(2) {
        font-weight: 700;
        grid-column: 4 / 3;
        grid-row: 2 / 3;
        font-size: 45px;
    }

    h1:nth-child(4) {
        font-weight: 700;
        grid-column: 1 / 5;
        grid-row: 4;
        width: 200%;
        font-size: 32px;
    }

    .profile-image {
        width: 42%;
        height: 60%;
        margin-top: 1%;
        margin-left: auto;
        background-image: url(${({theme}) => theme.imgCode});
        background-repeat: no-repeat;
        background-size: contain;
        transition: ease-in-out .3s;
        
    }

    


    @media screen and (min-width: 1000px) {

        h2 {
            font-size: 2.8rem;
        }

        h1:nth-child(4) {
        font-weight: 700;
        grid-column: 1 / 5;
        grid-row: 4;
        width: 200%;
        font-size: 45px;
    }

    }

    @media screen and (max-width: 998px) {
        margin: 20% 5vw;

        .text-box {
            display: flex;
            flex-direction: column;
            gap: 8%;
            width: 90vw;
        }

        h2 {
            grid-column: 1 / 4;
            width: 100vw;
        }

        h1:nth-child(2) {
            font-weight: 700;
            align-self: flex-end;
            width: auto;
        }

        h1:nth-child(4) {
            text-align: center;
            width: auto;
        }

        .profile-image {
            position: absolute;
            margin-top: 80%;
            width: 60%;
            margin-left: 18%;
        } 

        

    @media screen and (max-width: 361px) {
        
        h2 {
            font-size: 30px;
        }
    }

    @media screen and (max-width: 396px) {
        h1 {
            font-size: 32px;
        }
    }
        
    }


`

export default function Content() {

    return (

        
        <ContentStyle>
            <div class="text-box">
                <h2>Olá, me chamo</h2>
                <h1>Felipe Melo</h1>
                <h2>e sou</h2>
                <h1 class="Front-End"><Typewriter class="Front-End" onInit={(typeWriter)=> {
                    typeWriter.typeString("Front-End Developer").start()
                }}/></h1>
            </div>
            <div class="profile-image"></div>
        </ContentStyle>
    )
}
import styled from "styled-components";
import React, {useState} from 'react';

import { backgroundColorLight, backgroundColorDark } from "../../../assets/UI/variables";
import { secondColorLight } from "../../../assets/UI/variables";
import {LightMode, DarkMode} from '../../../assets/UI/themes';



export const DarkModeSelectorStyle = styled.button `
    
    width: 100%;
    height: auto;
    z-index: 9999;
    position: absolute;
    background-color: transparent;
    border: none;
    display: flex;
    justify-content: flex-end;
    margin-top: 3%; 


    @media screen and (min-width: 999px){
        margin-top: 0%;     
    }
    .dark-mode-selector {
        width: auto;
        display: flex;
        gap: 20px;
        transition: ease-in-out .3s;
        padding: 10px;
    }

    .label-dark-mode {
        text-align: left;
        font-family: "Montserrat";
        font-weight: 600;
        align-self: center;
        color: ${ ({theme}) => theme.darkModeLabel};
    }

    input[type="checkbox"] {
        width: 55px;
        height: 26px;
        appearance: none;
        background-color: ${backgroundColorLight};
        border-radius: 15px;
        cursor: pointer;
        transition: ease-in-out.4s;
        display: flex;
        position: relative;
        box-shadow: 0 1px 6px 1px rgba(0, 0, 0, 0.5);
    }



    input[type="checkbox"]:before {
        content: "";
        width: 19px;
        height: 19px;
        background-color: #00D7A0;
        border-radius: 50px;
        position: absolute;
        box-shadow: 0 4px 8px 1px rgba(0, 0, 0, 0.25);
        align-self: center;
        left: 5px;
        transition: ease-in-out.4s;

    }

    input:checked[type="checkbox"]:before {
        left: 53%;
        background-color: #ffff;
    }

    input:checked[type="checkbox"] {
        background-color: ${backgroundColorDark};

    }


    


`





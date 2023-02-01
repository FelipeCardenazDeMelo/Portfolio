import styled from "styled-components";
import React from "react";



const HeaderStyle = styled.header `
    width: 100%;
    position: relative;

        
    .menu-mobile {
        display: block;
        position: absolute;
        z-index: 99999;
        margin: 5%;
    }
        
    .menu-mobile div {
        width: 32px;
        height: 2px;
        background: ${ ({theme}) => theme.headerText};
        margin: 8px;
        transition: 0.3s;
    }

    .nav-list {
        display: flex;
        width: 100%;
        height: 100vh;
        position: absolute;
        background-color: ${ ({theme}) => theme.backgroundMobile};
        flex-direction: column;
        align-items: center;
        left: -100vw;
        text-decoration: none;
        justify-content: center;
        transition: ease-in-out .3s;
        z-index: 9999;
        gap: 20px;
    }

    li {
        height: 15%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: ease .3s;
    }

    li:hover {
        border-left: 15px solid ${ ({theme}) => theme.headerText};
     }

    .side-bar__link {
        font-size: 1.7em;
        text-decoration: none;
        color: ${ ({theme}) => theme.headerText};
        transition: ease .3s;
        font-family: "Prompt";
        opacity: 0.7;
    }

    li:hover .side-bar__link{
        opacity: 1;
    }



    
    

    

    @media screen and (min-width: 999px) {
        width: 60%;
        height: 3%;
        margin-left: 20%;
        margin-top: 5%;


        .menu-mobile {
            display: none;
        }

        .nav-list {
            width: 100%;
            height: 100%;
            flex-direction: row;
            background-color: transparent;
            font-size: 1em;
            left: 0;
        }

        li:hover {
            border-left: none;
        }

        .side-bar__link {
            opacity: 1;
        }

        .side-bar__link:hover {
            transform: scale(1.05);
            color: ${ ({theme}) => theme.headerHoverText}
        }

        .side-bar__link:before {
            content: "";
            position: absolute;
            width: 100%;
            height: 3px;
            bottom: -10px;
            left: 0;
            background-color: ${ ({theme}) => theme.headerHoverEffect};
            visibility: hidden;
            -webkit-transform: scaleX(0);
            transform: scaleX(0);
            -webkit-transition: all 0.3s ease-in-out 0s;
            transition: all 0.3s ease-in-out 0s;
            border-radius: 15px;
        }

        .side-bar__link:hover:before {
            visibility: visible;
            -webkit-transform: scaleX(1);
            transform: scaleX(1);
        }

    }

    


`

export default function Header() {


    function  openSideBar() {
        
        var navList = document.querySelector(".nav-list");
        var line1 = document.querySelector(".line1")
        var line2 = document.querySelector(".line2")
        var line3 = document.querySelector(".line3")
        
        
        if (navList.style.left == "-100vw") {
            navList.style.left = "0";
            line1.style.transform = "rotate(-45deg) translate(-8px, 8px)";
            line2.style.opacity = "0";
            line3.style.transform = "rotate(45deg) translate(-5px, -7px)";
            

        } else {
            navList.style.left = "-100vw";
            line1.style.transform = "none";
            line2.style.opacity = "1";
            line3.style.transform = "none";
            
        }


        
    }

    return (
        <HeaderStyle>
                <nav class="side-bar">
                    <div class="menu-mobile" onClick={openSideBar}>
                        <div class="line1"></div>
                        <div class="line2"></div>
                        <div class="line3"></div>
                    </div>
                    <ul class="nav-list">
                        <li><a href="#" class="side-bar__link">Início</a></li>
                        <li><a href="#About" class="side-bar__link">Sobre</a></li>
                        <li><a href="#Project" class="side-bar__link">Projetos</a></li>
                    </ul>
                </nav>    
        </HeaderStyle>
    );
};
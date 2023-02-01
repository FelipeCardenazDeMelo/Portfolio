import styled from "styled-components";
import React from "react";

import {SlArrowRight} from 'react-icons/sl';
import {SlArrowLeft} from 'react-icons/sl';
import {FaUserAlt} from 'react-icons/fa';
import {BsFillTelephoneFill} from 'react-icons/bs';
import {BsFillCheckCircleFill} from 'react-icons/bs';
import {BsFillBriefcaseFill} from 'react-icons/bs';
import {BsFillBookFill} from 'react-icons/bs';
import {BsCloudDownload} from 'react-icons/bs';


import Resume from '../../../assets/download/FelipeMeloCV.pdf';

const SideStyles = styled.div `
    
    display: flex;

    @media screen and (min-width: 1000px) {
    .side-bar {
        width: 50%;
        height: auto;
        transition: ease-in-out .3s;
        position: absolute;
        z-index: 9999;
        display: flex;
        margin: 5% 25%;
    }

    .icons-center {
        display: flex;
        flex-direction: row;
    }

    .icons {
        display: none;
    }

    .icons-about {
        width: 30%;
        height: auto;
        margin-left: 0%;
        margin-top: 40%;
        display: flex;
        flex-direction: column;
    }

    .about-icon, .contact-icon, .check-icon, .job-icon, .academic-icon {
        color: ${ ({theme}) => theme.contentTextH2};
        display: none;
        position: absolute;
    } 


    .li__icon {
        height: 10%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${ ({theme}) => theme.contentTextH2};
        padding: 10px;
        cursor:  pointer;
    }

    .icon-size {
        font-size: 45px;
        padding: 13px;
        transition: ease-in-out .3s;

    }

    .icon-size:hover {
        border-bottom: 4px solid ${ ({theme}) => theme.borderSideBar};
        border-radius: 10px;
    }

    .content-text {
        position: absolute;
        width: 75%;
        height: auto;
        margin: 18% 13.5%;
    }


    #aboutMe {
        width: 100%;
        height: 100%;
        display: block;
    }

    .aboutIcon {
        border-bottom: 4px solid ${ ({theme}) => theme.borderSideBar}; 
    }



    .content-text__content h1 {
        font-size: 50px;
        font-weight: 600;
        font-family:"Montserrat";
        color: ${ ({theme}) => theme.aboutTextH1};
        position: relative;
    }

    .content-text__content h2 {
        font-size: 30px;
        font-weight: 600;
        font-family:"Montserrat";
        color: ${ ({theme}) => theme.contentTextH2};
        position: relative;
        margin-top: 5%;
    }

    .content-text__content h3 {
        font-size: 28px;
        font-weight: 400;
        font-family:"Montserrat";
        color: ${ ({theme}) => theme.professionalTextH2};
        position: relative;
        margin-top: 3%;
    }


    .content-text__content p {
        font-size: 25px;
        font-family: "Montserrat";
        color: ${ ({theme}) => theme.contentTextH2};
        margin-top: 5%;
    }

    
    .content-text__content li {
        font-size: 25px;
        font-family: "Montserrat";
        color: ${ ({theme}) => theme.contentTextH2};
        margin-top: 5%;
    }


    #contact {
        width: 100%;
        height: 100%;
        display: none;
    }

    #contact a {
        text-decoration: none;
    }
    .donwload-cv {
        width: 30%;
        height: 55px;
        margin: 5% 35%;
        border-radius: 10px;
        outline: none;
        background-color: ${ ({theme}) => theme.aboutTextH1};
        border: none;
        color: ${ ({theme}) => theme.buttonText};
        font-family: "Montserrat";
        font-size: 20px;
        display: flex;
        gap: 20px;
        align-items: center;
        justify-content: center;
        font-weight: 600;
        cursor: pointer;
    }

    #professional-tasks {
        width: 100%;
        height: 100%;
        display: none;
    }

    #professional {
        width: 100%;
        height: 100%;
        display: none;
    }

    #professional__content {
        font-size: 20px;
        font-family: "Montserrat";
        color: ${ ({theme}) => theme.contentTextH2};
        margin-top: 2%;
    }

    #academic {
        width: 100%;
        height: 100%;
        display: none;
    }

    #academic_label {
        font-size: 20px;
        font-family: "Montserrat";
        color: ${ ({theme}) => theme.contentTextH2};
        margin-top: 5%;
    }
    
}
    @media screen and (max-width: 999px) {
    .side-bar {
        width: 35vw;
        height: 100%;
        background-color: ${ ({theme}) => theme.background};
        transition: ease-in-out .3s;
        left: -36vw;
        position: absolute;
        z-index: 9999;
        display: flex;
        flex-direction: column;
        gap: 20px;
        text-align: center;
    }

    .icons-center {
        display: flex;
        flex-direction: row;
    }

    .icons {
        width: 30%;
        height: auto;
        margin-left: 115%;
        margin-top: 30%;
        display: flex;
        flex-direction: column;
    }

    .icons-about {
        width: 30%;
        height: auto;
        margin-left: 0%;
        margin-top: 40%;
        display: flex;
        flex-direction: column;
    }

    .about-icon, .contact-icon, .check-icon, .job-icon, .academic-icon {
        color: ${ ({theme}) => theme.contentTextH2};
        display: none;
        position: absolute;
    } 

    .icon__icon {
        padding-top: 10px;
        color: ${ ({theme}) => theme.headerText};
    }

    #close {
        position: absolute;
        display: none;

    }

    .li__icon {
        height: 10%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${ ({theme}) => theme.contentTextH2};
        transition: ease-in-out .3s;
    }

    .li__icon:hover {
        border-left: 6px solid ${ ({theme}) => theme.borderSideBar};
    }

    .content-text {
        position: absolute;
        width: 90%;
        height: auto;
        margin: 40% 5%;

    }


    #aboutMe {
        width: 100%;
        height: 100%;
        display: none; 

    }

    .content-text__content h1 {
        font-size: 43px;
        font-weight: 600;
        font-family:"Montserrat";
        color: ${ ({theme}) => theme.aboutTextH1};
        position: relative;
    }

    .content-text__content h2 {
        font-size: 24px;
        font-weight: 600;
        font-family:"Montserrat";
        color: ${ ({theme}) => theme.professionalTextH2};
        position: relative;
        margin-top: 15%;
    }

    .content-text__content h3 {
        font-size: 23px;
        font-weight: 400;
        font-family:"Montserrat";
        color: ${ ({theme}) => theme.professionalTextH2};
        position: relative;
        margin-top: 3%;
    }


    .content-text__content p {
        font-size: 20px;
        font-family: "Montserrat";
        color: ${ ({theme}) => theme.contentTextH2};
        margin-top: 20%;
    }

    
    .content-text__content li {
        font-size: 20px;
        font-family: "Montserrat";
        color: ${ ({theme}) => theme.contentTextH2};
        margin-top: 10%;
    }


    #contact {
        width: 100%;
        height: 100%;
        display: none;
    }
    .donwload-cv {
        width: 80%;
        height: 55px;
        margin: 15% 10%;
        border-radius: 10px;
        outline: none;
        background-color: ${ ({theme}) => theme.aboutTextH1};
        border: none;
        color: ${ ({theme}) => theme.buttonText};
        font-family: "Montserrat";
        font-size: 20px;
        display: flex;
        gap: 20px;
        align-items: center;
        justify-content: center;
        font-weight: 600;
    }

    #professional-tasks {
        width: 100%;
        height: 100%;
        display: none;
    }

    #professional {
        width: 100%;
        height: 100%;
        display: none;
    }

    #professional__content {
        font-size: 20px;
        font-family: "Montserrat";
        color: ${ ({theme}) => theme.contentTextH2};
        margin-top: 5%;
    }

    #academic {
        width: 100%;
        height: 100%;
        display: none;
    }

    #academic_label {
        font-size: 20px;
        font-family: "Montserrat";
        color: ${ ({theme}) => theme.contentTextH2};
        margin-top: 5%;
    }

} 

   
   
`


function openSideBar(){
    var sideBar = document.getElementById('sideBar');   
    var iconsAbout = document.querySelector('.icons-about');   

    

    if (window.matchMedia("(max-width:500px)").matches) {
        sideBar.style.left = "0";
        iconsAbout.style.marginLeft = "50%";
        document.getElementById("close").style.display = "block";
        document.getElementById("open").style.display = "none";
    }

}

function closeSideBar() {
    var sideBar = document.getElementById('sideBar');   
    var iconsAbout = document.querySelector('.icons-about');

    

    if (window.matchMedia("(max-width:500px)").matches) {
        sideBar.style.left = "-36vw";
        iconsAbout.style.marginLeft = "20%";
        document.getElementById("close").style.display = "none";
        document.getElementById("open").style.display = "block";
    }
}


function close() {
    
    var contentAboutMe = document.getElementById("aboutMe");
    var aboutTitle = document.querySelector(".aboutTitle");
    var contact = document.getElementById("contact");
    var sideBar = document.getElementById('sideBar');  
    var professionalTasks = document.getElementById("professional-tasks");
    var professional= document.getElementById("professional");
    var academic= document.getElementById("academic");
    var aboutIcon = document.querySelector(".about-icon");
    var aboutContact = document.querySelector(".contact-icon");
    var aboutCheck = document.querySelector(".check-icon");
    var aboutJob = document.querySelector(".job-icon");
    var aboutAcademic = document.querySelector(".academic-icon");
    var aboutIconDesktop = document.querySelector(".aboutIcon");
    var contactIcon = document.querySelector(".contactIcon");
    var jobIcon = document.querySelector(".jobIcon");
    var professionalIcon = document.querySelector(".professionalIcon");
    var academicIcon = document.querySelector(".academicIcon");

    if (window.matchMedia("(max-width:500px)").matches) {
        sideBar.style.left = "-36vw";
        aboutIcon.style.display = "none";
        aboutContact.style.display = "none";
        aboutCheck.style.display = "none";
        aboutJob.style.display = "none";
        aboutAcademic.style.display = "none";

    } else {
        aboutIconDesktop.style.border = 'none';
        contactIcon.style.border = 'none';
        jobIcon.style.border = 'none';
        professionalIcon.style.border = 'none';
        academicIcon.style.border = 'none';
    }

    contact.style.display = "none";
    contentAboutMe.style.display = "none";
    aboutTitle.style.display = "none";
    professionalTasks.style.display = "none"; 
    professional.style.display = "none";
    academic.style.display = "none";


    document.getElementById("close").style.display = "none";
    document.getElementById("open").style.display = "block";

}

function aboutMe() {
    var contentAboutMe = document.getElementById("aboutMe");
    var aboutTitle = document.querySelector(".aboutTitle");
    var aboutIcon = document.querySelector(".about-icon");
    var iconsAbout = document.querySelector(".icons-about");
    var aboutIconDesktop = document.querySelector(".aboutIcon");
    
    close();
    contentAboutMe.style.display = "block";
    aboutTitle.style.display = "none";
    
    

    if (window.matchMedia("(max-width:500px)").matches) {
        aboutIcon.style.display = "block";
        iconsAbout.style.marginLeft = "20%";
    } else {
        aboutIconDesktop.style.borderColor = ({theme}) => theme.aboutTextH1;
        aboutIconDesktop.style.borderBottom = "4px solid";
    }

    

}



function contact() {
    
    var contact = document.getElementById("contact");
    var aboutContact = document.querySelector(".contact-icon");
    var iconsAbout = document.querySelector(".icons-about");
    var contactIcon = document.querySelector(".contactIcon");


    close();
    contact.style.display = "block";
    
    if (window.matchMedia("(max-width:500px)").matches) {
        aboutContact.style.display = "block";
        iconsAbout.style.marginLeft = "20%";
    } else {
        contactIcon.style.borderColor = ({theme}) => theme.aboutTextH1;
        contactIcon.style.borderBottom = "4px solid";
    }
    
}

function professionalTasks() {
    
    var professionalTasks = document.getElementById("professional-tasks");
    var aboutCheck = document.querySelector(".check-icon");
    var iconsAbout = document.querySelector(".icons-about");
    var jobIcon = document.querySelector(".jobIcon");


    close();
    professionalTasks.style.display = "block";
    
    if (window.matchMedia("(max-width:500px)").matches) {
        aboutCheck.style.display = "block";
        iconsAbout.style.marginLeft = "20%";
    } else {
        jobIcon.style.borderColor = ({theme}) => theme.aboutTextH1;
        jobIcon.style.borderBottom = "4px solid";
    }
}

function professional() {
    var professional= document.getElementById("professional");
    var aboutJob = document.querySelector(".job-icon");
    var iconsAbout = document.querySelector(".icons-about");
    var professionalIcon = document.querySelector(".professionalIcon");


    close();
    professional.style.display = "block";
    
    if (window.matchMedia("(max-width:500px)").matches){
        aboutJob.style.display = "block";
        iconsAbout.style.marginLeft = "20%";
    } else {
        professionalIcon.style.borderColor = ({theme}) => theme.aboutTextH1;
        professionalIcon.style.borderBottom = "4px solid";
    }
}

function academic() {
    var academic= document.getElementById("academic");
    var aboutAcademic = document.querySelector(".academic-icon");
    var iconsAbout = document.querySelector(".icons-about");
    var academicIcon = document.querySelector(".academicIcon");


    close();
    academic.style.display = "block";
    
    if (window.matchMedia("(max-width:500px)").matches) {
        aboutAcademic.style.display = "block";
        iconsAbout.style.marginLeft = "20%";
    } else {
        academicIcon.style.borderColor = ({theme}) => theme.aboutTextH1;
        academicIcon.style.borderBottom = "4px solid";
    }
}

export default function SideBar () {

    return (
            <SideStyles>
                <ul class="side-bar" id="sideBar">
                    <div class="icons-center">
                    <div class="icons">
                        <div class= "icon" id="icon">
                                <SlArrowLeft  class="icon__icon" id="close" fontSize={40} onClick={closeSideBar} />
                                <SlArrowRight class="icon__icon"  id="open" fontSize={40} onClick={openSideBar}/>
                                
                        </div>
                    </div>
                    <div class="icons-about">
                        <div class= "icon" id="icon">
                            <FaUserAlt fontSize={32} class="about-icon" />
                            <BsFillTelephoneFill fontSize={32} class="contact-icon" />
                            <BsFillCheckCircleFill fontSize={32} class="check-icon" />
                            <BsFillBriefcaseFill fontSize={32} class="job-icon" />
                            <BsFillBookFill fontSize={32} class="academic-icon" />
                                
                        </div>
                    </div>
                    </div>
                    <li class="li__icon" onClick={aboutMe} ><FaUserAlt fontSize={32} class="icon-size aboutIcon"/></li>
                    <li class="li__icon" onClick={contact} ><BsFillTelephoneFill fontSize={32} class="icon-size contactIcon" /></li>
                    <li class="li__icon" onClick={professionalTasks} ><BsFillCheckCircleFill fontSize={32} class="icon-size jobIcon" /></li>
                    <li class="li__icon" onClick={professional} ><BsFillBriefcaseFill fontSize={32} class="icon-size professionalIcon" /></li>
                    <li class="li__icon" onClick={academic} ><BsFillBookFill fontSize={32} class="icon-size academicIcon" /></li>
                </ul>
                <div class="content-text">
                    <div class="aboutMe  content-text__content" id="aboutMe" >
                        <h1>Sobre mim</h1>
                        <p>Sou um estudante de 19 anos que atua na área Marketing Operacional na Totvs. </p>
                        <p>Extremamente ambicioso em busca de evoluções diárias, com foco em ser capacitado a exercer qualquer função com excelência trazendo grandes resultados.</p>
                    </div>
                    <div class="contact  content-text__content" id="contact" >
                        <h1>Contato</h1>
                        <p>Email: felipecardenazm@gmail.com</p>
                        <p>Telefone:11 943765856</p>
                        <p>São Paulo, SP</p>
                        <a href={Resume} download={'Resume'} ><button class="donwload-cv">Donwnload CV  <BsCloudDownload fontSize={33} /></button></a>
                    </div>
                    <div class="professional-tasks  content-text__content" id="professional-tasks" >
                        <h1>Realizações Profissionais</h1>
                            <ul>
                                <li>• Sistema para gerenciamento de oficina mecânica </li>
                                <li>• Aplicações WEB para cálculo de comissionamento comercial e médias da FIAP</li>
                                <li>• Pokedex para aprimorar os conhecimentos no consumo de API’S</li>
                                <li>• Portfolio para apresentar minhas habilidades</li>
                            </ul> 
                    </div>
                    <div class="professional  content-text__content" id="professional" >
                        <h1>Histórico Profissional</h1>
                        <h2>Analista de Sistemas - Wepapel</h2>
                        <h3>ago/2019 - nov/2021</h3>
                        <p id="professional__content">Implementação e suporte do sistema ERP, criação dos sites, artes e administração das mídias sociais e vendas.</p>
                        <h2>Agente de Vendas - Totvs</h2>
                        <h3>fev/2022 - o momento</h3>
                        <p id="professional__content">Captação, prospecção e qualificação de Leads, Prospects, Clientes e direcionamento dos respectivos para as unidades de negócio</p>
                    </div>
                    <div class="academic  content-text__content" id="academic" >
                        <h1>Acadêmico</h1>
                        <h2>Análise e desenvolvimento de sistemas - FIAP</h2>
                        <h3>fev/2022 dez/2023</h3>
                        <p id="academic_label">Graduação focada em desenvolvimento Full Stack, aplicando matérias com forte lógica de programação, Machine Learning, chatbot, DataBase, Front-End, Back-End com as tecnologias mais utilizadas no mercado</p>
                        
                    </div>
                </div>
            </SideStyles>

    );
};
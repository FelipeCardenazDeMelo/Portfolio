
// ESTE CÓDIGO SE REFERE AO SECTION SOBRE
const cards = document.querySelectorAll('.skill-box');
const descricao = document.querySelector('.texto-descricao');
const sobreCards = [
                    '<p><span>ACADÊMICO<span/></p> <br> <p>Atualmente estou no 2° semestre de Análise e desenvolvimento de sistemas na instituição FIAP.</p> <br> <p>Tenho certificados nos cursos Responsive Web Development pela FIAP e Programação e desenvolvimento de software pela XP Educação, entre outros </p> <br>',
                    '<p><span>PROFISSIONAL<span/></p> <br> <p><span class="Wepapel">WePapel<span/><p/>Trabalhei na WePapel por 2 anos e 4 meses, fui responsável pela implementação do sistema ERP e criação dos sites.</p><p><span class="TOTVS">TOTVS<span/><p>Atualmente trabalho no Marketing Operacional da TOTVS, responsável pela qualificação e direcionamento de Leads para as respectivas unidades de negócio, além de participar em diversos eventos segmentados. <p/><br>',
                    '<p><span>CONTATO<span/></p> <br> <p>Email: felipecardenazm@gmail.com</p> <br><p> Telefone: (11) 943765856</p>',
                    '<p><span>OBJETIVO<span/></p> <br> <p> Meu principal objetivo é adquirir o máximo de conhecimento e experiência possível para ser qualificado a excercer qualquer desafio tanto na vida profissional, quanto pessoal.</p> <br>',
                    
]


cards.forEach(  (elemento, index) => {
    let index1 = index;
    elemento.addEventListener('mouseover', () => {
        
        descricao.innerHTML = `<p>${sobreCards[index1]} </p>` ;
    } )
    elemento.addEventListener('mouseout', () => {
        descricao.innerHTML = 'Passe o mouse em cima para acessar o conteúdo';
    } )
} );

// ESTE CÓDIGO SE REFERE AO SECTION SOBRE


window.sr = ScrollReveal({ reset:true});
ScrollReveal({ distance: '10px' });
sr.reveal('.text1', {duration : 1200, origin: 'left'});
sr.reveal('.animacao', {duration : 1200,  origin: 'left'});
sr.reveal('.Sobre', {duration : 1600, origin:'right'});
sr.reveal('.containerProjetos', {duration : 1200, origin:'bottom'});



// ESTE CÓDIGO SE REFERE AO CONTAINER-HABILIDADES

var Vermais = document.getElementById('VerMais');
const Vermais2 = document.querySelector(".VerMais");
var containerHabilidades = document.getElementById('container-habilidades');
var Habilidades = document.getElementById("Habilidades");   
var React = document.getElementById("card-react");
var Git = document.getElementById("card-git");
var API = document.getElementById("card-api");


// ESTE CÓDIGO SE REFERE A RESPONSIVIDADE DA SECTION HABILIDADES

    function VerMais() {
        

        if (window.matchMedia("(min-width:500px)").matches) {
            if (Habilidades.style.height == "1100px") {
                Habilidades.style.height = "800px";
                containerHabilidades.style.height = "500px";
                React.style.display = "none";
                Git.style.display = "none";
                API.style.display = "none";
                Vermais2.innerHTML = "Ver Mais"
           } else {
                containerHabilidades.style.height = "900px";
                Habilidades.style.height = "1100px";
                React.style.display = "block";
                Git.style.display = "block";
                API.style.display = "block";
                Vermais2.innerHTML = "Ver Menos"
        
           }
        
        } 
        
        // RESPONSIVIDADE EM VERSÃO MOBILE
        
        else {
            if (Habilidades.style.height == "2850px") {
                Habilidades.style.height = "1700px";
                containerHabilidades.style.height = "500px";
                React.style.display = "none";
                Git.style.display = "none";
                API.style.display = "none";
                Vermais2.innerHTML = "Ver Mais"
           } else {
                containerHabilidades.style.height = "1700px";
                Habilidades.style.height = "2850px";
                React.style.display = "block";
                Git.style.display = "block";
                API.style.display = "block";
                Vermais2.innerHTML = "Ver Menos"
        
           }
        }


    }

    // BOTÕES DE HABILIDADES EM MOBILE


    var cardHTML = document.getElementById("HTML");
    var cardCSS = document.getElementById("CSS");
    var cardJS  = document.getElementById("JavaScript");
    var cardReact = document.getElementById("card-react");
    var cardGIT = document.getElementById("card-git");
    var cardAPI = document.getElementById("card-api");

        if (window.matchMedia("(max-width:500px)").matches) {

        function HTML() {

            if (cardHTML.style.height == "200px") {
                cardHTML.style.height = "320px";
            }  

            if (cardHTML.style.height == "320px") {
                cardHTML.style.height = "200px";
            }
            
        }

        function CSS() {

            if (cardCSS.style.height == "200px") {
                cardCSS.style.height = "320px";
            }  

            if (cardCSS.style.height == "320px") {
                cardCSS.style.height = "200px";
            }
            
        }

        function JS() {

            if (cardJS.style.height == "200px") {
                cardJS.style.height = "320px";
            }  

            if (cardJS.style.height == "320px") {
                cardJS.style.height = "200px";
            }
            
        }

        function REACT() {

            if (cardReact.style.height == "200px") {
                cardReact.style.height = "320px";
            }  

            if (cardReact.style.height == "320px") {
                cardReact.style.height = "200px";
            }
            
        }

        function GIT() {

            if (cardGIT.style.height == "200px") {
                cardGIT.style.height = "320px";
            }  

            if (cardGIT.style.height == "320px") {
                cardGIT.style.height = "200px";
            }
            
        }

        function APi() {

            if (cardAPI.style.height == "200px") {
                cardAPI.style.height = "320px";
            }  

            if (cardAPI.style.height == "320px") {
                cardAPI.style.height = "200px";
            }
            
        }


    }
    
    

    

   
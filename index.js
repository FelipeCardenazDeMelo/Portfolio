
// ESTE CÓDIGO SE REFERE AO SECTION SOBRE
const skills = document.querySelectorAll('.skill-box');
const descricao = document.querySelector('.texto-descricao');
const sobreSkill = [
                    '<p><span>ACADÊMICO<span/></p> <br> <p>Atualmente estou no 2 semestre de Análise e desenvolvimento de sistemas na instituição FIAP.</p> <br> <p>Tenho certificados nos cursos Responsive Web Development pela FIAP e Progamação e desenvolvimento de software pela XP Educação, entre outros </p> <br>',
                    '<p><span>PROFISSIONAL<span/></p> <br> <p><span class="Wepapel">WePapel<span/><p/>Trabalhei na WePapel por 2 anos e 4 meses, fui responsável pela implementação do sistema ERP e criação dos sites.</p><p><span class="TOTVS">TOTVS<span/><p>Atualmente trabalho no Marketing Operacional da TOTVS, responsável pela qualificação e dircionamento de Leads para as respectivas unidades de negócio, além de participar em diversos eventos segmentados. <p/><br>',
                    '<p><span>CONTATO<span/></p> <br> <p>Email: felipecardenazm@gmail.com</p> <br><p> Telefone: (11)-943765856</p>',
                    '<p><span>OBJETIVO<span/></p> <br> <p> Meu principal objetivo é adquirir o máximo de conhecimento e experiência possível para ser qualificado a excercer qualquer desafio tanto na vida profissional, quanto pessoal.</p> <br>',
                    
]


skills.forEach(  (elemento, index) => {
    let index1 = index;
    let elemento1 = elemento;
    elemento.addEventListener('mouseover', (evento) => {
        
        descricao.innerHTML = `<p>${sobreSkill[index1]} </p>` ;
    } )
    elemento.addEventListener('mouseout', (evento, elemento,) => {
        descricao.innerHTML = 'Passe o mouse em cima para acessar o conteúdo';
    } )
} );

// ESTE CÓDIGO SE REFERE AO SECTION SOBRE


window.sr = ScrollReveal({ reset:true});
ScrollReveal({ distance: '15px' });
sr.reveal('.text1', {duration : 1200, origin: 'left'});
sr.reveal('.animacao', {duration : 1200,  origin: 'left'});
sr.reveal('.Sobre', {duration : 1600, origin:'right'});
sr.reveal('.project', {duration : 1200, origin:'bottom'});
sr.reveal('.containerProjetos', {duration : 1200, origin:'bottom'});


// ESTE CÓDIGO SE REFERE AO CONTAINER-HABILIDADES

var Vermais = document.getElementById('VerMais');
var containerHabilidades = document.getElementById('container-habilidades');
var Habilidades = document.getElementById("Habilidades");   

 function VerMais(){
    Vermais.style.backgroundColor = 'red';
    containerHabilidades.style.height = "700px";
    Habilidades.style.height = "900px";

    if H
}
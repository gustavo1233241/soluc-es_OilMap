

//LINGUAGEM
function changeColor(side) {
  var leftButton = document.getElementById('leftButton');
  var rightButton = document.getElementById('rightButton');


  leftButton.style.color = "white";
  rightButton.style.color = "white";


  leftButton.classList.remove('selected');
  rightButton.classList.remove('selected');


  if (side === 'left') {
    leftButton.classList.add('selected');
    rightButton.style.color = "#28a745";

    document.getElementById('titulo').innerHTML = "O petróleo é a <br/> energia que move o <br/> mundo!";

  } else if (side === 'right') {
    rightButton.classList.add('selected');
    leftButton.style.color = "#28a745";

    document.getElementById('titulo').innerHTML = "Oil is the energy <br/> that moves the <br/> world!";
  }
}

//CONTRASTE
let isContrast = false;

function toggleContrast() {
  const button = document.querySelector('.circle-button');
  const elements = document.querySelectorAll(':not(button)');

  isContrast = !isContrast;

  elements.forEach((element) => {
    if (isContrast) {
      element.classList.add('contrast');
    } else {
      element.classList.remove('contrast');
    }
  });

  document.body.style.filter = isContrast ? 'grayscale(1)' : 'grayscale(0)';

  button.style.background = isContrast
    ? 'linear-gradient(to right, white 50%, black 50%)'
    : 'linear-gradient(to right, black 50%, white 50%)';
}

//A+A-
function increaseFontSize() {
  var titulo = document.getElementById('titulo');
  var estilo = window.getComputedStyle(titulo, null).getPropertyValue('font-size');
  var tamanhoAtual = parseFloat(estilo);
  titulo.style.fontSize = (tamanhoAtual + 5) + 'px';
}

function decreaseFontSize() {
  var titulo = document.getElementById('titulo');
  var estilo = window.getComputedStyle(titulo, null).getPropertyValue('font-size');
  var tamanhoAtual = parseFloat(estilo);
  titulo.style.fontSize = (tamanhoAtual - 5) + 'px';
}



// parte gustavo

const btn=document.querySelector('#btnAcessibilidadecontraste');
const html = document.querySelector('html');
let interruptor = true;

btn.addEventListener('click' , () => { 
  
if(interruptor){
    html.setAttribute('class', 'corpo');
    interruptor = false;
}
else{
html.removeAttribute('class','corpo')
interruptor = true;
}
})

const btn4=document.querySelector('#btnAcessibilidadecontraste1');

console.log(btn4);

btn4.addEventListener('click' , () => { 
    
if(btn4.checked){
    html.setAttribute('class', 'corpo');
}
else{
html.removeAttribute('class','corpo')
}
});

const btnletra=document.querySelector('#btnAcessibilidadeletra');
const html1 = document.querySelector('h2');
let interruptor1 = true;

btnletra.addEventListener('click' , () => { 
   
if(interruptor1){
    html1.setAttribute('class', 'letra');
    interruptor1 = false;
}
else{
html1.removeAttribute('class','letra')
interruptor1 = true;
}
})

const btnletra1=document.querySelector('#btnAcessibilidadeletra1');

console.log(btnletra1)
btnletra1.addEventListener('click' , () => { 
    
if(btnletra1.checked){
    html1.setAttribute('class', 'letra');
}
else{
html1.setAttribute('class','titulo');
}
})

const btnletra2=document.querySelector('#btnAcessibilidadeletra2');
console.log(btnletra2)
btnletra2.addEventListener('click' , () => { 

if(btnletra2.checked){
    html1.setAttribute('class', 'letra2');
}
else{
html1.setAttribute('class','titulo');
}
})

var titulo = document.querySelector("#titulo");
var tituloCelular = document.querySelector("#titulo-celular")
var botao = document.querySelector("#troca-titulo");
var botaopt = document.querySelector("#troca-titulo1");
var btningcel = document.querySelector('#trocass12')
botao.addEventListener("click", function(){

    titulo.innerHTML = "Oil is the energy <br/> that moves the <br/> world!";  
    tituloCelular.innerHTML = "You are on: PETROBRAS WEBSITE"
    botaopt.addEventListener("click", function(){
    titulo.innerHTML = "O petróleo é a <br/> energia que move o <br/> mundo!";  
    tituloCelular.innerHTML = "Você está em: SITE PETROBRAS"
    })
})    
btningcel.addEventListener("click", function(){
    if(btningcel.checked){  
        titulo.innerHTML = "Oil is the energy <br/> that moves the <br/> world!";  
        tituloCelular.innerHTML = "You are on: PETROBRAS WEBSITE"
    }
    else{
            titulo.innerHTML = "O petróleo é a <br/> energia que move o <br/> mundo!";  
            tituloCelular.innerHTML = "Você está em: SITE PETROBRAS"    
    }   
})


/*pesquisa Campo de baúna */

function redirecionar() {
  var valorInputPesquisa = document.getElementById("pesquisa").value;

  if (valorInputPesquisa != ""){
    window.location.href = "outra_pagina.html";
  }

  document.getElementById("pesquisa").value = "";

}

/*pesquisa em acessibilidade */
function redirecionar1() {
  var valorInputPesquisa = document.getElementById("pesquisa1").value;

  if (valorInputPesquisa != ""){
    window.location.href = "outra_pagina.html";
  }

  document.getElementById("pesquisa1").value = "";

}
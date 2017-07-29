'use strict';
var bigMac = document.getElementById("btn-bigMac");
var btnNavShow = document.getElementById("btn-navShow");

bigMac.addEventListener("click", navMobile);
function navMobile() {
  btnNavShow.classList.toggle("listShow");
}

var navMenu = document.querySelectorAll(".nav-mobile a");
for (var i = 0; i < navMenu.length; i++) {
  navMenu[i].addEventListener("click", navMobile);
}

var pokemonName = document.getElementById('name');
var picture = document.getElementById('picture');
var num = document.getElementById('num');
var type= document.getElementById('type');

function requestInfo(number) {
  var request = new XMLHttpRequest();
  request.open('GET', 'http://pokeapi.co/api/v2/pokemon/' + number + '/', true);
  request.addEventListener('load', function(){
    refreshWeb(request);
  });
  request.addEventListener('error', function() {
    console.log('Error al tratar de conectarse con el servidor');
  });
  request.send();
}

function refreshWeb(request){
  if(request.status >= 200 && request.status < 400) {
    var data = JSON.parse(request.responseText);
    var container = document.querySelector('.cards-container');
    container.innerHTML += '<a><img src="' + data.sprites.front_default +'"></a><p>Nombre:' + data.name +'</p> <p>Número:' + data.id +'</p>';
    // container.innerHTML += '<p>Nombre:' + data.name +'</p>';
    // container.innerHTML += '<p>Número:' + data.id +'</p>';
    var types = data.types;
    if(types.length === 1){
      container.innerHTML += '<p>Tipo:' + types[0].type.name +'</p>';
    } else {
      container.innerHTML += '<p>Tipo:' + types[0].type.name + '/' + types[1].type.name +'</p>';
    }
  } else {
    console.log('Error del servidor, puede que el archivo no exista o que se haya producido un error interno en el servidor');
  }
}
requestInfo(13);
requestInfo(33);
requestInfo(25);
requestInfo(1);
requestInfo(12);
requestInfo(151);

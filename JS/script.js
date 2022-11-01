var formu = document.getElementById("formu");


function addElemento(texto){
    var capa = document.getElementById("formu");
    var h1 = document.createElement("h1");
    h1.innerHTML = texto;
    formu.appendChild(h1);
}


const fragment = document.createDocumentFragment();


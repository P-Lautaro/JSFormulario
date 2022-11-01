var formu = document.getElementById("formu");


function addElemento(texto){
    var capa = document.getElementById("formu");
    var h1 = document.createElement("h1");
    h1.innerHTML = texto;
    formu.appendChild(h1);
}


const fragment = document.createDocumentFragment();


for (let i = 0; i< 7000; i++){
    const div = document.createElement("div");
    div.textContent = 'Item nuevo ${i}';
    fragment.appendChild(div);
}

document.body.appendChild(fragment);
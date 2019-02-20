function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}


function showAndHide(el) {
    var display = document.getElementById(el).style.display;
   
    if(display == "none") {
        document.getElementById(el).style.display = 'block';
    }
    var texto = document.getElementById("nameTask").value;
    gravarQuadroNovo(texto);

        
    
}

function gravarQuadroNovo(textoQuadro){
    var div = document.getElementById("novoQuadro");
    div.innerHTML = "";
    div.innerHTML  = textoQuadro;
}
let paisTriat, resultado, Nombre, Capital;

iniciar ()

function iniciar (){
    paisTriat = prompt("Pais que vols veure");
    (console.log (paisTriat));
    (llamarAPI());
}



function llamarAPI(){

    fetch(`https://restcountries.com/v3.1/all`)
    .then(function cogerRespuesta(respuesta){
        return respuesta.json();
    }).then(function cogerData(data){

        resultado = data.results;
        Nombre = resultado[0].name.common;
        Capital = resultado[0].capital;

        print();
    }
    
)}


function print(){
    document.getElementById("print").innerHTML += 
    `<div id="pais">
    <h1>${Nombre}</h1>
    <h2>${Capital}</h2> 
    </div>
    `
}
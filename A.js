//crear una variable para guardar el id del boton del html.
let boton = document.getElementById("Btnsumar"); 
//El boton estará atento cuando se de click realice una acción.
boton.addEventListener("click", sumarnumeros);
//Todas las operaciones se realizan con una funcion y el nombre de la función.

function funcion(){
    var funcion;
}
var numero;

const Btnsumar = document.getElementById("Btnsumar")
Btnsumar .addEventListener("click", sumar)
function sumar(){
   const varn1 = Number(document.getElementById("num1").value);
   const varn2 = Number(document.getElementById("num2").value);
   const r= varn1 + varn2;
   alert("El resultado es:" + r);
   rsuma.innerText = rsuma;
}

function sumarnumeros(){
    let varnumero1;
    let varnumero2;
    let varresultado;
    varnumero1 = Number(document.getElementById("numero1").value);
    varnumero2 = Number(document.getElementById("numero2").value);
    varresultado = varnumero1 + varnumero2;
    let imprimir = document.getElementById("imprimirresultadosuma");
    imprimir.innerText = varresultado;
    const audio = document.getElementById("audio");
    audio.play();
}

const boton6 = document.getElementById("Btnverificar").addEventListener("click", verificarcalificación);

function verificarcalificación(){
    let varnumero1 = Number(document.getElementById("numero11").value);
    let printresult = document.getElementById("imprimirresultadoverificar");
//Se utiliza para comparar dos elementos para mostrar un resultado verdadero o falso.
    if(varnumero1 >= 8 ){
        printresult.innerText = "Aprobada"; 
    }else{
        printresult.innerText = "Reprobada";
        const audio = document.getElementById("audio");
        audio.play();
    }
}


const botonascendente = document.getElementById("Btnnumeros").addEventListener("click", mostrarnumeros);

function mostrarnumeros(){

    const imprimirnumeros = document.getElementById("imprimirresultadonúmeros");
    imprimirnumeros.innerHTML = " ";

    for(let x=0; x<=100; x++){

        const lista = document.createElement("li");

        lista.setAttribute("class", "list-group-item");

        lista.innerText = `${x}`;

        imprimirnumeros.appendChild(lista);
    }
}
//var; //variable global
function funcion(){
     var funcion;
}
var numero;

Btns = document.getElementById("Btns")
Btns .addEventListener("click", sumar)
function sumar(){
    varn1 = Number(document.getElementById("sn1").value);
    varn2 = Number(document.getElementById("sn2").value);
    r= varn1 + varn2;
    let rs = document.getElementById("rs");
    rs.innerText = r;
}

Btnr = document.getElementById("Btnr")
Btnr .addEventListener("click", restar)
function restar(){
    varn1 = Number(document.getElementById("rn1").value);
    varn2 = Number(document.getElementById("rn2").value);
    r= varn1 - varn2;
    let rr = document.getElementById("rr");
    rr.innerText = r;
}

Btnx = document.getElementById("Btnx")
Btnx .addEventListener("click", multiplicar)
function multiplicar(){
    varn1 = Number(document.getElementById("xn1").value);
    varn2 = Number(document.getElementById("xn2").value);
    r= varn1 * varn2;
    let rx = document.getElementById("rx");
    rx.innerText = r;
}

Btnd = document.getElementById("Btnd")
Btnd .addEventListener("click", division)
function division(){
    varn1 = Number(document.getElementById("dn1").value);
    varn2 = Number(document.getElementById("dn2").value);
    r= varn1 / varn2;
    let rd = document.getElementById("rd");
    rd.innerText = r;
}


Btna = document.getElementById("Btna").addEventListener("click", ascendentes);

function ascendentes(){

    imprimirnumeros = document.getElementById("ra");
    ra.innerHTML = "";

    for(let x=0; x<=100; x++){

        lista = document.createElement("li");

        lista.setAttribute("class", "list-group-item");

        lista.innerText = `${x}`;

        ra.appendChild(lista);
    }
}

Btnv = document.getElementById("Btnv").addEventListener("click", verificar);

function verificar(){
    let varn1 = Number(document.getElementById("vn1").value);

    if(varn1 >= 8 ){
        let a = document.getElementById("a");
        a.innerText = "Aprobada"; 
    }else{
        let a = document.getElementById("a");
        a.innerText = "Reprobada";
        audio = document.getElementById("audio");
        audio.play();
    }
}
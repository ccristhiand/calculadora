var operandoA;
var operandoB;
var operacion;

function init(){
    //VARIABLES
    var cero=document.getElementById("cero");
    var uno=document.getElementById("uno");
    var dos=document.getElementById("dos");
    var tres=document.getElementById("tres");
    var cuatro=document.getElementById("cuatro");
    var cinco=document.getElementById("cinco");
    var seis=document.getElementById("seis");
    var siete=document.getElementById("siete");
    var ocho=document.getElementById("ocho");
    var nueve=document.getElementById("nueve");
    var suma=document.getElementById("suma");
    var resta=document.getElementById("resta");
    var multiplicacion=document.getElementById("multiplicacion");
    var divicion=document.getElementById("divicion");
    var resultado=document.getElementById("resultado");
    var reset=document.getElementById("reset");

    //EVENTOS

    cero.onclick=function(e){
        resultado.textContent=resultado.textContent+0;
    }
    uno.onclick=function(e){
        resultado.textContent=resultado.textContent+1;
    }
    dos.onclick=function(e){
        resultado.textContent=resultado.textContent+2;
    }
    tres.onclick=function(e){
        resultado.textContent=resultado.textContent+3;
    }
    cuatro.onclick=function(e){
        resultado.textContent=resultado.textContent+4;
    }
    cinco.onclick=function(e){
        resultado.textContent=resultado.textContent+5;
    }
    seis.onclick=function(e){
        resultado.textContent=resultado.textContent+6;
    }
    siete.onclick=function(e){
        resultado.textContent=resultado.textContent+7;
    }
    ocho.onclick=function(e){
        resultado.textContent=resultado.textContent+8;
    }
    nueve.onclick=function(e){
        resultado.textContent=resultado.textContent+9;
    }

    reset.onclick=function(e){
        resetear(); 
    }

    suma.onclick=function(e){
        operandoA=resultado.textContent;
        operacion = "+";
        limpiar();
    }

    resta.onclick=function(e){
        operandoA=resultado.textContent;
        operacion = "-";
        limpiar();
    }

    multiplicacion.onclick=function(e){
        operandoA=resultado.textContent;
        operacion = "*";
        limpiar();
    }

    divicion.onclick=function(e){
        operandoA=resultado.textContent;
        operacion = "/";
        limpiar();
    }
    reset.onclick=function(e){
        resetear();
    }
    igual.onclick=function(e){
        operandoB=resultado.textContent;
        resolver();
    }
}


function limpiar(){
    resultado.textContent="";
}

function resetear(){
    resultado.textContent="";
    operandoA=0;
    operandoB=0;
    operacion="";
}

function resolver(){
    var res=0;
    switch(operacion){
        case "+":
            res=parseFloat(operandoA)+parseFloat(operandoB);
            break;
        case "-":
            res=parseFloat(operandoA)-parseFloat(operandoB);
            break;
        case "*":
            res=parseFloat(operandoA)*parseFloat(operandoB);
            break;
        case "/":
            res=parseFloat(operandoA)/parseFloat(operandoB);
            break;
    }
    resetear();
    resultado.textContent=res;
}
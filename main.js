/*
Datos para la encriptacion/desencriptacion

La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"

La página debe tener campos para
inserción del texto que será encriptado o desencriptado, y el usuario debe poder escoger entre as dos opciones.
El resultado debe ser mostrado en la pantalla.
Extras:
 
- Un botón que copie el texto encriptado/desencriptado para la sección de transferencia, o sea que tenga la misma funcionalidad del ctrl+C o de la opción "copiar" del menú de las aplicaciones.

Tenemos un periodo de tiempo de cuatro semanas para desarrollar el proyecto y vamos a trabajar con el sistema ágil de desarrollo, utilizando el Trello de la siguiente forma:

La columna Listos para iniciar presenta las tarjetas con elementos que aun no fueron desarrollados.
En la columna En Desarrollo estarán los elementos que estés desarrollando en el momento. Al iniciar una tarea, podrás mover la tarjeta que contiene dicha tarea para esta columna.
En la columna Pausado estarán los elementos que comenzaste a desarrollar, pero necesitaste parar por algún motivo.
Por fin, en la columna Concluido estarán los elementos ya concluidos.
El Trello es una herramienta de uso individual para que puedas controlar el progreso de tus actividades, pero no será evaluada.

Buen proyecto!
*/

//Definicion de variables de entrada
const botonEncriptar = document.querySelector('#botonEncriptar');
const botonDesencriptar = document.querySelector('#botonDesencriptar');
const botonLimpiar = document.querySelector('#botonLimpiar')

function Encriptar() {
    var textoEntrada = document.getElementById('textoentrada').value;
    var textoencriptado = "";

    for (var posicion = 0; posicion < textoEntrada.length ; posicion++) {		
        if (textoEntrada[posicion] == 'a'){
            textoencriptado = textoencriptado + "ai";
        }
        else if(textoEntrada[posicion] == 'e') {
            textoencriptado = textoencriptado + "enter";
        }
        else if(textoEntrada[posicion] == 'i') {
            textoencriptado = textoencriptado + "imes";
        }
        else if(textoEntrada[posicion] == 'o') {
            textoencriptado = textoencriptado + "ober";
        }
        else if(textoEntrada[posicion] == 'u') {
            textoencriptado = textoencriptado + "ufat";
        } 
        else {
            textoencriptado = textoencriptado + textoEntrada[posicion];
        } 
    }

    document.getElementById('resultados').innerHTML = "<textarea id=\"textoEncriptadoJS\" value=\" "+textoencriptado+"\">"+textoencriptado+"</textarea><button id=\"botonCopiar\">Copiar texto</button>";

    var botonCopiar = document.querySelector('#botonCopiar');

       
        function TextoCopiado()
        {
            
            //navigator.clipboard.writeText(textoEncriptado);
            var contenido = document.querySelector('#textoEncriptadoJS');
            contenido.select();
            document.execCommand("copy");
        }

        botonCopiar.onclick = TextoCopiado;
    
}

function Desencriptar() {
    var textoEntrada = document.getElementById('textoentrada').value;
    var textodesencriptado = "";

    for (var posicion = 0; posicion < textoEntrada.length ; posicion++) {	

        if (textoEntrada[posicion] == 'a'){
            textodesencriptado = textodesencriptado + "a";
            posicion = posicion + 1
        }
        else if(textoEntrada[posicion] == 'e') {
            textodesencriptado = textodesencriptado + "e";
            posicion = posicion + 4
        }
        else if(textoEntrada[posicion] == 'i') {
            textodesencriptado = textodesencriptado + "i";
            posicion = posicion + 3
        }
        else if(textoEntrada[posicion] == 'o') {
            textodesencriptado = textodesencriptado + "o";
            posicion = posicion + 3
        }
        else if(textoEntrada[posicion] == 'u') {
            textodesencriptado = textodesencriptado + "u";
            posicion = posicion + 3
        } 
        else {
            textodesencriptado = textodesencriptado + textoEntrada[posicion];
        } 
    }

    document.getElementById('resultados').innerHTML = "<textarea id=\"textoEncriptadoJS\" value=\" "+textodesencriptado+"\">"+textodesencriptado+"</textarea><button id=\"botonCopiar\">Copiar texto</button>";

    var botonCopiar = document.querySelector('#botonCopiar');

       
        function TextoCopiado()
        {
            
            //navigator.clipboard.writeText(textoEncriptado);
            var contenido = document.querySelector('#textoEncriptadoJS');
            contenido.select();
            document.execCommand("copy");
        }

        botonCopiar.onclick = TextoCopiado;

}

function Limpiar(){
    document.getElementById("textoentrada").value = "";
    document.getElementById("textoEncriptadoJS").value = "";
}

botonEncriptar.onclick = Encriptar;
botonDesencriptar.onclick = Desencriptar;
botonLimpiar.onclick = Limpiar
"use strict"
let form = document.querySelector('#form');

let captcha = document.querySelector("#captchavalue").innerHTML = Math.floor((Math.random()*700)+1);

let Inputcaptcha = document.querySelector("#inputcaptcha");


let btn = document.querySelector("#btn");
btn.addEventListener("click", comprobar);


function comprobar(e){
    let input = document.querySelector("#inputcaptcha").value;

    e.preventDefault();

    let formData = new FormData(form);
    let nombre = formData.get("nombre");
    let email = formData.get("email");
    let password = formData.get("password");

    
    if( input == captcha){
        document.querySelector(".resultado").innerHTML = "El numero ingresado es correcto y su formulario fue enviado";
        console.log (nombre, email, password);
    }
    else{
        document.querySelector(".resultado").innerHTML = "El numero ingresado no es correcto, para que se envien sus datos, intente otra vez";
    }
}



document.querySelector("#btn-agregar1").addEventListener("click", agregar1);


let precargado = [
    {

        nombre : "ivandoss",
        edad: "25",
        videojuego: "Lol",
    },

    {
        nombre: "Lucas Celse",
        edad: "2494380835",
        videojuego: "A. Bravo 919",
    },

    {
        nombre: "Melanie Flores",
        edad: "249419823",
        videojuego: "Avellaneda 566",
    }
];


function agregar1(e) {

    e.preventDefault();

  let Input1 = document.getElementById("input_nombre");
  let nombre = Input1.value;
  let Input2 = document.getElementById("input_edad");
  let edad = Input2.value;
  let Input3 = document.getElementById("input_juego");
  let videojuego = Input3.value;

    let Pedidos = {
        nombre: nombre,
        edad: edad,
        videojuego: videojuego,
    }
    precargado.push(Pedidos);
    console.table(precargado);
    
    mostrar();
    Input1.value = "";
    Input2.value = "";
    Input3.value = "";
   

}

function mostrar() {
    
    let tabla = document.getElementById("tabla-din");
    tabla.innerHTML = "";
    for (const item of precargado) {
    tabla.innerHTML += `<tr>
                           <td> ${item.nombre}</td>
                           <td> ${item.edad}</td>
                           <td> ${item.videojuego}</td>
                       </tr>`;
        
    }
}


mostrar();

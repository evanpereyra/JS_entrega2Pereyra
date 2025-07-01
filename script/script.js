 /*
************************************************
* Segunda Entrega "DESAFIO JAVASCRIPT"         *
* Autor: Evangelina Pereyra                    *
* Titulo:   Veterinaria                        *
* Descripcion: Registro Cliente y Mascotas     *
************************************************

*/

import { cargarDatosClientes, cargarDatosMascotas } from "../datos/datos.js";
import { hash} from "../metodos/metodo.js"


 
 
AbortController
 let cliente = null;

 /* botones */

const botonLogout = document.getElementById('btnLogout');
const botonAgregar = document.getElementById('btnAltaMascota');
const botonReserva = document.getElementById('btnReserva');
//const botonReserva = document.getElementById('btnReserva');


 /* Funcion login*/

 document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('btnLogin').addEventListener('click', login);
});


 function login() {
  const username = document.getElementById("username").value;
  const password = hash(document.getElementById("password").value);
  const message = document.getElementById("message");
  
  const loggedInUser = localStorage.getItem("loggedInUser");
  console.log(loggedInUser)
  if (loggedInUser === username) {
     document.getElementById("message").textContent = "Ya estás logueado como " + loggedInUser;
     cliente = JSON.parse(localStorage.getItem("User")) ;
     console.log(cliente)
     mostrarPanel()

  }
  else {
  const users = cargarDatosClientes()
  cliente = users.find((cliente) => cliente.usuario === username && cliente.contrasenia === password);
  console.log(cliente)
  if (cliente != null) {
    localStorage.setItem("User", JSON.stringify(cliente));
    localStorage.setItem("loggedInUser", cliente.usuario);
    message.textContent = "Inicio de sesión exitoso!";
    mostrarPanel()
  } else {
    message.textContent = "Usuario o contraseña incorrectos.";
  }
}
}



/* funcion logout*/
botonLogout.addEventListener('click' , () => {
  localStorage.removeItem('loggedInUser');
  localStorage.removeItem('User');
  cliente = null;
  document.getElementById('panel').style.display = 'none';
  document.getElementById('login').style.display = 'block';
  document.getElementById("message").textContent = ""; 
  document.getElementById("message").textContent = ""; 
})


function mostrarPanel() {
      const men =cliente.nombre + " "+ cliente.apellido
      document.getElementById('clienteNombre').textContent = men;
      document.getElementById('login').style.display = 'none';
      document.getElementById('panel').style.display = 'block';
      mostrarMascotasActuales();
      actualizarMascotas();
      actualizarTurnos();
}

/*agregar*/
botonAgregar.addEventListener('click' , () =>{
  const nombre = document.getElementById('nombreMascota').value.trim();
  const tipo = document.getElementById('tipoMascota').value;
  if (!nombre) return alert('Ingresá el nombre de la mascota');

  const mascotas = obtenerMascotas();
  mascotas.push({ nombre, tipo });
  guardarMascotas(mascotas);
  actualizarMascotas();
})

function mostrarMascotasActuales(){
 const lista = []; 
 const cont = document.getElementById('listaMascotas');
 cont.innerHTML = '';

 const select = document.getElementById('mascotaTurno');
 select.innerHTML = ''; 

 console.log(cargarDatosMascotas())
 cargarDatosMascotas().forEach((mascota, i) => {
    if(mascota.usuario === cliente.usuario){
      const m = {nombre : mascota.nombre,
                 tipo: mascota.tipo
                }
      lista.push(m)
      
 } 
 guardarMascotas(lista)
 obtenerMascotas()
});

}

function obtenerMascotas() {
      return JSON.parse(localStorage.getItem(`mascotas_${cliente.usuario}`) || '[]');
    }

function guardarMascotas(mascotas) {
      localStorage.setItem(`mascotas_${cliente.usuario}` , JSON.stringify(mascotas));
    }


function eliminarMascota(index) {
  const mascotas = obtenerMascotas();
  mascotas.splice(index, 1);
  guardarMascotas(mascotas);
  actualizarMascotas();
}

function actualizarMascotas() {
  const cont = document.getElementById('listaMascotas');
  cont.innerHTML = '';

  const select = document.getElementById('mascotaTurno');
  select.innerHTML = '';
  obtenerMascotas().forEach((mascota, i) => {
  const div = document.createElement('div');
  div.className = 'mascota-item';

  const nombreHTML = document.createElement('strong');
  nombreHTML.textContent = mascota.nombre;

  const tipoHTML = document.createTextNode(` (${mascota.tipo})`);

  const btn = document.createElement('button');
  btn.textContent = 'Eliminar';
  btn.addEventListener('click', () => eliminarMascota(i));

  div.appendChild(nombreHTML);
  div.appendChild(tipoHTML);
  div.appendChild(btn);
  cont.appendChild(div);

  const opt = document.createElement('option');
  opt.value = mascota.nombre;
  opt.textContent = mascota.nombre;
  select.appendChild(opt);
});

}

/*turno*/

botonReserva.addEventListener('click' , () => {
  
  reservarTurno()


})



    function obtenerTurnos() {
      return JSON.parse(localStorage.getItem(`turnos_${cliente.usuario}`) || '[]');
    }

    function guardarTurnos(turnos) {
      localStorage.setItem(`turnos_${cliente.usuario}`, JSON.stringify(turnos));
    }

    function reservarTurno() {
      const fecha = document.getElementById('fechaTurno').value;
      const mascota = document.getElementById('mascotaTurno').value;
      if (!fecha || !mascota) return alert('Completá todos los campos');

      const turnos = obtenerTurnos();
      turnos.push({ fecha, mascota });
      guardarTurnos(turnos);
      actualizarTurnos();
    }

    function actualizarTurnos() {
      const cont = document.getElementById('listaTurnos');
      cont.innerHTML = '<h4>Turnos reservados</h4>';
      obtenerTurnos().forEach(turno => {
        const div = document.createElement('div');
        div.textContent = `${turno.fecha} - ${turno.mascota}`;
        cont.appendChild(div);
      });
    }


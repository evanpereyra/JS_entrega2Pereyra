export function cargarDatosClientes() {

    const Usuario = [
         {
           nombre: "Administrador",
           apellido: "Administrador",
           usuario: "Admin",
           contrasenia: "Admin"          

         }, 

         {
           dni:42282463,
           nombre: "Juan",
           apellido: "Perez",
           usuario: "jperez",
           contrasenia: 2451813   //pass123     

         }
         , 

         {
          dni: 25832704 , 
          nombre: "Mérida Elionor",
          apellido: "Altamira",
          usuario: "mealtamira",
          contrasenia: 3635070   //    pass456   
            //       

         }
         ,

         {
          dni: 43385259,
          nombre: "Pedro Salvador",
          apellido: "Lopez",
          usuario: "pslopez",
          contrasenia: 4818327       // pass789   

         }
         , 

         {
          dni: 36666997, 
          nombre: "Maria Aurora",
          apellido: "Sleeper",
          usuario: "masleeper",
          contrasenia: 2462763   //      "pass147"

         }

    ]

    return Usuario

} 


export function cargarDatosMascotas() {

    const Mascotas = [
  {
    nombre: "FIRULAIS",
    tipo: "perro",
    usuario: "jperez",
    edad: 4
  },
  {
    nombre: "MISHI", 
    tipo: "gato",
    usuario: "masleeper",
    edad: 2
  },
  {
    nombre: "COPITO", 
    tipo: "conejo",
    usuario: "masleeper",
    edad: 1
  },
  {
    nombre: "CLARA", 
    tipo: "gallina",
    usuario: "Sofía",
    edad: 3
  },
  {
    nombre: "ROCKY", 
    tipo: "perro",
    usuario: "Juan",
    edad: 5
  },
  {
    nombre: "LUNA", 
    tipo: "gato",
    usuario: "María",
    edad: 4
  },
  {
    nombre: "TITO", 
    tipo: "loro",
    usuario: "Sebastián",
    edad: 2
  },
  {
    nombre: "PELUSA", 
    tipo: "conejo",
    usuario: "Carla",
    edad: 1
  },
  {
    nombre: "NEGRA", 
    tipo: "gallina",
    usuario: "Ana",
    edad: 2
  },
  {
    nombre: "TOBY", 
    tipo: "perro",
    usuario: "martin",
    edad: 6
  }
]


    return Mascotas

} 


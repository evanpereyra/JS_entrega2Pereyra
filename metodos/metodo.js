 
// funcion de hash 

 export function hash(str) {
      let hash = 0;
      const constante = 73
      console.log("ingreso al hash", str)
      for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = (hash + char) * constante;
     }
     let maxHash = Math.pow(10, str.length)
     if ( hash > maxHash ) { hash = hash % maxHash }
     console.log("el hash es", hash)
     return hash;
    } 
    

    // validar usuario

    export function validarUsuario(c , u, p) 
    {
        for(let i=0; i < c.length ;  i ++){
       
        if (c[i].usuario === u && c[i].contrasenia === p )
        { 
            console.log("ingreso Aca")
            
            return c[i]
        }
        }
        
        return undefined
   


    }



    
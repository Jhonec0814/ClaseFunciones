//FUNCION TRADICIONAL
// Esta es una función que recibe un parametro y lo utiliza para saludar
/*
function saludar(nombreUsuario){

    return(`Hola ${nombreUsuario} todo bien mi pae`)

}
// Para utilizar una función es necesario llamarla para que funcione
console.log(saludar("Batman")) */


// FUNCION DE FLECHA

// One way
/*let saludar=(nombreUsuario)=>{
    return(`Hey ${nombreUsuario} you're a bitch`)
}
console.log(saludar("Britney"))*/

// Another way

let saludar=nombreUsuario => `Hey ${nombreUsuario} you're a bitch`
console.log(saludar("Britney"))



// Definimos el registro con un array
let registroPersonas = [
{
    nombre: "Camila",
    edad: 19,
    ciudad: "Maldonado"
},

{
nombre: "Nicolas",
edad: 26,
ciudad: "Nueva Helvecia"
},

{
    nombre: "Mateo",
    edad: 20,
    ciudad: "Castillos"
},
]
// Accedemos a las propiedades de cada persona en el registro
console.log(registroPersonas[0].nombre); // Imprime "Camila"
console.log(registroPersonas[1].edad); // Imprime 26
console.log(registroPersonas[2].ciudad); // Imprime "Castillos"


// Agregamos una propiedad al registro
registroPersonas[0].profesion = "Estudiante";
console.log(registroPersonas[0].profesion); // Imprime "Estudiante"

// Eliminamos una propiedad del registro
delete registroPersonas[1].ciudad;
console.log(registroPersonas[1].ciudad); // Imprime "undefined"

// Modificamos una propiedad del registro
registroPersonas[2].edad = 21;
console.log(registroPersonas[2].edad); // Imprime 21

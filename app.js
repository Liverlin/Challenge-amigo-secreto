// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Declaramos el arreglo de amigos de forma global
const amigos = [];

function agregarAmigo() {
  // Obtenemos el elemento del campo de entrada (por id o selector)
    const inputNombre = document.getElementById('amigo');
    const nombre = inputNombre.value.trim(); // eliminamos espacios en blanco al inicio y al final

    // Validamos que el campo no esté vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Actualizamos el array de amigos agregando el nombre
    amigos.push(nombre);
    console.log("Amigos:", amigos); // para ver en consola el array actualizado

    // Limpiamos el campo de entrada
    inputNombre.value = "";

    mostrarAmigos()
}

function mostrarAmigos() {
    // Obtener el elemento de la lista por su id
    const lista = document.getElementById("listaAmigos");
    
    // Limpiar la lista existente
    lista.innerHTML = "";
    
    // Iterar sobre el arreglo amigos y crear elementos <li> para cada uno
    for (let i = 0; i < amigos.length; i++) {

        // Crear un nuevo elemento de lista
        const li = document.createElement("li");
        li.textContent = amigos[i]; // Establecer el nombre del amigo
    
        // Agregar el elemento <li> a la lista
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    // Obtener el elemento de la lista de amigos (por ejemplo, un <ul>)
    // const lista = document.getElementById("listaAmigos");
    lista = amigos;
    // Obtenemos todos los elementos <li> dentro de la lista
    // const items = lista.getElementsByTagName("li")
    const items = lista.length;

    console.log(items)
    // Validar que la lista no esté vacía
    if (lista.length === 0) {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Obtener un índice aleatorio basado en el número de elementos <li>
    const indice = Math.floor(Math.random() * items);
    
    console.log(indice)
    
    // Obtener el nombre del amigo a partir del elemento <li>
    const nombreElegido = lista[indice];

    console.log(nombreElegido)
    // Mostrar el resultado en el elemento con id "resultado"
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = nombreElegido;
}  


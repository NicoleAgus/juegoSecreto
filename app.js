let amigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();
    
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    amigos.push(nombre);
    input.value = ""; 
    actualizarLista();
}

function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de actualizar

    amigos.forEach((nombre) => {
        const li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSeleccionado = amigos[indiceAleatorio];

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li> Amigo seleccionado: <strong>${amigoSeleccionado}</strong> </li>`;
}


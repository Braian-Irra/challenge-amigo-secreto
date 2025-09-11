let amigos = [];

//funcion para vaciar la caja del input
function limpiarCaja(){
    document.querySelector("#amigo").value = '';
}

//funcion para agregar amigo
function agregarAmigo(){
    let nuevoAmigo = document.querySelector("#amigo").value;

    if (nuevoAmigo === "") {
        alert("Por favor ingrese un nombre")
    }else {
        amigos.push(nuevoAmigo);
        limpiarCaja();
        console.log(amigos);
        return nuevoAmigo;
    }
}

//funcion para actualizar la lista de amigos
//recorre el array amigos y agrega cada nombre comom un elemento <li> dentro de la lista HTML
function actualizarAmigos(){
    let lista = document.querySelector('#listaAmigos');
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++){
        let li = document.createElement("li");;
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}
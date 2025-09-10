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
        console.log(amigos); 
        limpiarCaja();
        return nuevoAmigo;
    }
}
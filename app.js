let amigos = [];

function agregarAmigo(){
    let nuevoAmigo = document.querySelector("#amigo").value;

    if (nuevoAmigo === "") {
        alert("Por favor ingrese un nombre")
    }else {
        amigos.push(nuevoAmigo);
        console.log(amigos); 
        return nuevoAmigo;
    }
}
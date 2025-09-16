# Challenge amigo secreto
<img width="450" height="277" alt="amigo-secreto" src="https://github.com/user-attachments/assets/1fc62cfc-5b70-486a-a9c5-d27165992016" />

### Funciones principales 

- **Agrega nombres a una lista de amigos**
- **Mostrar en pantalla los amigos cargados**
- **Sortear de manera aleatoria un amigo secreto usando `Math.random()` y `Math.floor()`**

### Tecnologias usadas 
- **HTML5** para estructurar la pagina.
- **CSS3** para los estilos.
- **JavaScript** (DOM, arrays, eventos) para la logical.

# Funcionalidades principales 
- **Agregar amigos**
  - se describe un nombre en el campo de texto y se hace click en añadir.
  - el nombre se guarda en el array `amigos`.
  - la lista en pantalla se actualiza.
- **Mostrar lista de amigos**
  - Cada amigo se agrega como un `<Li>` dentro de `<ul id="listaAmigos">`.
  - La lista se limpia antes de volver a renderizar para evitar duplicados.
-**Sortear un amigo**
  -Se valida que la lista no este vacia.
  -Se genera un indice aleatorio con let `indice = Math.floor(Math.random() * amigos.length);`
  -El amigo sorteado se muestra en `<ul id="resultado">`.

# Como usarlo
- Clonar repositorio: $ git clone https://github.com/tuusuario/amigo-secreto.git
- Abrir `index.html` en un navegador.
- Ingresar nombres, añadirlos y sortear el amigo secreto.

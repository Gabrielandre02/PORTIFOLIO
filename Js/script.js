function typeWrite(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML= '';
    textoArray.forEach((letra, i) => {
    setTimeout(() => elemento.innerHTML += letra, 90 * i);
        });
      }
const titulo = document.querySelector('.title');
typeWrite(titulo);
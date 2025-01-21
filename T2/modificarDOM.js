//creando nodos
//Element, Comment, Text
let elemento = document.createElement('section');
let comentario = document.createComment('Esto es un comentario que irá en el html');
let texto = document.createTextNode('Esto es un texto creado con JS');

// añadir nodos al DOM
console.log(elemento.nodeType,elemento.nodeName,elemento.nodeValue);
console.log(comentario.nodeType,comentario.nodeName,comentario.nodeValue);
console.log(texto.nodeType,texto.nodeName,texto.nodeValue);

//clona noddos

//elemento.insertar(#article1); // no va

let elementoClonado=elemento.cloneNode();
console.log(elementoClonado.isConnected);

//Crear una estrcutura temporal para añadirlo al DOM más tarde
let estructuraTemporal = document.createDocumentFragment();

//Insertar Nodos//

//Node API -> antigua ()
//nodoReferencia.appendChild(new_node) -> inserta como el último hijo del nodoReferencia
// insertBefore
seccion.appendChild(comentario);
seccion.appendChild(texto);

let puntoInsercion = document.getElementByTagName('section');
puntoInsercion[0].appendChild(seccion);

//insertar estructura temporal con ul li*${hola}
//let estructuraTemporal = document.createDocumentFragment();
let inicioLista=document.createElement("ul");
let nodo;
for(let i=0;i<5;i++){
    nodo=document.createElement("li");
    texto=document.createTextNode("Hola");
    console.log(texto);
    inicioLista.appendChild(nodo.appendChild(texto));
}
estructuraTemporal.appendChild(inicioLista);
document.body.appendChild(estructuraTemporal);

//Element API ->
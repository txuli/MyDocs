# manipulacion del html
Aprende a mipular un HTML con *JavaScript*.

**Índice**
1. [Acceder a los elementos del HTML](#acceder-a-los-elementos-del-html)
1. [Event Listener](#event-listener)
1. [Modificar contenidos HTML](#modificar-contenidos-html)
1. [Modificar estilos HTML](#modificar-estilos-html)
1. [Añadir elementos HTML](#añadir-elementos-html)
1. [Ocultar elementos HTML](#ocultar-elementos-html)
1. [Botones-onClick](#botones-no-es-muy-recomendado-en-html5)

## Acceder a los elementos del HTML
Hay multiples maneras de hacer referencia a un elemento para su manipulación.
Todas siguen el mismo formato:
``` 
const ejemplo = document.[etiqueta]
```
#### `getElementById`
Permite acceder al elemento en funcion de su id.Siemre hace referiencia a un único elemento, ya que los ids del HTML son unicos.
```html
<button id="button">
```
```js
const cartButton = document.getElementById("button");
```
#### `querySelector`
Acepta el selector exacto del CSS en una cadena y retorna un elemento. Puedes usarlo para seleccionar las clases.
```html
<span class="red"></span>
```
```css
.red {
  background: red;
  width: 25px;
  height: 25px;
  border-radius: 50%;
}
```
```js
const redColor = document.querySelector(".red");
```
#### `getElementsByClassName`
Es muy similar al querySelector. La única diferencia es que este método acepta solo el nombre de la clase, sin el punto anterior (.)
```js
const redColor = document.getElementsByClassName("red");
```
#### `getElementsByTagName`
También puedes usar nombres de etiqueta. Si has utilizado la etiqueta a la que haces referencia más de una vez, entonces retornara una lista de elementos. Usa la indexación para seleccionar la correcta.
```html
<h3 class="tag">
```
```js
const itemTag = document.getElementsByTagName("h3")[0];
```
## Event Listener
Para ejecutar una parte del programa JS debe haber un evento que lo desencadene. Tenemos muchos eventos como el clic, desplazar, pasar el cursor por encima, cambiar, etc. Para controlarlos tenemos los event listeners, que siguen el siguiente formato:
```js
element.[eventListenerMethod(event, eventHandler)]
```
Podemos añadir la funcion dentro del mismo eventListener:
```js
redColor.addEventListener("click", function () {
  cartButton.style.backgroundColor = "red";
  itemTag.style.backgroundColor = "red";
  imageCard.style.backgroundImage = 'url("./img/red-benz.jpg")';
});
```
O crear la función aparte:
```js
const cart = () => {
  cartButton.style.display = "none";
  feedbackBtn.style.display = "block";
};
cartButton.addEventListener("click", cart);
```
#### Eventos mas comunes
# Eventos más comunes en JavaScript

| Evento      | Descripción                                                     |
|-------------|-----------------------------------------------------------------|
| `click`     | Se activa al hacer clic con el ratón sobre un elemento.         |
| `dblclick`  | Se activa al hacer doble clic con el ratón.                     |
| `mouseover` | Se activa cuando el puntero entra en un elemento.               |
| `mouseout`  | Se activa cuando el puntero sale de un elemento.                |
| `keydown`   | Se activa cuando se presiona una tecla del teclado.             |
| `keyup`     | Se activa cuando se suelta una tecla del teclado.               |
| `submit`    | Se activa al enviar un formulario.                              |


## Modificar contenidos HTML <a name="id2"></a>
Para modificar un elemento del HTML hacemos referencia a su id y añadimos '.innerHTML'.

`innerHTML` es una propiedad que representa el contenido HTML que está dentro de esa etiqueta, esto te permite leer o cambiar lo que hay dentro de un elemento HTML.
#### HTML
```HTML
<p id="demo">Texto original</p>
```

#### JS
```js
document.getElementById("demo").innerHTML = "Hello JavaScript";
```
funciona con cualquier elemento que tenga el id="demo", sin importar si es un p, div, h1, span, etc.

## Modificar estilos HTML
#### HTML
```HTML
<p id="demo">Texto agrandado</p>
<p id="texto-negrita">Texto en negrita</p>
```
#### JS
```js
// en una linea
document.getElementById("demo").style.fontSize = "35px";
// en dos lineas
let p=document.getElementById("texto-negrita");
p.style.fontWeight = "bold";
```
## Añadir elementos HTML <a name="id4"></a>
Se pueden crear y añadir elementos nuevos al HTML desde JS de la siguiente manera. Siempre que se usa "createElement" se añade al final del body
#### JS
```js
// 1. Crear un nuevo elemento <p>
let nuevoParrafo = document.createElement("p");

// 2. Darle contenido
nuevoParrafo.textContent = "Soy un párrafo agregado con JavaScript";

// 3. Insertarlo en el div contenedor
document.getElementById("contenedor").appendChild(nuevoParrafo);
```
## Ocultar elementos HTML
podemos ocultar elementos del HTML haciendo referencia a su ID.
#### JS
```js
document.getElementById("demo").style.display = "none";
```
## Botones (no es muy recomendado en HTML5) 
Para que un boton tenga funcionalidad hay que añadirle un action listener. Esto se puede hacer de distintas maneras. <br />Este apartado muestra como hacer un action listener _en linea_, con la opcion "onclick". Se recomienda solo para acciones sencillas, para acciones complejas se recomienda declarar actionListeners con su correspondiente event handler.

Vamos a mostrar una serie de ejemplos en el que el boton 'Enviar' mostarará en la terminal el mensaje "Enviado!"


### EJ1 (boton y funcinalidad en HTML) (poco utilizado)
Podemos añadir la funcionalidad directamente en el boton HTML
#### HTML
```HTML
<button id="btnEnviar" type="button" onclick='console.log("Enviado!")'>Enviar</button>
```

o con etiquetas `<script>`
#### HTML
```HTML
<button id="btnEnviar">Enviar</button>
<script>
  const boton = document.getElementById("btnEnviar");
  if (boton) { // comprobamos que "btnEnviar" existe
    boton.onclick = function() {
      console.log("Enviado!");
    };
  }
</script>
```
### EJ2 (boton en HTML, funcionalidad en JS)
Otra opcion seria añadir el boton al HTML con un identificador, y añadir la funcionalidad en el JS, haciendo referencia al boton a traves del id y enlazando ambos archivos:
#### HTML
```HTML
<button id="btnEnviar">Enviar</button>
<!-- Enlazamos el JS externo -->
<script src="script.js"></script>
```
#### JS
``` js
const boton = document.getElementById("btnEnviar");
if (boton) { // comprobamos que "btnEnviar" existe
  boton.onclick = function() {
   console.log("Enviado!");
  };
}
```
otra opcion mas limpia es especificar en el HTML que funcion del script va a ejecutar ese boton.
```HTML
<button id="btnEnviar" onclick="enviarFormulario()">Enviar</button>
<!-- Enlazamos el JS externo -->
<script src="script.js"></script>
```
#### JS
``` js
function enviarFormulario{
  const campouser = document.getElementById("user");

  // 👇 obtenemos el contenido del input
    const valor = campouser.value;
    console.log("Contenido:", valor);
}
```

### EJ3 (boton y funcionalidad en JS)
Por ultimo podemos añadir y definir la funcionalidad de un boton, TODO desde JS. Esto es especialmente practico para añadir botones dinamicamente a la pagina.

#### HTML
```HTML
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Botón creado desde JS</title>
</head>
<body>
  <h1>Ejemplo: botón generado en JavaScript</h1>

  <!-- Aquí no hay ningún botón en el HTML -->

  <div id="contenedor"></div> <!-- un div vacío donde insertaremos el botón -->

  <script src="script.js"></script>
</body>
</html>

```
#### JS
``` js
  // 1. Creamos un elemento <button>
  const boton = document.createElement("button");
  // 2. Le ponemos el texto
  boton.textContent = "Enviar";
  // 3. Le damos atributos (ej: id, clase, tipo)
  boton.id = "btnEnviar";
  boton.type = "button";

  // 5. Insertamos el botón nuevo en el div existente
  const contenedor = document.getElementById("contenedor");
  contenedor.appendChild(boton);
```


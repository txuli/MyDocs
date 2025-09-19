# JavaScript 2dw3 (1)
Sintaxis básica de *JavaScript*.

**Índice**   
1. [Variables](#variables--var--let--const)
1. [Comparadores](#comparadores-mas-usados)
1. [Estructuras de control](#estructuras-de-control)
1. [Bucles](#bucles)
1. [Funciones](#funciones)

## Variables ( var | let | const )<a name="id1"></a>
var -> variable de ambito global </br>
let -> variable de ambito local </br>
const -> constante
``` js
var a = 1;
var b = "Semaforo";
let c = false;
let e = [1, 5, 7, 8];
let persona = {nombre: "Ana", edad: 25, ciudad: "Madrid"}
const P = 3.14;
```

## Comparadores mas usados
| Operador | Nombre                   | Descripción                                                                 |
|----------|--------------------------|-----------------------------------------------------------------------------|
| `==`     | Igual                    | Compara dos valores sin importar el tipo de dato (realiza conversión).      |
| `===`    | Estrictamente igual      | Compara dos valores y su tipo de dato (no hace conversión).                 |
| `!=`     | Diferente                | Compara dos valores y devuelve `true` si son distintos, ignorando el tipo. |
| `!==`    | Estrictamente diferente  | Compara dos valores y devuelve `true` si son distintos en valor o tipo.    |
| `>`      | Mayor que                | Devuelve `true` si el valor de la izquierda es mayor que el de la derecha. |
| `<`      | Menor que                | Devuelve `true` si el valor de la izquierda es menor que el de la derecha. |
| `>=`     | Mayor o igual            | Devuelve `true` si el valor de la izquierda es mayor o igual al derecho.   |
| `<=`     | Menor o igual            | Devuelve `true` si el valor de la izquierda es menor o igual al derecho.   |

## Estructuras de control
#### `if`
```js
let numero = 7;

if (numero > 5) {
  console.log("El número es mayor que 5");
}else if (numero === 5) {
  console.log("El número es igual a 5");
} else {
      console.log("El número es menor que 5");
}
```
#### `switch`
```js
let dia = 3;
switch (dia) {
  case 1:
    console.log("Lunes"); break;
  case 2:
    console.log("Martes"); break;
  case 3:
    console.log("Miércoles"); break;
  default:
    console.log("Otro día");
}
```
## Bucles
#### `for`

```js
for (let i = 0; i < 5; i++) {
  console.log("Iteración:", i);
}
```
#### `while`
```js
let i = 0;
while (i < 5) {
  console.log("Iteración:", i);
  i++;
}
```
#### `do... while`
```js
let i = 0;
do {
  console.log("Iteración:", i);
  i++;
} while (i < 5);
```
#### `for... of`
Se utiliza para recorrer arrays.
```js
let frutas = ["manzana", "banana", "pera"];
for (let fruta of frutas) {
  console.log(fruta);
}
```
#### `for... in`
Se utiliza para recorrer las propiedades de un objeto.
```js
let persona = { nombre: "Ana", edad: 25, ciudad: "Madrid" };
for (let clave in persona) {
  console.log(clave, ":", persona[clave]);
}
```

## Funciones

#### setInterval
Nos permite ejecutar una funcion cada x milisegundos.<br>
_param1_ y _param2_ son parametros adicioneles para enviar a la función (OPCIONALES).<br>
Podemos obtener el id generado por la funcion para detener la misma utilizando clearInterval().

```js
setInterval(function, milliseconds, param1, param2, ...)
myInterval = setInterval(function, milliseconds);
clearInterval(myInterval);
```
Ejemplo practico:
```js
setInterval(myTimer, 1000);

function myTimer() {
  const date = new Date();
  document.getElementById("demo").innerHTML = date.toLocaleTimeString();
}
```
#### setTimeout
# Arrays 
los arrays comienzan en desde la posicion 0 
## Array numerico 
los arrays numericos simplemente guardan el valor en una posicion 
```php
$ejemploArray = array("Dani","unai", "ander" )
echo($ejemploArray[1])
//resultado "unai"
```
## Array compuesto 
el array compuesto lo que hacemos es que en vez de que el indice sea un numero seria un valor que no tiene por que serlo
esto lo que nos veneficia es que podemos guarar mas datos que si solo hubiueramos usado el numerico 
```php
$ComAuton = array (“Cantabria”=>”Santander” , “Euskadi”=>”Vitoria”, “Aragón”=>”Zaragoza”, “Navarra”=>”Pamplona”);
```

## For each
El for each es el metodo para poder recorrer el array 


```php
$ComAuton = array (“Cantabria”=>”Santander” , “Euskadi”=>”Vitoria”, “Aragón”=>”Zaragoza”, “Navarra”=>”Pamplona”);
foreach ($ComAuton as $clave => $valor) 
//Resultado =>
// Santander es capital de cantabria
// vitoria es capital de Euskadi
// Zaragoza es capital de aragon
// pamplona es capital de navarra
```
` $ComAuton ` es el array que vamos a recorrer
` $clave` es el indice de el array por ejemplo en el primer elemento "cantabria" 


## Array multidimensional 
los arrays multidimensionales son un array dentro de otro array lo nos veneficia si queremos almacenar datos de una persona por ejemplo; edad, y curso 

### Como se declaran
los arrays se declaran uno dentro del otro 
```php 
$alumno= [
    "Ander"=> [
        "Apellido"=>"utarte fernandez",
        "edad"=>"19",
        "Ciclo"=>"2DW3"
    ],
    "Eztizen"=> [
        "Apellido"=>"etxebarria",
        "edad"=>"19",
        "Ciclo"=>"as3"
    ],
    "aitor"=> [
        "Apellido"=>"madariaga",
        "edad"=>"19",
        "Ciclo"=>"2DW3"
    ],
];
```
### Como lo recorremos

lo recorreriamos con 2 foreach 
```php
$alumno= [
    "Ander"=> [
        "Apellido"=>"utarte fernandez",
        "edad"=>"19",
        "Ciclo"=>"2DW3"
    ],
    "Eztizen"=> [
        "Apellido"=>"etxebarria",
        "edad"=>"19",
        "Ciclo"=>"as3"
    ],
    "aitor"=> [
        "Apellido"=>"madariaga",
        "edad"=>"19",
        "Ciclo"=>"2DW3"
    ],
];
//para recorrer un array multidimensional tienes que hacer un foreach
//el for each el $alumno es el array, $nombre es donde se guarda la clave de el array en este caso "ander"
foreach($alumno as $nombre => $datos) {
    echo "Nombre: " . $nombre . "<br/>";
	//en este segundo for each coges el dato $datos almacena el segundo array, que serian estos datos :
		// "Apellido"=>"utarte fernandez",
        // "edad"=>"19",
        // "Ciclo"=>"2DW3"
	//y &valor es el dato que esta dentro de la clave ej. 
		//  "Apellido"= $clave y $valor= "utarte fernandez"
    foreach($datos as $clave => $valor) {
		
        echo $clave . ": " . $valor . "<br/>";
    }
    echo "<br/>";  
}
```
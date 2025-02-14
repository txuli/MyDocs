## Ejercicio pedido
1. Codifique un procedimiento que añada un nuevo pedido a la tabla Pedido con datos pasados como parámetro. Por tanto, este procedimiento recibirá como parámetros la referencia del pedido y la fecha. Muestre al final un mensaje que indique que la inserción se ha realizado. 

``` sql

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `ej1`(IN referenciaPedido CHAR(5), IN fecha DATE)
BEGIN
    INSERT INTO Pedido (RefPed, FecPed) VALUES (referenciaPedido, fecha);
    SELECT 'El pedido ha sido insertado con éxito' AS Mensaje;
END$$
DELIMITER ;
```
2.	Escriba un procedimiento que muestre en pantalla la descripción y el precio del artículo más barato de la base de datos.
```sql
DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `ej2`()
BEGIN
    SELECT * FROM Articulo WHERE PVPArt = (SELECT MIN(PVPArt) FROM Articulo);

END$$
DELIMITER ;
```
3.	Cree un procedimiento que reciba la referencia de un pedido y muestre en pantalla dicha referencia y la fecha del pedido y se encargue de eliminarlo de la base de datos. Debe mostrase un mensaje indicando tal hecho.
```sql
DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `ej3`(codPedido CHAR(5))
BEGIN
    SELECT * FROM Pedido WHERE RefPed=codPedido  ;
    DELETE FROM Pedido WHERE RefPed = codPedido;

END$$
DELIMITER ;
```
4.	Cree una función que nos devuelva la descripción del artículo más caro de la base de datos. 
```sql

```

5.	Escriba un procedimiento que modifique el precio del artículo cuya descripción se pase como parámetro, de manera que si el precio es inferior a 0,20 €, lo incremente en 0,03 €, mientras que si es superior o igual a 0,20 €, se deberá decrementar en la misma cuantía. Muestre un mensaje indicando si el precio se ha incrementado o decrementado. 

```sql
DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `ej5`(IN descripcion VARCHAR(30))
BEGIN
    DECLARE precioArt FLOAT;

    -- Obtener el precio actual del artículo
    SELECT PVPArt INTO precioArt FROM Articulo WHERE DesArt = descripcion;

    -- Verificar y modificar el precio según la condición
    IF precioArt <= 20 THEN
        SET precioArt = precioArt + 0.03;
        UPDATE Articulo SET PVPArt = precioArt WHERE DesArt = descripcion;
        SELECT "El precio ha ascendido" AS Mensaje;
    
    ELSEIF precioArt > 20 THEN
        SET precioArt = precioArt - 0.03;
        UPDATE Articulo SET PVPArt = precioArt WHERE DesArt = descripcion;
        SELECT "El precio ha decrementado" AS Mensaje;
    
    END IF;
END$$
DELIMITER ;
```

6.	Codifique un procedimiento que reciba el código de un artículo y un número entero positivo o negativo. El procedimiento debe modificar el precio del artículo según el porcentaje pasado como parámetro y mostrar el precio del artículo antes y después de la modificación.

```sql
DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `ej6`(IN codigo CHAR(5), IN porcentaje FLOAT)
BEGIN
   DECLARE valor FLOAT;
   DECLARE resto FLOAT;
   DECLARE resultado FLOAT;
   
   -- Obtener el valor del artículo
   SELECT PVPArt INTO valor FROM Articulo WHERE CodArt LIKE codigo;
   
   -- Mostrar el valor antes del cambio
   SELECT CONCAT('El valor del artículo antes del cambio: ', valor) AS Mensaje;

   -- Calcular el valor con el porcentaje
   SET resto = valor * porcentaje;
   SET resultado = valor + resto;
   
   -- Mostrar el valor después del cambio
   SELECT CONCAT('El valor del artículo después del cambio: ', resultado) AS Mensaje;

   -- Actualizar el precio en la tabla Articulo
   UPDATE Articulo SET PVPArt = resultado WHERE CodArt = codigo;

END$$
DELIMITER ;
```



7.	Cree una función que reciba la descripción de un artículo y devuelva el número de unidades que de dicho artículo han sido solicitadas en total en todos los pedidos.
8.	Codifique una función que reciba el código de un departamento y devuelva un número que indique el porcentaje que supone la suma de los salarios de los empleados de ese departamento en relación con la suma salarial de todos los empleados de la empresa.
9.	Cree una función que reciba el número de un empleado y nos devuelva un número que indique el porcentaje que supone el salario del empleado en relación con la suma salarial de todos los empleados de su departamento.
10.	Cree un procedimiento que reciba el nombre de un departamento y muestre los siguientes datos relativos al empleado con mayor salario del departamento: apellido, oficio, fecha de alta y salario.
11.	Cree un procedimiento que reciba el nombre de un departamento y su localidad. Se debe insertar ese departamento en la tabla Depart asignándole como número el que resulte de sumar 10 al número más alto de los departamentos de la empresa.
12.	Cree un procedimiento que reciba un número entero como parámetro y que muestre su factorial si el número recibido como parámetro es mayor o igual que 1. Si el número recibido como parámetro es menor que 1, se deberá mostrar el mensaje “No se puede calcular el factorial de números menores que 1”. Recuerde que el factorial de un número se calcula multiplicando todos los números desde el 1 hasta el número para el cual se desea calcular el factorial. Así, el factorial de 4 se calculará haciendo 1 x 2 x 3 x 4 = 24.
13.	Cree un procedimiento que reciba dos números enteros tal que el segundo de ellos sea mayor o igual que el primero y se encargue de sumar todos los números entre ellos dos incluidos. En caso de que el segundo número sea menor que el primero se mostrará el mensaje: “El segundo número debe ser mayor o igual que el primero”.
14.	Cree un procedimiento que reciba dos números enteros tal que el segundo de ellos sea mayor o igual que el primero y se encargue de sumar todos los números pares entre ellos dos incluidos. En caso de que el segundo número sea menor que el primero se mostrará el mensaje: “El segundo número debe ser mayor o igual que el primero”.
15.	Cree un procedimiento que reciba una cadena de caracteres de longitud variable y tamaño máximo 100. Este procedimiento debe mostrar cada uno de los caracteres de esta cadena por separado. Para ello, se debe hacer uso de dos funciones existentes en MySQL, a saber:
•	La función length (cadena), que se aplica sobre una cadena de caracteres y nos devuelve su longitud o número de caracteres.
•	La función substring (cadena, posición, longitud), que devuelve una subcadena de la longitud indicada a partir de la cadena pasada como primer parámetro empezando por la posición indicada como segundo parámetro.
16.	Cree un procedimiento que reciba una cadena de caracteres de longitud variable y tamaño máximo 100. Este procedimiento debe mostrar la cadena recibida como parámetro y la cadena invertida, esto es, si al procedimiento se le pasa la cadena “casa” deberá mostrar “casa” y “asac”. Además, después, deberá indicar si la cadena pasada como parámetro es palíndroma o no, sabiendo que una cadena es palíndroma si es igual a su cadena invertida, es decir, si lee igual de izquierda a derecha que de derecha a izquierda. Para crear este procedimiento se puede hacer uso de las funciones length y substring empleadas en el anterior ejercicio. 

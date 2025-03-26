1. Cree un procedimiento que reciba como parámetros el nombre de una localidad, el nombre de una provincia y un número. En caso de que no exista dicha localidad (dentro de la provincia pasada como segundo parámetro), se mostrará un aviso con el texto “No hay ninguna localidad con el nombre XXXX en la provincia de YYYY”. En caso contrario, se incrementará la población de la localidad con tantos habitantes como indica el tercer parámetro, tras lo cual se mostrará el mensaje “La localidad XXXX de YYYY ha visto incrementada su población en ZZZZ habitantes”.



```sql
DELIMITER &&

CREATE PROCEDURE localidad (
    IN locN VARCHAR(50), 
    IN provinciaN int, 
    IN n INT
)
BEGIN
    DECLARE numeroProvincia INT;
    DECLARE resultado VARCHAR(50);

    -- Obtener el número de provincia
    SELECT n_provincia INTO numeroProvincia 
    FROM provincias 
    WHERE n_provincia = provinciaN
    LIMIT 1;

    -- Si no se encuentra la provincia
    IF numeroProvincia IS NULL THEN 
        SELECT CONCAT('Error: No existe la provincia ', provinciaN) AS Mensaje;
    ELSE
        -- Verificar si existe la localidad
        SELECT nombre INTO resultado 
        FROM localidades 
        WHERE nombre = locN 
          AND n_provincia= numeroProvincia
        LIMIT 1;

        IF resultado IS NULL THEN 
            SELECT CONCAT('Error: No existe la localidad ', locN, ' en la provincia ', provinciaN) AS Mensaje;
        ELSE
            -- Actualizar la población de la localidad
            UPDATE localidades 
            SET poblacion = poblacion + n 
            WHERE nombre = locN 
              AND n_provincia = numeroProvincia;

            SELECT CONCAT('Se han agregado ', n, ' habitantes en ', locN, ' de la provincia ', provinciaN) AS Mensaje;
        END IF;
    END IF;
END &&

DELIMITER ;


```

2. 
Cree una función que reciba el nombre de una comunidad autónoma. Esta función debe devolver un -1 en caso de que esa comunidad autónoma no exista en la base de datos; en caso contrario, se deberá devolver un número que indique el número de provincias de que consta dicha comunidad autónoma.


```sql
DELIMITER &&

CREATE FUNCTION contarProvincias(n INT)
RETURNS INT
DETERMINISTIC
BEGIN
    DECLARE CountProvincias INT;

    -- Contar provincias en la comunidad dada
    SELECT COUNT(*) INTO CountProvincias 
    FROM provincias 
    WHERE id_comunidad = n;

    -- Si no hay ninguna comunidad con ese ID, devuelve -1 como error
    IF CountProvincias = 0 THEN
        RETURN -1;
    ELSE
        RETURN CountProvincias;
    END IF;
END &&

DELIMITER ;
```

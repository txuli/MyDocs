# BASES DE DATOS RETO 2 GRUPO 5

## Universo del Discurso

La Federación de Voleibol organiza competiciones que se desarrollan en múltiples temporadas. Cada temporada involucra equipos de voleibol que se enfrentan en partidos, supervisados por árbitros. Los partidos siguen las reglas oficiales del deporte y se juegan al mejor de cinco sets. El sistema debe gestionar los detalles de los equipos, jugadores, árbitros, partidos y sets, así como mantener un registro de los resultados y las clasificaciones.

Cada **temporada** se refiere a un periodo de competición que puede tener lugar una o varias veces al año. Una temporada incluye múltiples partidos y su estructura puede variar (liguilla, eliminatorias, etc.). De cada temporada se desea almacenar la siguiente información Nombre, Cantidad Equipos, Cantidad Jornadas, Iniciado, Finalizado.

Cada **equipo** es un grupo organizado de jugadores que participan en los partidos de la competición. Los equipos pueden representar a clubes, instituciones o ciudades. De cada equipo se desea almacenar la siguiente información: número Identificativo,Id Equipo, Nombre del equipo, Entrenador, Fecha de Fundación, Partidos Ganados, Partidos Perdidos, Puntaje Total Acumulado.

Los **jugadores** son los miembros de los equipos. Cada jugador tiene una posición y un rol dentro del equipo y participa en los partidos según las reglas del voleibol. De cada jugador se desea almacenar la siguiente información: ID jugador, Nombre completo, Fecha de Nacimiento, Nro camiseta, Posición, Altura, Peso. Los jugadores pueden ser fichados y/o trasladados a un club siempre que no se haya empezado la temporada.

Un **partido** de voleibol enfrenta a dos equipos y se compone de varios sets. El equipo que gane más sets se proclamará vencedor del partido. De cada partido se desea almacenar la siguiente información: ID Partido, Equipo local, Equipo visitante, Resultado Final, Estado del partido, Puntaje_EquiLocal, Puntaje_EquiVisitante.

Cada **partido** contiene 5 sets. Un set se gana cuando un equipo alcanza 25 puntos con una ventaja de 2 puntos sobre el rival. Si el partido llega a un quinto set, este se juega a 15 puntos e igualmente sobre una ventaja de 2 puntos ante el rival, cada partido tiene un identificador el cual nos ayuda a saber que enfrentamentos son los correspondientes por cada jornada, previamente teniamos pensado hacer una tabla de jornadas, pero como solo iba a tener el ID y el  nombre decidimos que no era necesario tener esa tabla.
::: note
Este aspecto se podria adaptar por si necesitas guardar mas informacion
:::

El ganador de un partido es el primer equipo que sume 3 sets ganados. El marcador final se registra como parte de **Puntos Totales** de la temporada e influye en la clasificación general de los equipos cuando existen 2 equipos en empate de **Partidos Ganados**. De haber nuevamente un empate en relación a **Puntos Totales**, se decidirá el desempate por el año de fundación de cada equipo.

El sistema debe calcular y mantener una clasificación de los equipos basada en los resultados de los partidos de manera actualizada según avancen las Jornadas. Los equipos reciben puntos por cada partido ganado y se mantienen registros de sus estadísticas a lo largo de la temporada.

**Cambios realizados en el Universo del Discurso:**

En este 2do reto se consideró añadir una entidad Temporada porque ahora el sistema permite crear y gestionar múltiples temporadas considerando si está iniciado o finalizado. Asimismo, se detalla que los jugadores pueden ser fichados a otro equipo siempre que no se haya iniciado la temporada actual.


## DIAGRAMA ER

Este diagrama tiene 5 entidades las cuales se conectan entre sí, a través de 4 Relaciones.

4 Entidades:

1. Equipos (id_ equipos)
2. Partidos (id_ partido)
3. Jugadores (DNI_ jugador)
4. Temporada (id_temporada)

4 Relaciones:

1. Pertenecen
2. Enfrentan
3. Tiene (x2)
4. Juegan
5. Arbitra

![diagrama_er](https://photos.txuli.com/reto/entidadRelacion.png)


## TABLAS / MODELO RELACIONAL

**Equipo** (id_equipo, Nombre_equipo, Entrenador, Fecha_Fundacion, PartidosGanados, PartidosPerdidos, PuntajeTotal)

**Jornadas** (id_jornada, id_temporada(fk), jugado)

**Partidos** (id_partido, id_EquipoLocal(fk), id_EquipoVisitante(fk), Jugado, SetsLocal, PuntajeLocal, SetsVisitante, PuntajeVisitante)

**Jugadores** (DNI_jugador, NombreCompleto, fechaNac, numDorsal, posición, altura, peso, id_equipo (fk), id_Foto, Nacionalidad)

**Temporada** (id_temporada, Nombre, Cantidad_Equipos, Cantidad_Jornadas, Iniciado, Finalizado)


![tablas](https://photos.txuli.com/reto/tablas.png)

## BASE DE DATOS 

### SCRIPT

[Script db.sql](https://photos.txuli.com/reto/db-v2.sql)

### **Relaciones y Cardinalidades**  

#### **1. Temporada - Jornada**  
   - **Relación:** Una temporada puede tener múltiples jornadas, pero cada jornada pertenece a una única temporada.  
   - **Cardinalidad:**  
     - (1,N) de **Temporada** a **Jornadas** → Una temporada tiene varias jornadas.  
     - (1,1) de **Jornada** a **Temporada** → Una jornada pertenece a una única temporada.  

#### **2. Jornada - Partidos**  
   - **Relación:** Una jornada puede contener múltiples partidos, pero cada partido pertenece exactamente a una jornada.  
   - **Cardinalidad:**  
     - (0,N) de **Jornada** a **Partidos** → Una jornada puede tener varios partidos, o ninguno si aún no se han programado.  
     - (1,1) de **Partido** a **Jornada** → Cada partido pertenece a una sola jornada.  

#### **3. Partidos - Equipos**  
   - **Relación:** Cada partido involucra exactamente a dos equipos, mientras que un equipo puede jugar múltiples partidos.  
   - **Cardinalidad:**  
     - (2,2) de **Partidos** a **Equipos** → Cada partido involucra exactamente dos equipos (local y visitante).  
     - (0,N) de **Equipos** a **Partidos** → Un equipo puede participar en múltiples partidos, o incluso en ninguno si aún no ha jugado.  

#### **4. Partido - Árbitro**  
   - **Relación:** Un partido debe contar con al menos un árbitro y puede tener hasta dos, mientras que un árbitro puede arbitrar múltiples partidos.  
   - **Cardinalidad:**  
     - (1,2) de **Partido** a **Árbitro** → Un partido tiene al menos un árbitro y como máximo dos.  
     - (0,N) de **Árbitro** a **Partido** → Un árbitro puede arbitrar múltiples partidos o aún no haber arbitrado.  

#### **5. Equipo - Jugadores**  
   - **Relación:** Cada equipo debe contar con exactamente 12 jugadores y cada jugador pertenece a un único equipo.  
   - **Cardinalidad:**  
     - (12,12) de **Equipo** a **Jugadores** → Un equipo debe tener exactamente 12 jugadores.  
     - (1,1) de **Jugador** a **Equipo** → Cada jugador pertenece a un único equipo.  

#### **6. Jugadores - Partidos**  
   - **Relación:** Un jugador puede participar en múltiples partidos, mientras que un partido debe contar con entre 12 y 24 jugadores en total (6 por equipo).  
   - **Cardinalidad:**  
     - (0,N) de **Jugadores** a **Partidos** → Un jugador puede jugar múltiples partidos o aún no haber participado.  
     - (12,24) de **Partidos** a **Jugadores** → En cada partido deben participar entre 12 y 24 jugadores (mínimo 6 por equipo y máximo 12).  


## CONSULTAS

1. [Consultas con `JOIN`](#1-consultas-con-join)
2. [Consultas con `ORDER BY`](#2-consultas-con-order-by)
3. [Consultas con `GROUP BY`](#3-consultas-con-group-by)
4. [Consultas con `HAVING`](#4-consultas-con-having)
5. [Consultas con `LIKE`](#5-consultas-con-like)
6. [Consultas con `Funciones`](#6-consultas-con-funciones)
7. [Consultas con `INSERT`](#7-consultas-con-insert)
8. [Consultas con `SubConsultas`](#8-consultas-con-subconsultas)
9. [Otras consultas](#9-otras-consultas)


## **1. Consultas con `JOIN`**  

###### consultasubc6
```sql
SELECT E.Equ_id, E.Equ_nombre,
      (SELECT COUNT(P.Par_id)
       FROM partidos P
       JOIN jornadas J ON P.Par_id_jornada = J.Jor_id
       JOIN temporadas T ON J.Jor_id_temporada = T.Tem_id
       WHERE T.Tem_id = 1
         AND P.Par_jugado = TRUE
         AND P.Par_equipo_loc = E.Equ_id OR P.Par_equipo_vis = E.Equ_id) AS Partidos_jugados
FROM equipos E
WHERE E.Equ_id = 1;
```

###### consultaconorderby
```sql
SELECT JG.Jug_Nficha, JG.Jug_nombre_completo, E.Equ_nombre
   FROM jugadores JG
JOIN equipos E ON JG.Jug_id_equipo = E.Equ_id
WHERE E.Equ_puntuaje_total = (
       SELECT MAX(Equ_puntuaje_total)
            FROM equipos)
ORDER BY JG.Jug_Nficha;
```

```sql
SELECT A.Arb_Nficha, A.Arb_nombre_completo, A.Arb_nacionalidad
   FROM arbitros A
   JOIN partidos P on A.Arb_Nficha = P.Par_Arbitro_1 OR
                      A.Arb_Nficha = P.Par_Arbitro_2
WHERE Par_id = 20;
```
###### consultagroupby5
```sql
SELECT T.Tem_nombre AS Temporada,
      A.Arb_nombre_completo AS Nombre_Arbitro,
      COUNT(P.Par_id) AS Partidos_Arbitrados
FROM Partidos P
JOIN Jornadas J ON P.Par_id_jornada = J.Jor_id
JOIN Temporadas T ON J.Jor_id_temporada = T.Tem_id
JOIN Arbitros A ON A.Arb_Nficha = '1000-1000A'
WHERE (P.Par_Arbitro_1 = A.Arb_Nficha OR P.Par_Arbitro_2 = A.Arb_Nficha)
 AND P.Par_jugado = TRUE
GROUP BY T.Tem_nombre, A.Arb_nombre_completo;
```
```sql
SELECT j.Jug_nombre_completo, e.Equ_nombre FROM jugadores j JOIN equipos e ON j.Jug_id_equipo = e.Equ_id;
```

```sql
SELECT p.Par_id, e1.Equ_nombre AS Local, e2.Equ_nombre AS Visitante FROM partidos p 
JOIN equipos e1 ON p.Par_equipo_loc = e1.Equ_id 
JOIN equipos e2 ON p.Par_equipo_vis = e2.Equ_id;
```

```sql
SELECT a.Arb_nombre_completo, p.Par_id FROM arbitros a JOIN partidos p ON a.Arb_Nficha = p.Par_Arbitro_1;
```

```sql
SELECT j.Jor_id, t.Tem_nombre FROM jornadas j JOIN temporadas t ON j.Jor_id_temporada = t.Tem_id;
```

```sql
SELECT p.Par_id, j.Jor_id FROM partidos p JOIN jornadas j ON p.Par_id_jornada = j.Jor_id;
```
###### consultagroupby2
```sql
SELECT e.Equ_nombre, COUNT(j.Jug_Nficha) AS Num_Jugadores FROM equipos e JOIN jugadores j ON e.Equ_id = j.Jug_id_equipo GROUP BY e.Equ_nombre;
```
###### consultagroupby3
```sql
SELECT a.Arb_nombre_completo, COUNT(p.Par_id) AS Num_Partidos FROM arbitros a JOIN partidos p ON a.Arb_Nficha = p.Par_Arbitro_1 GROUP BY a.Arb_nombre_completo;
```
###### consultagroupby4
```sql
SELECT t.Tem_nombre, COUNT(j.Jor_id) AS Num_Jornadas FROM temporadas t JOIN jornadas j ON t.Tem_id = j.Jor_id_temporada GROUP BY t.Tem_nombre;
```

```sql
SELECT p.Par_id, e.Equ_nombre FROM partidos p JOIN equipos e ON p.Par_equipo_loc = e.Equ_id OR p.Par_equipo_vis = e.Equ_id;
```

### Consultas con join de otros apartados
###### [Consulta 1](#consultaconjoin)
###### [Consulta 2](#consultaconjoin2)
###### [Consulta 3](#consultaconjoin3)
###### [Consulta 4](#consultaconjoin4)

---

## **2. Consultas con `ORDER BY`**  

###### consultagroupby
```sql
SELECT E.Equ_id,
     E.Equ_nombre, SUM((E.Equ_partidos_ganados*3)+(E.Equ_partidos_perdidos*1)) AS "Puntos Totales",
     E.Equ_puntuaje_total AS "Puntos Sets Total"
FROM equipos E
GROUP BY
E.Equ_id ORDER BY e.Equ_partidos_ganados DESC;
```

###### consultasubc5
```sql
SELECT Equ_nombre 
FROM Equipos
WHERE equ_partidos_ganados= (SELECT MAX(equ_partidos_ganados) FROM Equipos);
```

```sql
SELECT * FROM jugadores 
WHERE Jug_altura > 1.95 ORDER BY Jug_peso LIMIT 1;
```
```sql
SELECT * FROM jugadores ORDER BY Jug_nombre_completo ASC;
```

```sql
SELECT * FROM equipos ORDER BY Equ_puntuaje_total DESC;
```

```sql
SELECT * FROM partidos ORDER BY Par_id_jornada DESC;
```

```sql
SELECT * FROM temporadas ORDER BY Tem_cantidad_equipos ASC;
```
### Consultas con Order By de otros apartados
###### [Consulta 1](#consultaconorderby)
###### [Consulta 2](#consultaconorderby2)
###### [Consulta 3](#consultaconorderby3)

---

## **3. Consultas con `GROUP BY`**  


```sql
SELECT Equ_entrenador AS nombreEntrenador, Equ_nombre 
FROM Equipos 
WHERE equ_fundacion("2000-01-01");
```

###### consultaconjoin 
###### consultaconorderby2 
###### consultafunciones11
```sql
SELECT
   p.Par_id_jornada AS Jornada,
   e.Equ_nombre AS Equipo,
   p.Par_id AS Partido,
   GREATEST(p.Par_puntos_loc, p.Par_puntos_vis) AS MaximoPuntos
FROM Partidos p
JOIN Equipos e
   ON
   (e.Equ_id = p.Par_equipo_loc AND p.Par_puntos_loc > p.Par_puntos_vis)
   OR
   (e.Equ_id = p.Par_equipo_vis AND p.Par_puntos_vis > p.Par_puntos_loc)
WHERE
   (p.Par_id_jornada, GREATEST(p.Par_puntos_loc, p.Par_puntos_vis))
       IN ( SELECT Par_id_jornada, MAX(GREATEST(Par_puntos_loc, Par_puntos_vis))
       FROM Partidos
       GROUP BY Par_id_jornada)
GROUP BY p.Par_id_jornada
ORDER BY MaximoPuntos DESC;
```

###### consultafunciones10
```sql
SELECT COUNT(*) AS total_jugadores FROM Jugadores;
```

###### consultafunciones9
```sql
SELECT Par_id_jornada, COUNT(*) AS cantidad_partidos_jugados 
FROM Partidos 
WHERE Par_jugado = 1 
GROUP BY Par_id_jornada;
```

###### consultafunciones8
```sql
SELECT AVG(Equ_puntuaje_total) AS promedio_puntos FROM equipos;
```

###### consultaconorderby3 
###### consultafunciones7
```sql
SELECT Par_id_jornada, COUNT(*) 
FROM partidos 
WHERE Par_jugado=1 
ORDER BY COUNT(*) DESC 
LIMIT 1;
```

###### consultahaving 
###### consultafunciones7
```sql
SELECT COUNT(*), Jor_id_temporada 
FROM jornadas 
WHERE Jor_jugado = 1 
GROUP BY Jor_id_temporada 
HAVING COUNT(*) > 5;
```

###### consultahaving2 
###### consultafunciones6
```sql
SELECT AVG(Jug_dorsal), Jug_posicion 
FROM jugadores 
GROUP BY Jug_posicion 
HAVING AVG(Jug_dorsal) > 10;
```

###### consultahaving3 
###### consultaconjoin3 
###### consultafunciones5
```sql
SELECT j.Jor_id, COUNT(p.Par_jugado) AS Partidos_jugados 
FROM jornadas j 
JOIN partidos p ON p.Par_id_jornada = j.Jor_id 
WHERE p.Par_jugado = 1 AND j.Jor_jugado = 1 
GROUP BY j.Jor_id 
HAVING COUNT(p.Par_jugado) > 1;
```

###### consultahaving4 
###### consultaconjoin4 
###### consultafunciones4
```sql
SELECT e.Equ_nombre FROM jugadores j 
JOIN equipos e ON e.Equ_id = j.Jug_id_equipo 
WHERE Jug_nacimiento < "1995-01-01" 
GROUP BY e.Equ_id 
HAVING COUNT(*) > 3;
```

###### consultahaving5 
###### consultafunciones3
```sql
SELECT ROUND(AVG(Par_puntos_loc),2), Par_id_jornada 
FROM partidos 
WHERE 1 
GROUP BY Par_id_jornada 
HAVING AVG(Par_puntos_loc) > 24;
```
### Consultas con Group By de otros apartados
###### [Consulta 1](#consultagroupby)
###### [Consulta 2](#consultagroupby2)
###### [Consulta 3](#consultagroupby3)
###### [Consulta 4](#consultagroupby4)
###### [Consulta 5](#consultagroupby5)
###### [Consulta 6](#consultagroupby6)
###### [Consulta 7](#consultagroupby7)


---

## **4. Consultas con `HAVING`**  
```sql
SELECT Equ_nombre, Equ_puntuaje_total 
FROM equipos 
WHERE Equ_puntuaje_total > 240;
```

###### consultagroupby6 
###### consultafunciones2
```sql
SELECT ROUND(AVG(j.Jug_altura), 2), e.Equ_nombre
FROM equipos e, jugadores j
WHERE e.Equ_id = j.Jug_id_equipo
GROUP BY j.Jug_id_equipo
HAVING ROUND(AVG(j.Jug_altura),1) > 1.80;
```

```sql
SELECT Arb_nacionalidad
FROM Arbitros arb, Partidos par
WHERE arb.Arb_Nficha = par.Par_Arbitro_1 AND par.Par_id = 1;
```

###### consultaconjoin2 
###### consultagroupby7 
###### consultafunciones 
###### consultasubc4

```sql
SELECT A.Arb_Nficha, A.Arb_nombre_completo, COUNT(*) AS total_partidos 
FROM Partidos P 
JOIN Arbitros A ON P.Par_Arbitro_1 = A.Arb_Nficha OR P.Par_Arbitro_2 = A.Arb_Nficha 
GROUP BY A.Arb_Nficha, A.Arb_nombre_completo 
HAVING COUNT(*) > (SELECT COUNT(*) FROM Partidos) * 0.25;
```

### Consultas con Having de otros apartados
###### [Consulta 1](#consultahaving)
###### [Consulta 2](#consultahaving2)
###### [Consulta 3](#consultahaving3)
###### [Consulta 4](#consultahaving4)
###### [Consulta 5](#consultahaving5)

---

## **5. Consultas con `LIKE`**

```sql
SELECT * FROM jugadores WHERE Jug_nombre_completo LIKE 'Juan%';
```

```sql
SELECT * FROM arbitros WHERE Arb_nombre_completo LIKE '%Gómez';
```

```sql
SELECT * FROM equipos WHERE Equ_nombre LIKE '%FC%';
```

```sql
SELECT * FROM temporadas WHERE Tem_nombre LIKE 'Temporada_2_0_2_3';
```


```sql
UPDATE Equipo
SET Equ_num_integrantes = 14
WHERE Equ_nombre = 'Santutxu';
```

---

## **6. Consultas con `Funciones`**

```sql
SELECT Equ_id, Equ_nombre, ROUND(Equ_puntuaje_total) AS puntaje_redondeado 
FROM equipos
WHERE ROUND(Equ_puntuaje_total) > 50;
```

### Consultas con Having de otros apartados
###### [Consulta 1](#consultafunciones)
###### [Consulta 2](#consultafunciones2)
###### [Consulta 3](#consultafunciones3)
###### [Consulta 4](#consultafunciones4)
###### [Consulta 5](#consultafunciones5)
###### [Consulta 6](#consultafunciones6)
###### [Consulta 7](#consultafunciones7)
###### [Consulta 8](#consultafunciones8)
###### [Consulta 9](#consultafunciones9)
###### [Consulta 10](#consultafunciones10)
###### [Consulta 11](#consultafunciones11)

---

## **7. Consultas con `INSERT`**

###### consultasubc3
```sql
INSERT INTO jugadores (Jug_Nficha, Jug_nombre_completo, Jug_nacimiento, Jug_dorsal, Jug_posicion, Jug_id_equipo,Jug_altura,Jug_nacionalidad,Jug_peso) 
VALUES (
    '2025-0033A', 
    'Juan Pérez', 
    '1998-05-12', 
    10, 
    'Delantero', 
    (SELECT Equ_id FROM equipos WHERE Equ_nombre = 'Dinamo Moscu'),
    '1.92',
    'ESP',
    '65'
);
```

###### consultasubc2
```sql
INSERT INTO jugadores (Jug_Nficha, Jug_nombre_completo, Jug_nacimiento, Jug_dorsal, Jug_posicion, Jug_id_equipo,Jug_altura,Jug_nacionalidad,Jug_peso) 
VALUES (
    '2025-0120A', 
    'Mikel Resa', 
    '2006-11-02', 
    9, 
    'Armador', 
    (SELECT Equ_id FROM equipos WHERE Equ_nombre = 'Modena Volley'),
    '1.83',
    'FRA',
    '62'
);
```

###### consultasubc
```sql
INSERT INTO arbitros (Arb_Nficha, Arb_nombre_completo, Arb_nacionalidad, Arb_titulacion) 
VALUES (
    '2025-0003C', 
    'Carlos Gómez', 
    (SELECT Jug_nacionalidad FROM jugadores WHERE Jug_nombre_completo = 'Juan Pérez'), 
    'Internacional'
);
```

```sql
INSERT INTO arbitros (Arb_Nficha, Arb_nombre_completo, Arb_nacionalidad, Arb_titulacion) 
VALUES (
    '2025-0004D', 
    'Luis Fernández', 
    'ESP', 
    'Nacional'
);
```

```sql
INSERT INTO temporadas (Tem_cantidad_equipos, Tem_cantidad_jornadas, Tem_nombre, Tem_finalizado, Tem_id)  
VALUES 				   (6, 10, 'Temporada 2099', 0, 44);  
```

```sql
INSERT INTO temporadas (Tem_cantidad_equipos, Tem_cantidad_jornadas, Tem_nombre, Tem_finalizado, Tem_id)  
VALUES 				   (6, 10, 'Temporada 2077', 0, 77);  
```

```sql
INSERT INTO jornadas (Jor_id,Jor_id_temporada)
VALUES(7,2);
```

```sql
INSERT INTO jornadas (Jor_id,Jor_id_temporada)
VALUES(5,44);
```

---

## **8. Consultas con `SubConsultas`**

```sql
SELECT * FROM jugadores WHERE Jug_id_equipo = (SELECT Equ_id FROM equipos WHERE Equ_nombre = 'Equipo A');
```

```sql
SELECT * FROM partidos WHERE Par_equipo_loc IN (SELECT Equ_id FROM equipos WHERE Equ_puntuaje_total > 10);
```

```sql
SELECT * FROM temporadas WHERE Tem_id = (SELECT Jor_id_temporada FROM jornadas WHERE Jor_jugado = 0 LIMIT 1);
```

```sql
SELECT Jug_nombre_completo FROM jugadores WHERE Jug_Nficha IN (SELECT Par_Arbitro_1 FROM partidos);
```

```sql
SELECT Equ_nombre FROM equipos WHERE Equ_id IN (SELECT Jug_id_equipo FROM jugadores WHERE Jug_posicion = 'Delantero');
```

### Consultas con Having de otros apartados
###### [Consulta 1](#consultasubc)
###### [Consulta 2](#consultasubc2)
###### [Consulta 3](#consultasubc3)
###### [Consulta 4](#consultasubc4)
###### [Consulta 5](#consultasubc5)
###### [Consulta 6](#consultasubc6)



## **9. Otras consultas**




```sql
SELECT * FROM jugadores WHERE Jug_foto IS NULL;
```

```sql
SELECT * FROM arbitros WHERE Arb_titulacion IS NULL;
```

```sql
SELECT * FROM equipos WHERE Equ_id IN (1, 2, 3);
```

```sql
SELECT * FROM jugadores WHERE Jug_posicion IN ('Delantero', 'Defensa');
```

```sql
SELECT * FROM jugadores WHERE Jug_nacimiento BETWEEN '1990-01-01' AND '2005-12-31';
```

```sql
SELECT * FROM equipos WHERE Equ_fundacion BETWEEN '2000-01-01' AND '2020-12-31';
```

```sql
SELECT * FROM jugadores WHERE Jug_posicion = 'Delantero' AND Jug_dorsal > 9;
```

```sql
SELECT * FROM partidos WHERE Par_equipo_loc = 1 AND Par_puntos_loc > 20;
```

```sql
SELECT * FROM temporadas WHERE Tem_iniciado = 1 AND Tem_finalizado = 0;
```

```sql
SELECT * FROM equipos WHERE Equ_partidos_ganados > 5 AND Equ_partidos_perdidos < 3;
```

```sql
SELECT * FROM arbitros WHERE Arb_nacionalidad = 'ESP' AND Arb_titulacion IS NOT NULL;
```


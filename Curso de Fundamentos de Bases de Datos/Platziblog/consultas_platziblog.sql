# TRAER TODA LA INFORMACIÓN DE TODOS LOS posts
SELECT *
FROM posts;

# TRAER TODOS LOS POSTS QUE TENGAN UN AÑO DE PUBLICACIÓN MAYOR A 2028
SELECT *
FROM posts
WHERE year(fecha_publicacion)>'2028';



# ------------------------------- SELECT -------------------------------------
# TRAER EL TÍTULO Y LA FECHA DE PUBLICACIÓN DE LA TABLA posts
SELECT titulo, fecha_publicacion
FROM posts;

# TRAER EL TÍTULO COMO ENCABEZADO Y LA FECHA DE PUBLICACIÓN COMO FECHA, DE LA TABLA posts
SELECT titulo AS Encabezado, fecha_publicacion AS Fecha
FROM posts;



# -------------------------- FROM: LEFT JOIN -------------------------------
# ESTA CONSULTA TRAERÁ A TODOS LOS USUARIOS JUNTO A LOS POSTS, ASÍ HAYAN O NO HAYAN HECHO UN POST
SELECT *
FROM  usuarios
	LEFT JOIN posts ON usuarios.id = posts.usuario_id;

# ESTA CONSULTA TRAERÁ A TODOS LOS USUARIOS QUE NO HAN HECHO POST, JUNTO A LOS POSTS 
SELECT *
FROM  usuarios
	LEFT JOIN posts ON usuarios.id = posts.usuario_id
    	WHERE posts.usuario_id IS NULL;

# ESTA CONSULTA TRAERÁ A TODOS LOS USUARIOS QUE SÍ HAN HECHO POST, JUNTO A LOS POSTS
SELECT *
FROM  usuarios
	LEFT JOIN posts ON usuarios.id = posts.usuario_id
    	WHERE posts.usuario_id IS NOT NULL;



# -------------------------- FROM: RIGHT JOIN -------------------------------
# ESTA CONSULTA TRAERÁ A TODOS LOS POST JUNTO A LOS USUARIOS QUE LO HAN ESCRITO
SELECT *
FROM  usuarios
	RIGHT JOIN posts ON usuarios.id = posts.usuario_id;

# ESTA CONSULTA TRAERÁ A TODOS LOS POSTS QUE NO TENGAN UN USUARIO CREADOR
SELECT *
FROM  usuarios
	RIGHT JOIN posts ON usuarios.id = posts.usuario_id
      WHERE posts.usuario_id IS NULL;



# -------------------------- FROM: INNER JOIN -------------------------------
# ESTA CONSULTA TRAERÁ UNICAMENTE A LOS USUARIOS QUE TENGAN UN POST ASOCIADO
SELECT *
FROM  usuarios
	INNER JOIN posts ON usuarios.id = posts.usuario_id;



# ------------------------- FROM: FULL OUTER JOIN ----------------------------
# ESTA CONSULTA TRAERÁ TODOS LOS DATOS DE AMBAS TABLAS
SELECT *
FROM  usuarios
	LEFT JOIN posts ON usuarios.id = posts.usuario_id
      UNION
SELECT *
	FROM  usuarios
	LEFT JOIN posts ON usuarios.id = posts.usuario_id;



# ---------------------- FROM: DIFERENCIA SIMÉTRICA -------------------------
# ESTA CONSULTA TRAERÁ TODO LO QUE EXISTE EN USUARIOS PERO NO EN POSTS, Y LO QUE EXISTE EN POSTS, PERO NO EN USUARIOS
SELECT *
FROM  usuarios
	LEFT JOIN posts ON usuarios.id = posts.usuario_id
      WHERE posts.usuario_id IS NULL
      UNION
SELECT *
	FROM  usuarios
	LEFT JOIN posts ON usuarios.id = posts.usuario_id
      WHERE posts.usuario_id IS NULL;



# ---------------------- TRAYENDO DATOS DE 3 TABLAS DIFERENTES SIN WHERE -------------------------
# ESTA CONSULTA TRAERÁ EL LOGIN DEL USUARIO, EL TÍTULO DEL POST Y EL TITULO DE LA CATEGORÍA
SELECT u.login AS "Nombre de usuario", p.titulo AS Post, c.titulo Categoría
FROM usuarios AS u
	JOIN posts AS p ON u.id = p.usuario_id 
	JOIN categorias AS c ON p.categoria_id = c.id;



# ---------------------- TRAYENDO DATOS DE 3 TABLAS DIFERENTES CON WHERE -------------------------
SELECT u.login AS "Nombre de usuario", p.titulo AS Post, c.titulo Categoría
FROM usuarios AS u
	JOIN posts AS p ON u.id = p.usuario_id 
	JOIN categorias AS c ON p.categoria_id = c.id
		WHERE c.titulo = "Ciencia";



# ------------------------------------- WHERE: MAYOR QUE (>) ------------------------------------------------
# ESTA CONSULTA TRAERÁ A TODOS LOS POSTS CON UNA FECHA DE PUBLICACIÓN MAYOR AL 1 DE ENERO DE 2025
SELECT *
FROM posts
	WHERE fecha_publicacion > "2025-01_01";



# ------------------------------------- WHERE: IGUAL A (=) ------------------------------------------------
# ESTA CONSULTA TRAERÁ UNICAMENTE A LOS POSTS QUE TENGAN ESTADO ACTIVO
SELECT *
FROM posts
	WHERE estatus = "activo";



# ------------------------------------- WHERE: LIKE ------------------------------------------------
# ESTA CONSULTA TRAERÁ LOS TÍTULOS QUE CONTENGAN LA PALABRA “escandalo” POR ALGÚN LADO DEL TÍTULO
SELECT *
FROM posts
	WHERE titulo = "%escandalo%";

# ESTA CONSULTA TRAERÁ LOS POST DE AQUELLOS TÍTULOS QUE INICIEN CON LA PALABRA “escandalo”
SELECT *
FROM posts
	WHERE titulo = "escandalo%";

# ESTA CONSULTA TRAERÁ LOS POST DE AQUELLOS TÍTULOS QUE FINALICEN CON LA PALABRA “roja”
SELECT *
FROM posts
	WHERE titulo = "%roja";



# ------------------------------------------------ WHERE: BETWEEN ------------------------------------------------
# ESTA CONSULTA TRAERÁ LOS POSTS CON UNA FECHA DE PUBLICACIÓN ENTRE EL 1 DE ENERO DE 2023 Y EL 1 DE ENERO DE 2025
SELECT *
FROM posts
	WHERE fecha_publicacion BETWEEN "2023-01-01" AND "2025-01-01";

# ESTA CONSULTA TRAERÁ LOS POSTS CON AÑO DE PUBLICACIÓN ENTRE EL 2023 Y EL 2024
SELECT *
FROM posts
	WHERE YEAR(fecha_publicacion) BETWEEN "2023" AND "2024";



# ----------------------------------------- WHERE: IS NULL/IS NOT NULL --------------------------------------------
# ESTA CONSULTA TRAERÁ LOS POSTS QUE TIENEN UN USUARIO ASOCIADO Y QUE ADEMÁS SU ESTADO ES INACTIVO
SELECT *
FROM posts
	WHERE usuario_id IS NOT NULL
	AND estatus="inactivo";

# ESTA CONSULTA TRAERÁ LOS POSTS QUE TIENEN UN USUARIO ASOCIADO, QUE ADEMÁS SU ESTADO ES INACTIVO, Y QUE SU ID ES MAYOR A 47
SELECT *
FROM posts
	WHERE usuario_id IS NOT NULL
	AND estatus="inactivo"
	AND id > 47;



# ----------------------------------------- GROUP BY --------------------------------------------
# ESTA CONSULTA NOS CONTARÁ EL TOTAL DE LOS ESTADOS TANTO ACTIVOS COMO INACTIVOS
SELECT estatus AS Estado, COUNT(*) Cantidad
FROM posts 
	GROUP BY estatus;

# ESTA CONSULTA NOS CONTARÁ EL TOTAL DE LOS ESTADOS INACTIVOS
SELECT estatus AS Estado, COUNT(*) Cantidad
FROM posts 
	WHERE estatus="inactivo"
	GROUP BY estatus;

# ESTA CONSULTA NOS CONTARÁ LOS POSTS HECHOS EN CADA AÑO
SELECT YEAR(fecha_publicacion) AS Año, COUNT(*) AS "Cantidad de posts"
FROM posts
	GROUP BY Año;

# ESTA CONSULTA NOS CONTARÁ LOS POST HECHOS EN CADA MES, Y NOS TRAERÁ EL NOMBRE DE ESE MES
SELECT MONTHNAME(fecha_publicacion) AS Mes, COUNT(*) AS "Cantidad de posts"
FROM posts
	GROUP BY Mes;

# ESTA CONSULTA NOS CONTARÁ LOS POST HECHOS EN CADA MES, Y NOS TRAERÁ EL NOMBRE DE ESE MES, ADEMÁS SEPARARÁ LOS ACTIVOS DE LOS INACTIVOS
SELECT estatus AS Estado, MONTHNAME(fecha_publicacion) AS Mes, 
COUNT(*) AS "Cantidad de posts"
FROM posts
	GROUP BY Mes, Estado;



# ----------------------------------------- NESTED QUERY (SUBCONSULTA) --------------------------------------------
# SUBCONSULTA PARA TRAER LA FECHA EXACTA Y EL CONTEO (1) DEL PRIMER POST DE CADA AÑO
SELECT new_table_projection.date, COUNT(*) AS post_count
FROM (
	SELECT DATE(MIN(fecha_publicacion)) AS date, YEAR(fecha_publicacion) AS post_year
	FROM posts
	GROUP BY post_year
) AS new_table_projection
GROUP BY new_table_projection.date
ORDER BY new_table_projection.date;


# SUBCONSULTA PARA TRAER LOS POSTS QUE TENGAN UNA FECHA DE PUBLICACIÓN MÁXIMA. EN RESUMEN, TRAER EL ÚLITMO POST CREADO SEGÚN LA FECHA 
SELECT *
FROM posts
WHERE fecha_publicacion = 
(
	SELECT MAX(fecha_publicacion)
    	FROM posts
);


# ------------------------------ PREGUNTA A QUERY SQL ----------------------------------
# TRAER LOS POSTS REALIZADOS POR EL USUARIO R4gnar JUNTO A SU NICKNAME
SELECT u.nickname AS Usuario, p.titulo AS "Título del Post"
FROM usuarios u 
INNER JOIN posts p ON u.id=p.usuario_id 
WHERE u.login="Camilo" 
ORDER BY p.fecha_publicacion;


# TRAER POR MEDIO DE UNA CONSULTA, LOS TÍTULOS DE LOS POSTS JUNTO A LA CANTIDAD DE ETIQUETAS QUE TIENEN ASOCIADOS, Y ORDENARLOS POR ORDEN DESCENDENTE(MAYOR A MENOR)
SELECT posts.titulo AS Título, COUNT(*) Tags
FROM posts
	INNER JOIN posts_etiquetas 
	ON posts.id=posts_etiquetas.post_id
	INNER JOIN etiquetas
	ON etiquetas.id=posts_etiquetas.etiqueta_id
      GROUP BY posts.id
	ORDER BY Tags DESC;


# ------------------------------  GROUP CONCAT --------------------------------------
# TRAER POR MEDIO DE UNA CONSULTA, LOS TÍTULOS DE LOS POSTS JUNTO AL TOTAL DE ETIQUETAS QUE TENGA(SE DEBE
# MOSTRAR EL NOMBRE DE LAS TAGS)
SELECT posts.titulo AS Título, GROUP_CONCAT(etiquetas.nombre) AS Etiquetas
FROM posts
	INNER JOIN posts_etiquetas 
	ON posts.id=posts_etiquetas.post_id
	INNER JOIN etiquetas
	ON etiquetas.id=posts_etiquetas.etiqueta_id
      GROUP BY posts.id
	ORDER BY Tags DESC;

# -------------------------  CONSULTANDO PLATZI BLOG --------------------------------
# TRAER POR MEDIO DE UNA CONSULTA, LAS ETIQUETAS QUE NO TENGAN NINGUN POST
SELECT *
FROM etiquetas
	LEFT JOIN posts_etiquetas ON etiquetas.id = posts_etiquetas.etiqueta_id	
	WHERE posts_etiquetas.etiqueta_id IS NULL; 

#TRAER DE MANERA DESCENDENTE LAS CATEGORÍAS QUE TENGAN MÁS POSTS ASOCIADOS
SELECT c.titulo, COUNT(*) AS cant_post
FROM categorias c
	INNER JOIN posts p ON c.id=p.categoria_id
	GROUP BY c.id
	ORDER BY cant_post DESC;

# SABER QUÉ USUARIO HA ESTADO CREANDO MÁS POSTS EN EL SISTEMA
SELECT u.nickname, COUNT(*) AS cant_post
FROM usuarios u 
	INNER JOIN posts p ON u.id=p.usuario_id
	GROUP BY u.id
	ORDER BY cant_post DESC
	LIMIT 1;

# CONOCER A LOS USUARIOS JUNTO A LA CANTIDAD DE POSTS QUE HAN ESCRITO, Y A SU VEZ, CONOCER EL TITULO DE LA CATEGORÍA SOBRE CADA POST
SELECT u.nickname, COUNT(*) AS cant_post, GROUP_CONCAT(c.titulo) AS Categorias
FROM usuarios u 
	INNER JOIN posts p ON u.id=p.usuario_id
	INNER JOIN categorias c ON c.id = p.categoria_id
	GROUP BY u.id
	ORDER BY cant_post DESC;

# CONOCER A LOS USUARIOS JUNTO A LA CANTIDAD DE POSTS QUE HAN ESCRITO, Y A SU VEZ, CONOCER EL TITULO DE LA CATEGORÍA SOBRE CADA POST: MISMA CONSULTA PERO SIN REPETIR LAS CATEGORÍAS
SELECT u.nickname, COUNT(*) AS cant_post, GROUP_CONCAT(DISTINCT c.titulo) AS Categorias
FROM usuarios u 
	INNER JOIN posts p ON u.id=p.usuario_id
	INNER JOIN categorias c ON c.id = p.categoria_id
	GROUP BY u.id
	ORDER BY cant_post DESC;

# SABER QUÉ USUARIOS TENEMOS QUE NO HAN ESCRITO NINGÚN POST
SELECT *
FROM usuarios
	LEFT JOIN posts ON usuarios.id=posts.usuario_id
	WHERE posts.titulo IS NULL;
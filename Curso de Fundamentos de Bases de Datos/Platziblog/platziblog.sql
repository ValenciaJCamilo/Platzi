# CREAMOS EL ESQUEMA platziblog
CREATE SCHEMA platziblog;


# ---------------------------  CREACIÓN TABLAS INDEPENDIENTES --------------------------- 
# CREAMOS LA TABLA categorias
CREATE TABLE categorias(
   id INT NOT NULL AUTO_INCREMENT,
   titulo VARCHAR(40) NOT NULL,
   CONSTRAINT PRIMARY KEY (id));

# CREAMOS LA TABLA etiquetas
CREATE TABLE etiquetas(
   id INT NOT NULL AUTO_INCREMENT,
   nombre VARCHAR(30) NOT NULL,
   CONSTRAINT PRIMARY KEY (id));

# CREAMOS LA TABLA usuarios
CREATE TABLE usuarios(
   id INT NOT NULL AUTO_INCREMENT,
   login VARCHAR(30) NOT NULL,
   password VARCHAR(50) NOT NULL,
   nickname VARCHAR(40) NOT NULL,
   email VARCHAR(60) UNIQUE NOT NULL,
   CONSTRAINT PRIMARY KEY(id));


# ---------------------------  CREACIÓN TABLAS DEPENDIENTES ---------------------------  
# CREAR TABLA posts
CREATE TABLE posts(
   id INTEGER NOT NULL AUTO_INCREMENT,
   titulo VARCHAR(150) NOT NULL,
   fecha_publicacion TIMESTAMP NOT NULL,
   contenido TEXT NOT NULL,
   # Check in permite solamente dos estados
   estatus CHAR(8) CHECK(estatus IN("activo","inactivo")),
   usuario_id INTEGER NOT NULL,
   categoria_id INTEGER NOT NULL,
   # Llave primaria
   CONSTRAINT PRIMARY KEY(id),
   # Llave foránea usuarios
   CONSTRAINT FOREIGN KEY (usuario_id) REFERENCES usuarios(id) 
   ON DELETE NO ACTION ON UPDATE CASCADE,
   # Llave foránea categorías
   CONSTRAINT FOREIGN KEY (categoria_id) REFERENCES categorias(id) 
   ON DELETE NO ACTION ON UPDATE NO ACTION);

# CREAR TABLA comentarios
CREATE TABLE comentarios(
   id INTEGER NOT NULL AUTO_INCREMENT,
   contenido TEXT NOT NULL, 
   usuario_id INTEGER NOT NULL,
   post_id INTEGER NOT NULL,
   # Llave primaria
   CONSTRAINT PRIMARY KEY(id),
   # Llave foránea usuarios
   CONSTRAINT FOREIGN KEY (usuario_id) REFERENCES usuarios(id) 
   ON DELETE NO ACTION ON UPDATE CASCADE,
   # Llave foránea posts
   CONSTRAINT FOREIGN KEY (post_id) REFERENCES posts(id) 
   ON DELETE NO ACTION ON UPDATE CASCADE);


# ---------------------------  CREACIÓN TABLAS TRANSITIVAS ---------------------------  
# CREAR TABLA posts_etiquetas
CREATE TABLE posts_etiquetas(
   id INTEGER NOT NULL AUTO_INCREMENT,
   post_id INTEGER NOT NULL,
   etiqueta_id INTEGER NOT NULL,
   # Llave primaria
   CONSTRAINT PRIMARY KEY(id),
   # Llave foránea posts
   CONSTRAINT FOREIGN KEY (post_id) REFERENCES posts(id) 
   ON DELETE NO ACTION,  
   # Llave foránea etiquetas
   CONSTRAINT FOREIGN KEY (etiqueta_id) REFERENCES etiquetas(id) 
   ON DELETE NO ACTION);



# ---------------------------  LLENANDO LAS TABLAS ---------------------------  
# INSERCIÓN DE DATOS EN LA TABLA categorias
INSERT INTO categorias (titulo)
   VALUES 
	('Ciencia'),
	('Tecnología'),
	('Deportes'),
	('Espectáculos'),
      ('Economía');

# INSERCIÓN DE DATOS EN LA TABLA usuarios
INSERT INTO usuarios (login,password,nickname,email)
   VALUES
	('Camilo','contraseñaCamilo','R4gnar','camilovalncias@gmail.com'),
	('Laura','contraseñaLaura','LauraJ12','llozano@gmail.com'),
	('Oscar','contraseñaOscar','Baalmortum','osdavar@gmail.com'),
	('Gabriel','contraseñaGabriel','Gabot','gcastro13@udi.edu.co'),
	('Marly','contraseñaMarly','Alex','macosta1@udi.edu.co');

# INSERCIÓN DE DATOS EN LA TABLA etiquetas
INSERT INTO etiquetas (id,nombre)
   VALUES 
	(1,'Robótica'),
	(2,'Computación'),
	(3,'Teléfonos Móviles'),
      (4,'Automovilismo'),
	(5,'Campeonatos'),
	(6,'Equipos'),
	(7,'Bolsa de valores'),
	(8,'Inversiones'),
	(9,'Brokers'),
	(10,'Celebridades'),
	(11,'Eventos'),
	(12,'Moda'),
	(13,'Avances'),
	(14,'Nobel'),
	(15,'Matemáticas'),
	(16,'Química'),
	(17,'Física'),
 	(18,'Largo plazo'),
 	(19,'Bienes Raíces'),
 	(20,'Estilo');

# INSERCIÓN DE DATOS EN LA TABLA posts
INSERT INTO posts (id,titulo,fecha_publicacion,contenido,estatus,usuario_id,categoria_id)
  VALUES 
	(43,'Se presenta el nuevo teléfono móvil en evento','2030-04-05 00:00:00','Los pronósticos van cumpliéndose: Apple remitió hace unas horas las invitaciones para su acostumbrada retransmisión de septiembre, en la que suele dar a conocer cada generación del iPhone. Será el próximo martes, día 14, cuando los de Cupertino 	revelen el diseño, las especificaciones y la fecha de lanzamiento de hasta cuatro nuevos modelos: iPhone 13 	mini (5,4 pulgadas), iPhone 13 (6,1 pulgadas), iPhone 13 Pro (6,1 pulgadas) y iPhone 13 Pro Max (6,7 	pulgadas).El evento podrá seguirse en streaming a partir de las 19:00 horas peninsulares, ratificándose (o 	todo lo contrario) características como un notch más estrecho, un panel de hasta 120 hercios en las 	variantes Pro, el nuevo procesador A15, mejores cámaras, más batería y la compatibilidad con redes móvil 5G de 	alto rendimiento.','activo',1,2),
	(44,'Tenemos un nuevo auto inteligente','2025-05-04 00:00:00','Todos los coches Tesla vienen de serie con un hardware avanzado capaz de ofrecer las funciones de Piloto automático y de conducción autónoma total a través 	de actualizaciones de software diseñadas para mejorar la funcionalidad con el tiempo. Ocho cámaras envolventes 	ofrecen una visibilidad de 360 grados alrededor del coche con un alcance de hasta 250 metros. Doce sensores ultrasónicos mejorados complementan esta visión, lo que permite la detección de objetos tanto duros como blandos a casi el doble de distancia que el sistema anterior.','activo',2,2),
	(45,'Ganador del premio Nobel por trabajo en genética','2023-12-22 00:00:00',' Emmanuelle Charpentier y Jennifer A. Doudna son las ganadoras del Premio Nobel de Química 2023 "por el desarrollo de un método para la edición del genoma" "Descubrieron una de las herramientas más ingeniosas de la tecnología genética: las 	tijeras genéticas CRISPR/Cas9", anunció la Real Academia de las Ciencias de Suecia este miércoles.','activo',3,1),
	(46,'Los mejores vestidos en la alfombra roja','2021-12-22 00:00:00','Impecables o atrevidas: repasamos las apariciones más memorables en la alfombra roja de los premios cinematográficos que este domingo celebrarán su 	92ª edición. El de Julia Roberts es uno de los vestidos más icónicos de todos los tiempos. En 2001, año en el 	que ganó la estatuilla por su papel en Erin Brockovich, se hizo también con el título de mejor vestida de la noche gracias a este Valentino de 1991 (responsable del resurgir del mercado de segunda mano). Uno de los más 	elegantes de la lista: el vestido rojo de Ghesquière para Balenciaga que lució Nicole Kidman en 2007. Audrey Hepburn fue la primera actriz en ganar un Oscar, un Globo de Oro y un BAFTA por el mismo papel. Para recoger su estatuilla por Vacaciones en Roma en 1954 lució este diseño de Givenchy que ya ha pasado a la 	historia.','activo',4,4),
	(47,'Los paparatzi captan escándalo en cámara','2025-01-09 00:00:00','Después de ocho meses que Livia Brito golpeó junto a su novio al paparazzi Ernesto Zepeda en las playas de Cancún, además de robar su equipo de trabajo, la cubana por fin enfrentó de nuevo a la prensa. A su salida de Televisa, platicamos con la actriz 	sobre este asunto que lleva un proceso legal en Quintana Roo y del por qué hasta ahora decidió hablar. “No 	tenía proyecto, justamente por eso, cuando comienzo un proyecto les platico de lo que voy hacer 	promocionalmente hablando”, indicó a JDS. Ante la pregunta del juicio legal que enfrenta o si ya hubo un 	acuerdo con el fotógrafo, dijo estar contenta de volver al trabajo. “Estoy muy feliz, les agradezco, les mando 	besitos y no puedo decir nada más, muchas gracias”, dijo la actriz.','inactivo',4,4),
	(48,'Se mejora la conducción autónoma de vehículos','2022-05-23 00:00:00','El aprendizaje y utilización de técnicas de conducción preventiva suponen una gran diferencia a la hora exprimir el máximo rendimiento de un vehículo, reducir el consumo de combustible, extender la vida útil de la mecánica y, sobre todo, incrementar la seguridad en carretera.Por supuesto, como en cualquier otro ámbito, se exige cierto nivel de dedicación, así como el aprendizaje de conocimientos clave.A lo largo de los contenidos de nuestro blog, vas a tener acceso a una gran cantidad de artículos especializados en las principales técnicas de conducción, de manera que, rápidamente, podrás convertirte en un experto al volante.','activo',1,2),
	(49,'Se descubre nueva partícula del modelo estandar','2023-01-10 00:00:00','Los griegos llamaron “átomo” a la partícula más pequeña a la que se pudiera llegar dividiendo la materia. Era un concepto puramente teórico, pero era todo lo que sabían de él y así de impreciso consiguió mantenerse hasta tiempos muy recientes. El modelo se vino abajo a mediados del siglo XIX, cuando se empezó a pensar que el átomo tenía “ partes”.  En 1897  J.J.Thomson (no confundir con W.Thomson, Barón Kelvin) descubrió el electrón como partícula elemental con carga eléctrica negativa, que formaba parte del átomo. Como los átomos eran eléctricamente neutros, se pensó que la materia del átomo tenía carga eléctrica positiva, neutralizada por los electrones. El átomo, por tanto, era como un “pudding de ciruelas” en el que anidaban los electrones.','activo',2,1),
	(50,'Químicos descubren nanomaterial','2026-06-04 00:00:00','La nanotecnología se sirve de objetos o artefactos de muy reducido tamaño. Los nanomateriales son un producto nanotecnológico de creciente importancia. Contienen nanopartículas, de un tamaño que no supera los 100 nanómetros al menos en una dimensión.Los nanomateriales empiezan a utilizarse en campos como el sanitario, la electrónica y la cosmética, entre otros. Sus propiedades físicas y químicas suelen diferir de las de otros materiales a granel, por lo que requieren una evaluación de riesgos especializada. Esta debe cubrir los riesgos para la salud de los trabajadores y los consumidores, así como posibles riesgos medioambientales. ','activo',2,1),
	(51,'La bolsa cae estrepitosamente','2024-04-03 00:00:00','Bitcoin extendió una caída de una semana el viernes, cayendo por debajo de US$42.000 a niveles no vistos desde septiembre.Según el Banco de Inglaterra, las criptomonedas son "peligrosas" y pueden valer ceroLa criptomoneda más grande disminuyó hasta 4.9% a US$41,008, marcando una caída de alrededor de 40% desde su récord cercano a los US$69,000 alcanzado el 10 de noviembre. Ether, la segunda más grande, cayó hasta 9% a su nivel más bajo desde el 30 de septiembre. Ambos tokens, así como otros, incluidos Binance Coin, Solana, Cardano y XRP, han bajado más de 10% en los últimos siete días, según CoinGecko.El retroceso se produce después de que las minutas de la reunión de diciembre de la Reserva Federal, publicadas el miércoles, señalaran la posibilidad de subidas de tipos antes y más rápidas de lo esperado, así como un posible deterioro del balance.','activo',2,5),
	(52,'Bienes raices más baratos que nunca','2025-04-11 00:00:00','Sebastián Romero, uno de los denunciantes, informó que fueron alrededor de 30 millones de pesos los que consignaron desde junio de 2021 para alojarse a principios de este año en 10 apartamentos y un penthouse en el edificio Reserva del Mar, ubicado en El Rodadero.','inactivo',2,5),
	(53,'Se fortalece el peso frente al dolar','2021-10-09 00:00:00','El dólar cerró este jueves en $4.039,28 en promedio, lo cual representa una leve caída de $3,08 frente a la Tasa Representativa del Mercado, TRM, que para esta jornada se ubicó en $4.042,36.La TRM que regirá este viernes en Colombia será de $4.039,31, según lo dio a conocer la Superintendencia Financiera.El precio de apertura del dólar registrado por la plataforma Set-FX fue $4.045, mientras que el de cierre fue $4.034,5. El precio máximo durante la jornada fue de $4.066,8, mientras que el mínimo fue de $4.025. Durante las operaciones del día se transaron US$739 millones a través de 799 transacciones.','activo',1,5),
	(54,'Tenemos ganador de la formula e','2022-11-11 00:00:00','Era el año 2012 cuando empezó a hablarse de la Fórmula E. Hay quien llevaba tiempo imaginando que más tarde o más temprano la hegemonía de los coches de combustión interna llegaría a su fin, abriéndose entonces paso otro tipo de tecnologías alternativas, con la electricidad como protagonista. De hecho incluso un año antes la FIA ya empezaba a hablar de que quería carreras de coches eléctricos, sin todavía ponerle nombre.Y así también se soñaba para el futuro con una competición internacional de alto nivel con coches movidos por la electricidad, y no por la gasolina. De esta manera empezó a hablarse de la Fórmula E, como contrapunto con la Fórmula 1, la de coches de gasolina, y que ahora mismo se considera la categoría reina de todas las competiciones de motor.','activo',1,3),
	(55,'Ganan partido frente a visitantes','2023-12-10 00:00:00','El empate en La Paz ante Bolivia quedó atrás, la Selección Colombia ya está en Asunción y tiene su mira puesta en el próximo reto: Paraguay, en partido aplazado de la sexta fecha de las Eliminatorias Sudamericanas al Mundial de Qatar 2022. Los dirigidos por Reinado Rueda están en la necesidad de ganar para así meterse en puestos de clasificación a la siguiente Copa del Mundo.El presente de la Albirroja no es el mejor, pues los dirigidos por Eduardo Berizo están una casilla más abajo que la Tricolor, por lo que el equipo nacional buscará seguir alargando su racha de victorias en el estadio Defensores del Chaco, en el que no pierden desde 1997 contra el rival con el que más veces se han enfrentado en partidos clasificatorios. Las últimas cinco visitas de la Selección Colombia a Asunción han terminado en victoria, siendo estos los únicos triunfos del equipo nacional en condición de visitante ante la selección paraguaya en toda la historia de las Eliminatorias, dejando un saldo de cinco victorias para cada una de las selecciones y dos empates.','activo',2,3),
	(56,'Equipo veterano da un gran espectaculo','2023-12-01 00:00:00','A Envigado, Atlético Nacional, Itagüí Ditaires e Independiente Medellín la cuota de experiencia en sus plantillas les ha salvado en varias ocasiones la papeleta en la Liga Postobón I-2013. Y es que a esos jugadores que superan los 35 años el tiempo parece no tocarlos y siguen dejando huella en la cancha con su talento, inteligencia y sapiencia. (Galería: Viejitos, pero rendidores)Como lo hacen fecha a fecha Ryan Giggs en el Manchester United, Ze Roberto en Gremio o Javier Zanetti en el Inter de Milan, los veteranos también son protagonistas en el torneo colombiano. Y la prueba más reciente de ello la dio Néider Morantes en la jornada 14 del Apertura con el juego redondo que realizó ante el conjunto verdolaga,Esos inmortales del balón han tomado un rol protagónico en los elencos antioqueños y realizan campañas interesantes por sus goles, liderazgo y experiencia.','inactivo',2,3),
	(57,'Escándalo con el boxeador del momento','2025-03-05 00:00:00','Los rankings divisionales de boxeo de ESPN destacan lo mejor del deporte en cada categoría de peso. Cambiarán a menudo en función de los resultados y las actuaciones recientes. Las clasificaciones se basan en lo que logró un boxeador en la división de peso en la que está clasificado. Un peleador que anunció que está subiendo o bajando a una nueva división de peso no se clasificará en una nueva categoría de peso hasta que realmente pelee en esa categoría de peso (y justifique ser clasificado).Los peleadores que actualmente poseen títulos en dos divisiones diferentes se clasificarán en ambas categorías de peso.Los boxeadores que no hayan competido en los últimos 15 meses, y que no tengan una pelea programada, serán eliminados de la clasificación. Cualquier peleador que dé positivo por una sustancia que mejore el rendimiento también será eliminado de la clasificación. Ese boxeador será elegible para volver a ingresar al ranking después de la siguiente pelea.','activo',4,4),
	(58,'Fuccia OS sacude al mundo','2028-10-10 00:00:00','Aunque no se habla mucho de él, hace ya bastante tiempo que sabemos de la existencia de Fuchsia OS, un nuevo sistema operativo desarrollado por Google. Poco se conoce sobre su futuro, sobre si será el sucesor de Android o de Chrome OS, si será un sistema operativo para dominarlos a todos o si será un nuevo SO enfocado a otras cosas más allá de móviles y ordenadores. Hace tres años que oímos hablar de él por primera vez, pero todavía sigue siendo una incógnita.Google no ha hablado demasiado de Fuchsia OS. De hecho, fue curioso que en la conferencia de apertura del Google I/O 2019 apenas se le mentase, más allá de un par de palabras y de pasada. Sin embargo, parece que la Gran G ha comenzado a abrirse un poco y a desvelar algunos detalles, no muchos, sobre qué es Fuchsia OS y qué podemos esperar de él. Y no, no parece que tenga planeado sustituir a Android, al menos por el momento.','activo',1,2),
	(59,'U.S. Robotics presenta hallazgo','2029-01-10 00:00:00','El material contenido en este documento es meramente informativo y está sujeto a cambios sin notificación previa. USRobotics no se hace responsable de ninguna garantía en relación con el contenido de este documento y rechaza cualquier tipo de garantía de comerciabilidad o adecuación a algún propósito en particular. Ninguna parte de este documento se puede reproducir, transmitir, transcribir o almacenar en un sistema del que se pueda recuperar de ninguna forma ni por ningún medio mecánico, magnético, electrónico, óptico, químico o, si es así, sin la autorización escrita de USRobotics. USRobotics no asume ninguna responsabilidad sobre errores u omisiones de este manual. U.S. Robotics tampoco se compromete a actualizar la información aquí contenida.','activo',1,2),
	(60,'Cierra campeonato mundial de football de manera impresionante','2023-04-10 00:00:00','La Copa Mundial de la FIFA es una competición internacional de fútbol creada en 1930. Consiste en equipos nacionales de hombres de países miembros de la Federación Internacional de Fútbol Asociación (FIFA). El torneo ha tenido lugar cada cuatro años, salvo en 1942, ya que fue cancelada debido a la Segunda Guerra Mundial, y en 1946, porque Europa estaba destruida y muchos de los países de este continente no tenían una selección. La última Copa del Mundo se celebró en Rusia, y fue ganada por Francia, siendo este su segundo título, frente a Croacia.','activo',2,3),
	(61,'Escándalo en el mundo de la moda','2022-04-11 00:00:00','Las prendas deportivas son el boom esta temporada. De nuevo, las influencers y celebridades introducen en sus looks de street style. Leggings, joggers, pantalones de ciclista, sudaderas, zapatillas o jerséis de cricket conjuntados que prendas más formales para hacer equilibrio y rejuvenecer el outfit sin esfuerzo, siguiendo los trucos de estilo de iconos de moda retro para ir a la última. ','activo',4,4),
	(62,'Tenemos campeona del mundial de volleiball','2024-09-09 00:00:00','El Campeonato Mundial de Voleibol Femenino es la máxima competición internacional de voleibol disputada por los equipos nacionales femeninos miembros de la Federación Internacional de Voleibol (FIVB). La primera edición tuvo lugar en 1952 y desde entonces se realiza cada cuatro años. El actual campeón es Serbia, que ganó su primer título el torneo de 2018. ','activo',2,3),
	(63,'Se descubre la unión entre astrofísica y fisica cuántica','2022-05-03 00:00:00','l libre albedrío, la libertad que suponemos en el delincuente o el santo para hacer lo que hace, es un pilar de la ética y un supuesto dado por hecho en toda ley para que haya delito. Pero, ¿existe? Si un fenómeno se explica con física clásica, la de la vida cotidiana donde los gatos están vivos o muertos, el agua hace ondas y la arena son partículas, y no existe superposición de estados, el sentido común y la ciencia prefieren la explicación clásica. En el mundo subatómico fue necesario crear una nueva física basada en que la energía no es continua, viene en minúsculos paquetes que Planck denominó, a partir del latín, quantum, con plural neutro quanta.','activo',3,1),
	(64,'El post que se quedó huérfano','2029-08-08 00:00:00','Las notas adhesivas fueron creadas por El Dr. Spencer Silver, científico de 3M, que por allá en 1968 estaba desarrollando un pegamento que pudiera ser utilizado en aviones, sin embargo, el resultado fue un pegamento débil al que en ese momento no le encontró utilidad.  Casi 10 años después otro científico de la compañía, Art Fry, que necesitaba desesperadamente mantener separadas las páginas del salmo durante sus presentaciones en la iglesia, recordó el invento de Silver, así que aplicó en un papel amarillo el pegamento.','activo',1,2);

# INSERCIÓN DE DATOS EN LA TABLA posts_etiquetas
INSERT INTO posts_etiquetas (id,post_id,etiqueta_id)
  VALUES 
	(1,43,3),(2,43,11),(3,44,2),(4,44,4),(5,45,14),(6,45,13),(7,46,10),(8,46,11),(9,46,12),(10,46,20),
	(11,47,10),(12,48,1),(13,48,2),(14,48,4),(15,48,13),(16,49,13),(17,49,14),(18,49,17),(19,50,13),(20,50,14),
	(21,50,16),(22,51,7),(23,51,8),(24,51,9),(25,51,18),(26,52,8),(27,52,18),(28,53,7),(29,53,8),(30,54,4),
	(31,54,5),(32,55,5),(33,55,6),(34,56,5),(35,56,6),(36,56,10),(37,58,2),(38,58,3),(39,58,13),(40,59,1),
	(41,59,13),(42,57,10),(43,60,5),(44,60,6),(45,61,10),(46,61,12),(47,61,20),(48,62,5),(49,62,10),(50,63,13),
	(51,63,14),(52,63,17),(53,52,19);


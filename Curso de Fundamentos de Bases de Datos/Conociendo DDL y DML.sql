# CREATE: CREACIÓN DE LA BASE DE DATOS
CREATE SCHEMA 'platzi_test' ;

# CREATE: CREACIÓN DE LA TABLA people
CREATE TABLE 'plati_test'.'people' (
  'people_id' INT NOT NULL AUTO_INCREMENT,
  'last_name' VARCHAR(255) NULL,
  'first_name' VARCHAR(255) NULL,
  'address' VARCHAR(255) NULL,
  'city' VARCHAR(255) NULL,
  PRIMARY KEY ('people_id'));

# INSERT INTO: INSERCIÓN DE UN USUARIO EN LA TABLA people
INSERT INTO people (last_name,first_name,address,city) 
VALUES('Valencia','Camilo','Cra32 n1735','Bucaramanga');

# INSERT INTO: INSERCIÓN DE VARIOS USUARIOS EN LA TABLA people
INSERT INTO people (last_name,first_name,address,city) 
VALUES('Vargas','Oscar','Calle 1 n156','Montreal'),
('Silva','Maritza','Cra 11 n13','Bogotá'),
('Lozano','Laura','Calle 103a n40a44','Bucaramanga');

# UPDATE: ACTUALIZACIÓN DE INFORMACIÓN EN UN USUARIO DE FORMA SEGURA CON ID
UPDATE people
SET first_name = 'Juan', city='Cali'
WHERE people_id = 1;

# UPDATE: ACTUALIZACIÓN INSEGURA PORQUE ESTARÍAMOS MODIFICANDO LA CIUDAD A TODOS AQUELLOS CON APELLIDO LOZANO
UPDATE people
SET city='Bucaramanga'
WHERE last_name ='Lozano';

# UPDATE: ACTUALIZACIÓN MUY PELIGROSA PORQUE NO POSEE UN WHERE. ESTO CAMBIARÍA LA CIUDAD DE ABSOLUTAMENTE TODOS LOS USUARIOS DE LA TABLA people
UPDATE people
SET city='Bucaramanga'

# DELETE: ELIMINANDO DE MANERA SEGURA A UN USUARIO
DELETE FROM people
WHERE people_id =1;

# DELETE: ELIMINANDO SIN WHERE, MUY INSEGURO
DELETE FROM people;

# SELECT: NOS TRAE LA INFORMACIÓN QUE QUEREMOS
SELECT first_name 
FROM people;
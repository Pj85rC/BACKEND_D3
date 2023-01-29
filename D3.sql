CREATE DATABASE likeme;

CREATE TABLE posts (id SERIAL, titulo VARCHAR(25), img VARCHAR(1000), likes INT);

--3 ruta GET app.get consulta = "SELET * FROM posts"

--4 RUTA POST app.post +
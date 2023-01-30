CREATE DATABASE likeme;

CREATE TABLE posts (id SERIAL, titulo VARCHAR(25), img VARCHAR(1000), likes INT);

--agregando el campo que faltó
ALTER TABLE posts ADD COLUMN descripcion VARCHAR(255);
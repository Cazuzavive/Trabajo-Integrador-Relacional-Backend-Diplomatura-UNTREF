CREATE SCHEMA `TrailerFlix` DEFAULT CHARACTER SET utf8;
use TrailerFlix;
CREATE TABLE IF NOT EXISTS `categorias` (
	`id_categoria` int AUTO_INCREMENT NOT NULL,
	`categoria` varchar(255) NOT NULL,
	PRIMARY KEY (`id_categoria`)
);

CREATE TABLE IF NOT EXISTS `generos` (
	`id_genero` int AUTO_INCREMENT NOT NULL,
	`nombre_genero` varchar(255) NOT NULL,
	PRIMARY KEY (`id_genero`)
);

CREATE TABLE IF NOT EXISTS `actores` (
	`id_actor` int AUTO_INCREMENT NOT NULL,
	`nombre` varchar(255) NOT NULL,
	PRIMARY KEY (`id_actor`)
);

CREATE TABLE IF NOT EXISTS `peliculas_actores` (
	`id_pelicula` int NOT NULL,
	`id_actor` int NOT NULL,
	PRIMARY KEY (`id_pelicula`, `id_actor`)
);

CREATE TABLE IF NOT EXISTS `poster` (
	`id_contenido` int NOT NULL,
	`id_poster` int AUTO_INCREMENT NOT NULL,
	`url_poster` varchar(255) NOT NULL,
	PRIMARY KEY (`id_poster`)
);

CREATE TABLE IF NOT EXISTS `gen` (
	`id_gen` int AUTO_INCREMENT NOT NULL UNIQUE,
	`nombre_gen` varchar(255) NOT NULL,
	PRIMARY KEY (`id_gen`)
);

CREATE TABLE IF NOT EXISTS `peliculas` (
	`id_pelicula` int AUTO_INCREMENT NOT NULL,
	`titulo` varchar(255) NOT NULL,
	`id_categoria` int NOT NULL,
	`id_genero` int NOT NULL,
	`resumen` text NOT NULL,
	`temporadas` int NOT NULL,
	`duracion` int NOT NULL,
	`trailer` varchar(255) NOT NULL,
	`id_gen` int NOT NULL,
	PRIMARY KEY (`id_pelicula`)
);

CREATE TABLE IF NOT EXISTS `genero_actor` (
	`id_genero` int AUTO_INCREMENT NOT NULL UNIQUE,
	`id_actor` int NOT NULL,
	PRIMARY KEY (`id_genero`)
);




ALTER TABLE `peliculas_actores` ADD CONSTRAINT `peliculas_actores_fk0` FOREIGN KEY (`id_pelicula`) REFERENCES `peliculas`(`id_contenido`);
ALTER TABLE `poster` ADD CONSTRAINT `poster_fk0` FOREIGN KEY (`id_contenido`) REFERENCES `peliculas`(`id_contenido`);

ALTER TABLE `peliculas` ADD CONSTRAINT `peliculas_fk2` FOREIGN KEY (`id_categoria`) REFERENCES `categorias`(`id_categoria`);

ALTER TABLE `peliculas` ADD CONSTRAINT `peliculas_fk3` FOREIGN KEY (`id_genero`) REFERENCES `generos`(`id_genero`);

ALTER TABLE `peliculas` ADD CONSTRAINT `peliculas_fk8` FOREIGN KEY (`id_gen`) REFERENCES `gen`(`id_gen`);
ALTER TABLE `genero_actor` ADD CONSTRAINT `genero_actor_fk1` FOREIGN KEY (`id_actor`) REFERENCES `actores`(`id_actor`);

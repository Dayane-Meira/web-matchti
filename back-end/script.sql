CREATE DATABASE db_matchti;

USE db_matchti;

CREATE TABLE tbl_profissional (
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(180) NOT NULL,
	nascimento VARCHAR(10) NOT NULL,
	email VARCHAR(255) NOT NULL,
    	senha VARCHAR(255) NOT NULL,
	telefone VARCHAR(9),
	celular VARCHAR(14) NOT NULL,
	rg VARCHAR(9) NOT NULL,
	cpf VARCHAR(11) NOT NULL UNIQUE,
	area varchar(120) NOT NULL,
	descricao varchar(255) NOT NULL
);

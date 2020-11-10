#DROP TABLE, para excluir as tabelas erradas
DROP TABLE CLIENTE;
DROP TABLE TELEFONE;
DROP TABLE ENDERECO;

CREATE TABLE CLIENTE (
	IDCLIENTE INT PRIMARY KEY AUTO_INCREMENT,
    NOME VARCHAR(30) NOT NULL,
    SEXO ENUM('F', 'M') NOT NULL,
    EMAIL VARCHAR(50) UNIQUE,
    CPF VARCHAR(15) UNIQUE
);

CREATE TABLE ENDERECO (
	IDENDERECO INT PRIMARY KEY AUTO_INCREMENT,
    # CAMPO QUE GUARDARÁ A FK DE CLIENTE
    # UNIQUE GARANTE QUE UM CLIENTE POSSA ESTAR ASSOCIADO SOMENTE A UM ENDEREÇO
    ID_CLIENTE INT UNIQUE,
    RUA VARCHAR(64) NOT NULL,
    CIDADE VARCHAR(32) NOT NULL,
    ESTADO VARCHAR(32) NOT NULL,
    BAIRRO VARCHAR(32) NOT NULL,
    # CRIANDO FK
    FOREIGN KEY (ID_CLIENTE) REFERENCES CLIENTE(IDCLIENTE)
);

CREATE TABLE TELEFONE (
	IDTELEFONE INT PRIMARY KEY AUTO_INCREMENT,
    # CAMPO QUE GUARDARÁ A FK DE CLIENTE
    ID_CLIENTE INT FOREIGN KEY,
    TIPO ENUM('CEL', 'RES', 'COM') NOT NULL,
    NUMERO VARCHAR(10),
    # A AUSÊNCIA DE UNIQUE FAZ COM QUE A RELAÇÃO SEJA (1, N)
    FOREIGN KEY (ID_CLIENTE) REFERENCES CLIENTE(IDCLIENTE)
);
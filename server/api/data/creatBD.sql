-- Criação do banco de dados
CREATE DATABASE IF NOT EXISTS infraNet;
-- Seleção do banco de dados
USE InfraNet;
-- Tabela 'user'
CREATE TABLE IF NOT EXISTS user (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    data_nascimento DATE
);
-- Tabela 'contato'
CREATE TABLE IF NOT EXISTS contato (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    email VARCHAR(255),
    telefone VARCHAR(20),
    ramal VARCHAR(10),
    FOREIGN KEY (user_id) REFERENCES user(id)
);
-- Tabela 'sistema'
CREATE TABLE IF NOT EXISTS acesso (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    cod_acesso VARCHAR(20),
    matricula VARCHAR(20),
    senha VARCHAR(255),
    FOREIGN KEY (user_id) REFERENCES user(id)
);
-- Tabela 'avisos'
CREATE TABLE IF NOT EXISTS avisos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    img_path VARCHAR(255),
    prioridade INT,
    data_publicacao DATE,
    link VARCHAR(255),
    titulo VARCHAR(255) NOT NULL,
    subtitulo VARCHAR(255),
    descricao TEXT
);
-- Tabela 'servicos'
CREATE TABLE IF NOT EXISTS servicos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    img_path VARCHAR(255),
    titulo VARCHAR(255) NOT NULL,
    link VARCHAR(255),
    descricao TEXT
);
-- Tabela 'sistemas'
CREATE TABLE IF NOT EXISTS sistemas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    img_path VARCHAR(255),
    titulo VARCHAR(255) NOT NULL,
    link VARCHAR(255),
    descricao TEXT
);
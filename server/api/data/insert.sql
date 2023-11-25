-- Inserir dados na tabela 'user' para um usuário comum
INSERT INTO user (username, password, data_nascimento)
VALUES ('usuario1', 'senha1', '1990-01-01');

-- Inserir dados na tabela 'contato' para o usuário criado anteriormente
INSERT INTO contato (user_id, email, telefone, ramal)
VALUES (1, 'usuario1@email.com', '123456789', '123');

-- Inserir dados na tabela 'acesso' para o usuário criado anteriormente
INSERT INTO acesso (user_id, cod_acesso, matricula, senha)
VALUES (1, 'cod123', 'mat123', 'senha123');

-- Inserir dados na tabela 'avisos'
INSERT INTO avisos (img_path, prioridade, data_publicacao, titulo, subtitulo, descrição)
VALUES ('/caminho/imagem1.jpg', 1, '2023-11-25', 'Aviso Importante', 'Subtítulo do aviso', 'Este é um aviso importante sobre alguma coisa.');

-- Inserir dados na tabela 'servicos'
INSERT INTO servicos (img_path, titulo, link, descricao)
VALUES ('/caminho/imagem2.jpg', 'Serviço 1', 'http://servico1.com', 'Descrição do Serviço 1');

-- Inserir dados na tabela 'sistemas'
INSERT INTO sistemas (img_path, titulo, link, descricao)
VALUES ('/caminho/imagem3.jpg', 'Sistema 1', 'http://sistema1.com', 'Descrição do Sistema 1');

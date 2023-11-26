-- Inserir dados na tabela 'user' para usuários comuns
INSERT INTO user (username, password, data_nascimento)
VALUES 
  ('Root', '111', '1980-12-01'),
  ('Admin', '123', '1990-01-01');

-- Inserir dados na tabela 'contato' para os usuários criados anteriormente
INSERT INTO contato (user_id, email, telefone, ramal)
VALUES 
  (1, 'root@gmail.com', '879910285401', '100'),
  (2, 'admin@gmail.com', '87991028909', '102');

-- Inserir dados na tabela 'acesso' para os usuários criados anteriormente
INSERT INTO acesso (user_id, cod_acesso, matricula, senha)
VALUES 
  (1, '!@#$', 'EWBJ-2023', '111'),
  (2, '!@#$', 'EWBJ-2023', '123');

-- Inserir dados na tabela 'avisos'
INSERT INTO avisos (img_path, prioridade, data_publicacao, titulo, subtitulo, descricao)
VALUES 
  ('/upload/', 1, '2023-11-25', 'Aviso Importante', 'Subtítulo do aviso', 'Este é um aviso importante sobre alguma coisa.'),
  ('/upload/', 2, '2023-11-25', 'Aviso Importante', 'Subtítulo do aviso', 'Este é um aviso importante sobre alguma coisa.'),
  ('/upload/', 3, '2023-11-25', 'Aviso Importante', 'Subtítulo do aviso', 'Este é um aviso importante sobre alguma coisa.'),
  ('/upload/', 3, '2023-11-25', 'Aviso Importante', 'Subtítulo do aviso', 'Este é um aviso importante sobre alguma coisa.');

-- Inserir dados na tabela 'servicos'
INSERT INTO servicos (img_path, titulo, link, descricao)
VALUES 
  ('/caminho/imagem2.jpg', 'QAcadêmico', 'http://servico1.com', 'Descrição do Serviço 1'),
  ('/caminho/imagem2.jpg', 'Refeitório', 'http://servico1.com', 'Descrição do Serviço 2'),
  ('/caminho/imagem2.jpg', 'Biblioteca', 'http://servico1.com', 'Descrição do Serviço 3'),
  ('/caminho/imagem2.jpg', 'APP 4', 'http://servico1.com', 'Descrição do Serviço 4'),
  ('/caminho/imagem2.jpg', 'APP 5', 'http://servico1.com', 'Descrição do Serviço 5'),
  ('/caminho/imagem2.jpg', 'APP 6', 'http://servico1.com', 'Descrição do Serviço 6'),
  ('/caminho/imagem2.jpg', 'APP 7', 'http://servico1.com', 'Descrição do Serviço 7'),
  ('/caminho/imagem2.jpg', 'APP 8', 'http://servico1.com', 'Descrição do Serviço 8');

-- Inserir dados na tabela 'sistemas'
INSERT INTO sistemas (img_path, titulo, link, descricao)
VALUES 
  ('/caminho/imagem3.jpg', 'Gov', 'http://sistema1.com', 'Descrição do Sistema 1'),
  ('/caminho/imagem3.jpg', 'Ingresso', 'http://sistema2.com', 'Descrição do Sistema 2'),
  ('/caminho/imagem3.jpg', 'APP 3', 'http://sistema3.com', 'Descrição do Sistema 3'),
  ('/caminho/imagem3.jpg', 'APP 4', 'http://sistema4.com', 'Descrição do Sistema 4'),
  ('/caminho/imagem3.jpg', 'APP 5', 'http://sistema5.com', 'Descrição do Sistema 5'),
  ('/caminho/imagem3.jpg', 'APP 6', 'http://sistema6.com', 'Descrição do Sistema 6'),
  ('/caminho/imagem3.jpg', 'APP 7', 'http://sistema7.com', 'Descrição do Sistema 7'),
  ('/caminho/imagem3.jpg', 'APP 8', 'http://sistema8.com', 'Descrição do Sistema 8');

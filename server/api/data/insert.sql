-- Inserir dados no Banco de Dados
USE InfraNet;

-- Inserir dados na tabela 'user' para usuários comuns
INSERT INTO user (username, password, data_nascimento)
VALUES 
  ('Root', '111', '1980-12-01'),
  ('Admin', '123', '1990-01-01'),
  ('Erimilson Silva' ,'2023', '1998-12-22');

-- Inserir dados na tabela 'contato' para os usuários criados anteriormente
INSERT INTO contato (user_id, email, telefone, ramal)
VALUES 
  (1, 'root@gmail.com', '879910285401', '100'),
  (2, 'admin@gmail.com', '87991028909', '102'),
  (3, 'eesr@gmail.com', '879910285401', '999');

-- Inserir dados na tabela 'acesso' para os usuários criados anteriormente
INSERT INTO acesso (user_id, cod_acesso, matricula, senha)
VALUES 
  (1, '!@#$', 'EWBJ-2021', '111'),
  (2, '!@#$', 'EWBJ-2022', '123'),
  (3, '!@#$', 'EWBJ-2023', '2023');

-- Inserir dados na tabela 'avisos'
INSERT INTO avisos (img_path, prioridade, data_publicacao, link, titulo, subtitulo, descricao)
VALUES 
  ('jornadaTrabalho.svg', 1, '2023-11-22','avisoDes', 'IFPE publica portaria para implantação da jornada flexibilizada', 'Documento estabelece critérios e condições para flexibilização da jornada de trabalho ', 'O Instituto Federal de Educação, Ciência e Tecnologia de Pernambuco (IFPE) publicou, nesta terça-feira (21), a portaria que estabelece os critérios e as condições para a flexibilização da jornada de trabalho dos/as servidores/as no âmbito do IFPE, nos termos do Decreto nº 1.590, de 10 de agosto de 1995, além de outras providências. '),
  ('estagio.svg', 2, '2023-12-01','avisoDes', 'IFPE divulga vagas para Estágio Vivência 2024.1', 'Oportunidades são para estudantes do IFPE de cursos agrícolas e informática', 'O IFPE, através, da Coordenação de Extensão com os Povos do Campo, anunciou as primeiras vagas do Estágio Vivência 2024.1. Ao todo, estão sendo ofertadas 37 vagas, distribuídas em quatro territórios: Assentamento Nova Canaã, em Tracunhanhém; Assentamento Normandia, em Caruaru; Quilombo do Angico, em Bom Conselho e Território Camponês de Bom Jardim. As oportunidades são para estudantes do IFPE matriculados nos cursos de Agropecuária, Agricultura, Agroecologia, Zootecnia, Agronomia, Agroindústria ou Informática.'),
  ('ivsemana.svg', 3, '2023-12-01','avisoDes', 'IFPE divulga programação da IV Semana Acadêmica', 'Evento será de 04 a 08/12 de forma híbrida e vai reunir atividades das áreas de Ensino, Pesquisa e Extensão', 'Será realizada, entre os dias 04 e 08 de dezembro, a IV Semana Acadêmica do IFPE, que vai congregar os eventos sistêmicos das áreas de Ensino, Pesquisa e Extensão. Promovida em conjunto pelas Pró-Reitoria de Ensino (Proden), Pró-Reitoria de Pesquisa, Pós-Graduação e Inovação (Propesq), e a Pró-Reitoria de Extensão (Proext), o evento integrará várias atividades dessas áreas finalísticas em torno de um conceito comum, com o objetivo geral de intercâmbio de saberes e da cooperação e integração dos atores educativos do ensino, da pesquisa e da extensão.'),
  ('inscricoes.svg', 3, '2023-11-24','avisoDes', 'IFPE prorroga inscrições do Processo de Ingresso 2024.1', 'Estão sendo ofertadas 5414 vagas em cursos técnicos e superiores gratuitos. Inscrições agora vão até o dia 29 de novembro', 'O Instituto Federal de Educação, Ciência e Tecnologia de Pernambuco (IFPE) prorrogou, nesta quinta-feira (23), as inscrições do Processo de Ingresso 2024.1 para novos/as estudantes. Agora, os/as candidatos podem se inscrever até o dia 29 de novembro. Além do prazo das inscrições, outras etapas do cronograma também foram prorrogadas.');

-- Inserir dados na tabela 'servicos'
INSERT INTO servicos (img_path, titulo, link, descricao)
VALUES 
  ('qacademico.svg', 'QAcadêmico', 'https://qacademico.ifpe.edu.br/', 'Sistema de Gestão acadêmica do IFPE'),
  ('refeitorio.svg', 'Refeitório', '', 'Sistema do Refeitório do IFPE'),
  ('biblioteca.svg', 'Biblioteca', '', 'Site da Biblioteca do IFPE'),
  ('imgApp.svg', 'APP 4', '', 'APP do IFPE'),
  ('imgApp.svg', 'APP 5', '', 'APP do IFPE'),
  ('imgApp.svg', 'APP 6', '', 'APP do IFPE'),
  ('imgApp.svg', 'APP 7', '', 'APP do IFPE'),
  ('imgApp.svg', 'APP 8', '', 'APP do IFPE');

-- Inserir dados na tabela 'sistemas'
INSERT INTO sistemas (img_path, titulo, link, descricao)
VALUES 
  ('gov.svg', 'Gov', 'http://sistema1.com', 'Site do Governos Federal'),
  ('ingresso.svg', 'Ingresso', 'https://ingresso.ifpe.edu.br/inscricao/', 'Site de Inscrição do IFPE'),
  ('imgApp.svg', 'APP 3', '', 'APP do IFPE'),
  ('imgApp.svg', 'APP 4', '', 'APP do IFPE'),
  ('imgApp.svg', 'APP 5', '', 'APP do IFPE'),
  ('imgApp.svg', 'APP 6', '', 'APP do IFPE'),
  ('imgApp.svg', 'APP 7', '', 'APP do IFPE'),
  ('imgApp.svg', 'APP 8', '', 'APP do IFPE');

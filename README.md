API de Lista de Tarefas (To-Do List)
Este projeto consiste em uma API RESTful completa para gerenciamento de uma lista de tarefas. A API foi desenvolvida com Node.js e Express, utilizando um banco de dados relacional (MySQL) para a persistência dos dados.

A aplicação suporta todas as operações básicas de um CRUD (Create, Read, Update, Delete) e foi estruturada de forma organizada, separando as responsabilidades em camadas como Rotas, Controladores, Middlewares e Modelos, seguindo as melhores práticas de desenvolvimento de software.

✨ Funcionalidades
Criar novas tarefas.

Listar todas as tarefas cadastradas.

Atualizar o título e o status de uma tarefa existente.

Deletar uma tarefa específica.

Validação dos dados de entrada para garantir que tarefas não sejam criadas ou atualizadas com informações inválidas.

🛠️ Tecnologias e Ferramentas
A seguir, a lista de ferramentas essenciais utilizadas na construção e teste do projeto:

Ferramenta	Uso no Projeto
Node.js	Ambiente de execução para o código JavaScript no backend.
Express.js	Framework para criar o servidor e gerenciar as rotas da API.
MySQL	Banco de dados relacional para armazenar as tarefas.
Docker	Ferramenta para criar e gerenciar o ambiente do banco de dados MySQL de forma isolada e padronizada.
Nodemon	Utilitário que reinicia o servidor automaticamente durante o desenvolvimento.
Dotenv	Módulo para carregar variáveis de ambiente a partir de um arquivo .env.
ESLint	Ferramenta para análise estática do código, garantindo um padrão de qualidade.
Insomnia / Postman	Cliente de API para testar os endpoints (GET, POST, PUT, DELETE).

Exportar para as Planilhas
🚀 Instalação e Execução
Para executar este projeto em sua máquina local, siga os passos abaixo na ordem correta.

Pré-requisitos
Antes de começar, certifique-se de ter as seguintes ferramentas instaladas:

Node.js (versão LTS recomendada)

Docker Desktop

Um Cliente de API como Insomnia ou Postman

(Opcional) Um cliente de banco de dados como DBeaver ou uma extensão do VS Code para gerenciar o MySQL.

Passo a Passo
Clone o Repositório

Bash

git clone https://github.com/apenasjoo/ToDoList.git
cd ToDoList/backend
Instale as Dependências do Node.js
Execute o comando abaixo para instalar todos os pacotes definidos no package.json.

Bash

npm install
Configure as Variáveis de Ambiente
Crie uma cópia do arquivo de exemplo .env.example e renomeie para .env.

Bash

cp .env.example .env
Abra o arquivo .env e certifique-se de que as credenciais correspondem ao que será configurado no Docker.

Inicie o Banco de Dados com Docker
Este comando irá baixar a imagem do MySQL (se necessário) e iniciar um contêiner chamado mysql rodando em segundo plano.

Bash

docker run --name mysql -e MYSQL_ROOT_PASSWORD=root -p 3306:3306 -d mysql
Importante: A senha definida em MYSQL_ROOT_PASSWORD (root, neste caso) deve ser a mesma do seu arquivo .env.

Crie o Banco de Dados e a Tabela
Conecte-se ao seu contêiner MySQL usando seu cliente de banco de dados preferido com as credenciais do passo anterior (host: localhost, user: root, password: root, port: 3306). Em seguida, execute o script SQL abaixo para criar a estrutura necessária.

SQL

CREATE DATABASE IF NOT EXISTS todolist;

USE todolist;

CREATE TABLE tasks (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(45) NOT NULL,
    status VARCHAR(45) NOT NULL,
    created_at VARCHAR(45) NOT NULL
);
Execute a Aplicação
Com o banco de dados rodando e configurado, inicie o servidor da API.

Bash

npm run dev
O servidor estará rodando em http://localhost:3333.

Teste os Endpoints
Abra o Insomnia ou Postman e você pode começar a fazer requisições para a API.

📖 Endpoints da API
Método	Endpoint	Descrição	Corpo (Body) da Requisição
GET	/tasks	Lista todas as tarefas.	Vazio
POST	/tasks	Cria uma nova tarefa.	{ "title": "Nova Tarefa" }
PUT	/tasks/{id}	Atualiza uma tarefa existente.	{ "title": "Título Editado", "status": "concluída" }
DELETE	/tasks/{id}	Deleta uma tarefa específica.	Vazio
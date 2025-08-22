# 📌 ToDo List - Full Stack API

Este projeto é uma **API RESTful completa** para gerenciamento de uma Lista de Tarefas (*To-Do List*).  
O objetivo é demonstrar conhecimentos sólidos em **Node.js, Express, Docker e MySQL**, aplicando boas práticas de arquitetura e desenvolvimento back-end. 
o Front-end Sera feito e Desenvolvimento com javascript, HTML e CSS. o Basico mas funcional.

Com essa aplicação, é possível **criar, listar, atualizar e deletar tarefas**, persistindo os dados em um banco relacional.  

---

## 🚀 Tecnologias Utilizadas

- **Node.js** – ambiente de execução JavaScript no servidor.  
- **Express.js** – framework para criação da API RESTful.  
- **MySQL** – banco de dados relacional para persistência das tarefas.  
- **Docker** – conteinerização da aplicação para padronizar o ambiente de execução.  

---

## ⚙️ Funcionalidades Até o Momento

- Criar uma nova tarefa ✅  
- Listar todas as tarefas 📋  
- Atualizar uma tarefa ✏️  
- Deletar uma tarefa 🗑️  

---

## 🛠️ Pré-requisitos

Antes de rodar o projeto, verifique se possui instalado:  

- [Node.js](https://nodejs.org/) (versão LTS recomendada)  
- [Docker](https://www.docker.com/) e [Docker Compose](https://docs.docker.com/compose/)  
- [MySQL Workbench](https://www.mysql.com/products/workbench/) ou outro cliente SQL (opcional, para visualizar os dados).  

---

## ▶️ Como Rodar o Projeto

1. **Clonar o repositório**  
```bash
git clone https://github.com/apenasjoo/ToDoList.git
cd ToDoList
```

2. **Instalar as dependências**  
```bash
npm install
```

3. **Configurar variáveis de ambiente**  
Crie um arquivo `.env` na raiz do projeto com as credenciais do banco de dados:  
```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=sua_senha
DB_NAME=todolist
DB_PORT=3306
```

4. **Rodar com Docker**  
```bash
docker-compose up --build
```

5. **Testar a API**  
Acesse:  
```
http://localhost:3000/api/tasks
```

---

## 📡 Endpoints da API

| Método | Rota             | Descrição                  |
|--------|------------------|-----------------------------|
| GET    | `/api/tasks`     | Lista todas as tarefas      |
| POST   | `/api/tasks`     | Cria uma nova tarefa        |
| PUT    | `/api/tasks/:id` | Atualiza uma tarefa         |
| DELETE | `/api/tasks/:id` | Remove uma tarefa           |

---

## 🎯 Diferenciais do Projeto

- Uso de **Docker** para garantir portabilidade e fácil setup do ambiente.  
- Arquitetura baseada em **RESTful APIs**, aplicando boas práticas.  
- Integração com **banco de dados relacional (MySQL)**.  
- Projeto estruturado para **crescer em complexidade**, permitindo futuras implementações de autenticação, testes automatizados e frontend integrado.  

---

## 💡 Por que este projeto é relevante?

Este projeto foi desenvolvido com o objetivo de **demonstrar habilidades práticas em desenvolvimento back-end e front-end** usando o ecossistema **Node.js** aliado a **bancos de dados relacionais** e práticas modernas como **containerização com Docker**.  

Se você é recrutador: este repositório reflete meu comprometimento em escrever código limpo, estruturado e escalável, pronto para evoluir em ambientes de produção.  

---

## 👨‍💻 Autor

Feito com dedicação por [**João**](https://github.com/apenasjoo) 🚀  

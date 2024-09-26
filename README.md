# Task Tracker Backend

A command-line interface (CLI) application to track your tasks and manage your to-do list. Built with **Nest.js**, this backend service allows you to add, update, delete, and list tasks, with data persisted in a JSON file.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Testing](#testing)
- [Tools](#tools)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

Task Tracker is a simple CLI application designed to help you manage your to-do list efficiently. Built with **Nest.js**, the application provides a RESTful API to handle task operations, with data stored in a JSON file for simplicity and ease of use.

## Features

- **Add Tasks:** Create new tasks with titles and optional descriptions.
- **Update Tasks:** Modify existing tasks, including changing their status.
- **Delete Tasks:** Remove tasks from your to-do list.
- **List Tasks:** View all tasks or filter them based on their status (e.g., pending, in progress, completed).
- **Persistent Storage:** Tasks are stored in a JSON file, eliminating the need for a database.
- **Validation:** Ensures data integrity with proper validation rules.
- **Testing:** Comprehensive end-to-end (e2e) tests to ensure application reliability.

## Technologies Used

- **[Nest.js](https://nestjs.com/):** A progressive Node.js framework for building efficient and scalable server-side applications.
- **TypeScript:** Provides static typing to enhance code quality and maintainability.
- **Jest:** A JavaScript testing framework used for writing and running tests.
- **Supertest:** Used for testing HTTP endpoints.
- **Thunder Client:** A REST API client extension for Visual Studio Code, used for testing the API during development.
- **Node.js:** JavaScript runtime environment.

## Installation

### Prerequisites

- **Node.js** (v14 or later)
- **npm** (v6 or later)

### Steps

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/seu-usuario/task-tracker-backend.git
   ```

2. **Navigate to the Project Directory:**

```bash
cd task-tracker-backend
```

3. **Instale as Dependências:**

```bash
npm install
```

## Configuration

Nenhuma configuração adicional é necessária para o uso básico. A aplicação utiliza um arquivo JSON (tasks.json) localizado no diretório do projeto para armazenar os dados das tarefas.

## Running the Application

### Development Mode

Para rodar a aplicação em modo de desenvolvimento com recarregamento automático:

```bash
npm run start:dev
```

A aplicação será iniciada em http://localhost:3000.

### Production Mode

Para construir e rodar a aplicação em modo de produção:

1. **Build do Projeto:**

```bash
npm run build
```

2. **Iniciar a Aplicação:**

```bash
npm run start:prod
```

## API Endpoints

O backend do Task Tracker expõe os seguintes endpoints RESTful para gerenciamento de tarefas:

### Base URL

```bash
http://localhost:3000
```

### Endpoints

1. **Obter Todas as Tarefas**

- URL: /tasks
- Método: GET
- Descrição: Recupera uma lista de todas as tarefas.
- Resposta: 200 OK com um array de objetos de tarefa.

2. **Obter Tarefa por ID**

- URL: /tasks/:id
- Método: GET
- Descrição: Recupera uma tarefa específica pelo seu ID.
- Resposta:
  _ 200 OK com o objeto da tarefa.
  _ 404 Not Found se a tarefa não for encontrada.

3. **Criar uma Nova Tarefa**

- URL: /tasks
- Método: POST
- Descrição: Cria uma nova tarefa com um título e descrição opcional.
- Body:

  ```json
  {
    "title": "Título da Tarefa",
    "description": "Descrição da Tarefa"
  }
  ```

  Resposta:
  201 Created com o objeto da tarefa criada.
  400 Bad Request se a validação falhar.
  Atualizar uma Tarefa Existente

URL: /tasks/:id
Método: PUT
Descrição: Atualiza o título, descrição ou status de uma tarefa existente.
Body:
json
Copiar código
{
"title": "Título Atualizado",
"description": "Descrição Atualizada",
"status": "em progresso" // ou "concluída", "pendente"
}
Resposta:
200 OK com o objeto da tarefa atualizada.
404 Not Found se a tarefa não for encontrada.
400 Bad Request se a validação falhar.
Deletar uma Tarefa

URL: /tasks/:id
Método: DELETE
Descrição: Remove uma tarefa pelo seu ID.
Resposta:
200 OK após a remoção bem-sucedida.
404 Not Found se a tarefa não for encontrada.
Obter Tarefas por Status

URL: /tasks/status/:status
Método: GET
Descrição: Recupera tarefas filtradas pelo seu status (pendente, em progresso, concluída).
Resposta:
200 OK com um array de objetos de tarefa que correspondem ao status.
Retorna um array vazio se nenhuma tarefa corresponder.

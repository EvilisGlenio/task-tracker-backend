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
  - - 200 OK com o objeto da tarefa.
  - - 404 Not Found se a tarefa não for encontrada.

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

  - Resposta

  * - 201 Created com o objeto da tarefa criada.
  * - 400 Bad Request se a validação falhar.

4. **Atualizar uma Tarefa Existente**

- URL: /tasks/:id
- Método: PUT
- Descrição: Atualiza o título, descrição ou status de uma tarefa existente.
- Body:

  ```json
  {
    "title": "Título Atualizado",
    "description": "Descrição Atualizada",
    "status": "em progresso", "concluída", "pendente"
  }
  ```

  - Resposta:
  - - 200 OK com o objeto da tarefa atualizada.
  - - 404 Not Found se a tarefa não for encontrada.
  - - 400 Bad Request se a validação falhar.

5. **Deletar uma Tarefa**

- URL: /tasks/:id
- Método: DELETE
- Descrição: Remove uma tarefa pelo seu ID.
- Resposta:
  - - 200 OK após a remoção bem-sucedida.
  - - 404 Not Found se a tarefa não for encontrada.

6. **Obter Tarefas por Status**

- URL: /tasks/status/:status
- Método: GET
- Descrição: Recupera tarefas filtradas pelo seu status (pendente, em progresso, concluída).
- Resposta:
  - - 200 OK com um array de objetos de tarefa que correspondem ao status.
  - - Retorna um array vazio se nenhuma tarefa corresponder.

### Exemplos de Respostas

#### Obter Todas as Tarefas

#### Requisição:

```http
GET /tasks
```

#### Resposta:

```json
{
  "id": "1",
  "title": "Comprar leite",
  "description": "Comprar leite no supermercado",
  "status": "pendente"
}
```

## Testing

### Testes End-to-End (E2E)

O projeto inclui testes end-to-end para garantir que todos os endpoints da API funcionem conforme o esperado. Os testes são escritos usando Jest e Supertest.

### Executando os Testes

1. **Certifique-se de que as Dependências estão Instaladas:**

```bash
npm install
```

2. **Rodar os Testes E2E:**

```bash
npm run test:e2e
```

### Estrutura dos Testes

Os testes E2E estão localizados no diretório test e cobrem os seguintes cenários:

- Recuperação de todas as tarefas.
- Recuperação de uma tarefa específica por ID.
- Criação de novas tarefas.
- Atualização de tarefas existentes.
- Deleção de tarefas.
- Filtragem de tarefas por status.
- Tratamento de casos de erro (por exemplo, tarefa não encontrada, erros de validação).

### Exemplos de Comandos de Teste

- **Obter Todas as Tarefas:**

```http
GET /tasks
```

- **Criar uma Nova Tarefa:**

```bash
POST /tasks

Content-Type: application/json

{
"title": "Nova Tarefa",
"description": "Descrição da nova tarefa"
}
```

- **Atualizar uma Tarefa:**

```http
PUT /tasks/1
Content-Type: application/json

{
"status": "concluída"
}
```

## Tools

### Thunder Client

Durante o desenvolvimento, utilizei a extensão Thunder Client no Visual Studio Code para testar e interagir com os endpoints da API de forma rápida e eficiente.

- **Instalação:**

  - - Abra o VSCode.
  - - Vá para a aba de extensões (Ctrl+Shift+X ou Cmd+Shift+X no macOS).
  - - Procure por "Thunder Client" e instale a extensão.

- **Uso:**
  - - Após a instalação, abra o painel do Thunder Client.
  - - Crie novas requisições HTTP, configure os métodos e os endpoints, adicione headers e body conforme necessário.
  - - Envie as requisições e visualize as respostas diretamente no VSCode.

**Vantagens do Thunder Client:**

- **Integração com VSCode:** Permite realizar testes sem sair do editor de código.
- **Interface Intuitiva:** Facilita a criação e gerenciamento de requisições.
- **Salvar Coleções:** Organize suas requisições em coleções para reutilização futura.
- **Visualização de Respostas:** Visualize respostas de forma estruturada e clara.

## Usage

### Adicionando uma Tarefa

Use o endpoint [POST /tasks] para adicionar uma nova tarefa. Certifique-se de fornecer pelo menos o title da tarefa.

### Listando Tarefas

Use o endpoint [GET /tasks] para recuperar todas as tarefas, ou filtre-as por status usando [GET /tasks/status/:status].

### Atualizando uma Tarefa

Use o endpoint [PUT /tasks/:id] para atualizar os detalhes ou status de uma tarefa existente.

### Deletando uma Tarefa

Use o endpoint [DELETE /tasks/:id] para remover uma tarefa.

## Contributing

Contribuições são bem-vindas! Por favor, siga os seguintes passos:

1. **Fork the Repository**

2. **Create a Feature Branch:**

```bash
git checkout -b feature/SuaFuncionalidade
```

3. **Commit Your Changes:**

```bash
git commit -m "Adiciona nova funcionalidade"
```

4.  **Push to the Branch:**

```bash
git push origin feature/SuaFuncionalidade
```

5. **Open a Pull Request**
   Por favor, certifique-se de que seu código segue os padrões de codificação do projeto e inclua testes apropriados.

## License

Este projeto está licenciado sob a Licença MIT. Veja o arquivo [LICENSE]() para mais detalhes.

## Acknowledgments

[Nest.js](https://nestjs.com/) - The progressive Node.js framework.
[Thunder Client](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client) - A lightweight REST API client for VSCode.
[Jest](https://jestjs.io/) - Delightful JavaScript Testing Framework.
[Supertest](https://github.com/visionmedia/supertest) - Super-agent driven library for testing node.js HTTP servers.

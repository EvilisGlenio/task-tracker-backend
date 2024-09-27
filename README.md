# Task Tracker Backend

Uma aplicação de interface de linha de comando (CLI) para rastrear suas tarefas e gerenciar sua lista de afazeres. Construída com **Nest.js**, este serviço backend permite que você adicione, atualize, exclua e liste tarefas, com os dados sendo persistidos em um arquivo JSON.

## Sumário

- [Introdução](#introdução)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Instalação](#instalação)
- [Configuração](#configuração)
- [Executando a Aplicação](#executando-a-aplicação)
- [Endpoints da API](#endpoints-da-api)
- [Testes](#testes)
- [Ferramentas](#ferramentas)
- [Uso](#uso)
- [Contribuindo](#contribuindo)
- [Licença](#licença)

## Introdução

Task Tracker é uma aplicação CLI simples projetada para ajudá-lo a gerenciar sua lista de tarefas de forma eficiente. Construída com **Nest.js**, a aplicação fornece uma API RESTful para lidar com operações de tarefas, com os dados armazenados em um arquivo JSON para simplicidade e facilidade de uso.

## Funcionalidades

- **Adicionar Tarefas:** Criar novas tarefas com título e descrições opcionais.
- **Atualizar Tarefas:** Modificar tarefas existentes, incluindo alterar o status.
- **Excluir Tarefas:** Remover tarefas da sua lista de afazeres.
- **Listar Tarefas:** Visualizar todas as tarefas ou filtrá-las com base no status (ex: pendente, em progresso, concluída).
- **Armazenamento Persistente:** As tarefas são armazenadas em um arquivo JSON, eliminando a necessidade de um banco de dados.
- **Validação:** Garante a integridade dos dados com regras de validação apropriadas.
- **Testes:** Testes completos end-to-end (e2e) para garantir a confiabilidade da aplicação.

## Tecnologias Utilizadas

- **[Nest.js](https://nestjs.com/):** Um framework progressivo do Node.js para construir aplicações server-side eficientes e escaláveis.
- **TypeScript:** Proporciona tipagem estática para melhorar a qualidade e a manutenção do código.
- **Jest:** Framework de testes JavaScript utilizado para escrever e executar testes.
- **Supertest:** Usado para testar os endpoints HTTP.
- **Thunder Client:** Uma extensão cliente de API REST para Visual Studio Code, usada para testar a API durante o desenvolvimento.
- **Node.js:** Ambiente de execução de JavaScript.

## Instalação

### Pré-requisitos

- **Node.js** (v14 ou superior)
- **npm** (v6 ou superior)

### Passos

1. **Clone o Repositório:**

   ```bash
   git clone https://github.com/seu-usuario/task-tracker-backend.git
   ```

2. **Navegue até o Diretório do Projeto::**

```bash
cd task-tracker-backend
```

3. **Instale as Dependências:**

```bash
npm install
```

## Configuração

Nenhuma configuração adicional é necessária para o uso básico. A aplicação utiliza um arquivo JSON (tasks.json) localizado no diretório do projeto para armazenar os dados das tarefas.

## Executando a Aplicação

### Modo de Desenvolvimento

Para rodar a aplicação em modo de desenvolvimento com recarregamento automático:

```bash
npm run start:dev
```

A aplicação será iniciada em http://localhost:3000.

### Modo de Produção

Para construir e rodar a aplicação em modo de produção:

1. **Compile o Projeto:**

```bash
npm run build
```

2. **Inicie a Aplicação:**

```bash
npm run start:prod
```

## Endpoints da API

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
  - 200 OK com o objeto da tarefa.
  - 404 Not Found se a tarefa não for encontrada.

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
    - 201 Created com o objeto da tarefa criada.
    - 400 Bad Request se a validação falhar.

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
  - 200 OK com o objeto da tarefa atualizada.
  - 404 Not Found se a tarefa não for encontrada.
  - 400 Bad Request se a validação falhar.

5. **Deletar uma Tarefa**

- URL: /tasks/:id
- Método: DELETE
- Descrição: Remove uma tarefa pelo seu ID.
- Resposta:
  - 200 OK após a remoção bem-sucedida.
  - 404 Not Found se a tarefa não for encontrada.

6. **Obter Tarefas por Status**

- URL: /tasks/status/:status
- Método: GET
- Descrição: Recupera tarefas filtradas pelo seu status (pendente, em progresso, concluída).
- Resposta:
  - 200 OK com um array de objetos de tarefa que correspondem ao status.
  - Retorna um array vazio se nenhuma tarefa corresponder.

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

## Testes

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

## Ferramentas

### Thunder Client

Durante o desenvolvimento, utilizei a extensão Thunder Client no Visual Studio Code para testar e interagir com os endpoints da API de forma rápida e eficiente.

- **Instalação:**

  - Abra o VSCode.
  - Vá para a aba de extensões (Ctrl+Shift+X ou Cmd+Shift+X no macOS).
  - Procure por "Thunder Client" e instale a extensão.

- **Uso:**
  - Após a instalação, abra o painel do Thunder Client.
  - Crie novas requisições HTTP, configure os métodos e os endpoints, adicione headers e body conforme necessário.
  - Envie as requisições e visualize as respostas diretamente no VSCode.

**Vantagens do Thunder Client:**

- **Integração com VSCode:** Permite realizar testes sem sair do editor de código.
- **Interface Intuitiva:** Facilita a criação e gerenciamento de requisições.
- **Salvar Coleções:** Organize suas requisições em coleções para reutilização futura.
- **Visualização de Respostas:** Visualize respostas de forma estruturada e clara.

## Usage

### Adicionando uma Tarefa

Use o endpoint **POST /tasks** para adicionar uma nova tarefa. Certifique-se de fornecer pelo menos o title da tarefa.

### Listando Tarefas

Use o endpoint **GET /tasks** para recuperar todas as tarefas, ou filtre-as por status usando **GET /tasks/status/:status**.

### Atualizando uma Tarefa

Use o endpoint **PUT /tasks/:id** para atualizar os detalhes ou status de uma tarefa existente.

### Deletando uma Tarefa

Use o endpoint **DELETE /tasks/:id** para remover uma tarefa.

## Contribuindo

Contribuições são bem-vindas! Por favor, siga os seguintes passos:

1. **Fork o Repositório**

2. **Crie uma Branch de Funcionalidade::**

```bash
git checkout -b feature/SuaFuncionalidade
```

3. **Commit suas Alterações:**

```bash
git commit -m "Adiciona nova funcionalidade"
```

4.  **Faça o Push da Branch:**

```bash
git push origin feature/SuaFuncionalidade
```

5. **Abra um Pull Request**
   Por favor, certifique-se de que seu código segue os padrões de codificação do projeto e inclua testes apropriados.

## Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo [LICENSE]() para mais detalhes.

## Agradecimentos

- [Nest.js](https://nestjs.com/) - The progressive Node.js framework.
- [Thunder Client](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client) - A lightweight REST API client for VSCode.
- [Jest](https://jestjs.io/) - Delightful JavaScript Testing Framework.
- [Supertest](https://github.com/visionmedia/supertest) - Super-agent driven library for testing node.js HTTP servers.

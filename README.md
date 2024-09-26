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

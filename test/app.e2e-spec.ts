import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import * as fs from 'fs/promises';
import * as path from 'path';

describe('TasksController (e2e)', () => {
  let app: INestApplication;
  const tasksFilePath = path.join(__dirname, '../src/tasks/tasks.json');

  // Função para limpar ou inicializar o arquivo JSON antes dos testes
  const initializeTasksFile = async () => {
    const initialTasks = [];
    await fs.writeFile(tasksFilePath, JSON.stringify(initialTasks, null, 2));
  };

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
    await app.init();

    // Inicializar o arquivo de tarefas antes dos testes
    await initializeTasksFile();
  });

  afterAll(async () => {
    await app.close();
  });

  describe('/GET getHealt()', () => {
    it('should return a health app sigh', () => {
      return request(app.getHttpServer())
        .get('/')
        .expect(200)
        .expect('Task-Tracker is runing');
    });
  });

  describe('/GET /tasks', () => {
    it('should return all tasks', () => {
      return request(app.getHttpServer()).get('/tasks').expect(200).expect([]);
    });
  });

  describe('/POST /tasks/', () => {
    it('should create a new task, status 201', async () => {
      const newTask = {
        id: '1',
        title: 'Nova Tarefa',
        subtitle: 'Descrição da nova tarefa',
      };

      return request(app.getHttpServer())
        .post('/tasks/')
        .send(newTask)
        .expect(201)
        .then((response) => {
          expect(response.body.id).toBe('1');
          expect(response.body.title).toBe(newTask.title);
          expect(response.body.subtitle).toBe(newTask.subtitle);
          expect(response.body.status).toBe('pendente');
        });
    });

    it('should return a tasks by ID, status 200', async () => {
      const response = await request(app.getHttpServer()).get(`/tasks/`);
      expect(response.status).toEqual(200);
      expect({
        id: response.body.id,
        title: 'Nova Tarefa',
        subtitle: 'Descrição da nova tarefa',
        status: response.body.status,
      });
    });
  });

  describe('/PUT tasks/:id', () => {
    it('must update an existing task', async () => {
      const updateData = {
        title: 'Tarefa Atualizada',
        status: 'concluída',
      };

      return request(app.getHttpServer())
        .put('/tasks/1')
        .send(updateData)
        .expect(200)
        .then((response) => {
          expect(response.body.title).toBe(updateData.title);
          expect(response.body.status).toBe(updateData.status);
        });
    });
  });

  describe('/DELETE /tasks/:id', () => {
    it('should delete an existing task', async () => {
      return request(app.getHttpServer())
        .delete('/tasks/1')
        .expect(200)
        .then(async () => {
          const data = await fs.readFile(tasksFilePath, 'utf8');
          const tasks = JSON.parse(data);
          expect(tasks.find((task) => task.id === '1')).toBeUndefined();
        });
    });

    it('should to find a deleted task, status 404', () => {
      return request(app.getHttpServer()).get('/tasks/1').expect(404);
    });
  });

  describe('/GET tasks/status/:status', () => {
    it('should create a new task, status 201', async () => {
      const newTask = {
        id: '1',
        title: 'Nova Tarefa',
        subtitle: 'Descrição da nova tarefa',
        status: 'pendente',
      };

      return request(app.getHttpServer())
        .post('/tasks')
        .send(newTask)
        .expect(201)
        .then((response) => {
          expect(response.body.id).toBe('1');
          expect(response.body.title).toBe(newTask.title);
          expect(response.body.subtitle).toBe(newTask.subtitle);
        });
    });

    it('should create a new task, status 201', async () => {
      const newTask = {
        id: '2',
        title: 'Segunda tarefa',
        subtitle: 'Tarefa em progresso',
        status: 'em progresso',
      };

      return request(app.getHttpServer())
        .post('/tasks')
        .send(newTask)
        .expect(201)
        .then((response) => {
          expect(response.body.id).toBe('2');
          expect(response.body.title).toBe(newTask.title);
          expect(response.body.subtitle).toBe(newTask.subtitle);
        });
    });

    it('should update an task 2 status, status 200', async () => {
      const updateData = {
        status: 'em progresso',
      };

      return request(app.getHttpServer())
        .put('/tasks/2')
        .send(updateData)
        .expect(200)
        .then((response) => {
          expect(response.body.status).toBe(updateData.status);
        });
    });

    it('should create a new task, status 201', async () => {
      const newTask = {
        id: '3',
        title: 'Terceira tarefa',
        subtitle: 'Tarefa concluída',
        status: 'concluída',
      };

      return request(app.getHttpServer())
        .post('/tasks')
        .send(newTask)
        .expect(201)
        .then((response) => {
          expect(response.body.id).toBe('3');
          expect(response.body.title).toBe(newTask.title);
          expect(response.body.subtitle).toBe(newTask.subtitle);
        });
    });

    it('should update an task 2 status, status 200', async () => {
      const updateData = {
        status: 'concluída',
      };

      return request(app.getHttpServer())
        .put('/tasks/3')
        .send(updateData)
        .expect(200)
        .then((response) => {
          expect(response.body.status).toBe(updateData.status);
        });
    });

    it('should list all tasks with status "concluída"', () => {
      return request(app.getHttpServer())
        .get('/tasks/status/concluída')
        .expect(200)
        .expect([
          {
            id: '3',
            title: 'Terceira tarefa',
            subtitle: 'Tarefa concluída',
            status: 'concluída',
          },
        ]);
    });

    it('should list all tasks with status "em progresso"', () => {
      return request(app.getHttpServer())
        .get('/tasks/status/em progresso')
        .expect(200)
        .expect([
          {
            id: '2',
            title: 'Segunda tarefa',
            subtitle: 'Tarefa em progresso',
            status: 'em progresso',
          },
        ]);
    });

    it('should return a empyt list to invalid status', () => {
      return request(app.getHttpServer())
        .get('/tasks/status/invalid-status')
        .expect(200)
        .expect([]);
    });
  });
});

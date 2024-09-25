import { Injectable, NotFoundException } from '@nestjs/common';
import { Task } from './entities/task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaksDto } from './dto/update-task.dto';
import * as fs from 'fs/promises';
import * as path from 'path';

@Injectable()
export class TasksService {
  private readonly taskFilePath = path.join(__dirname, 'tasks.json');
  private tasks: Task[] = [];

  constructor() {
    this.loadTasks();
  }

  private async loadTasks(): Promise<void> {
    try {
      const data = await fs.readFile(this.taskFilePath, 'utf8');
      this.tasks = JSON.parse(data);
    } catch {
      this.tasks = [];
      await fs.writeFile(
        this.taskFilePath,
        JSON.stringify(this.tasks, null, 2),
      );
    }
  }

  private async saveTasks(): Promise<void> {
    await fs.writeFile(this.taskFilePath, JSON.stringify(this.tasks, null, 2));
  }

  async findAll(): Promise<Task[]> {
    return this.tasks;
  }

  async findOne(id: string): Promise<Task> {
    const task = this.tasks.find((task) => task.id === id);
    if (!task) {
      throw new NotFoundException(`Tarefa com ID ${id} não encontrada`);
    }
    return task;
  }

  async findStatus(status: string): Promise<Task[]> {
    return this.tasks.filter((task) => task.status === status);
  }

  async create(createTaskDto: CreateTaskDto): Promise<Task> {
    const newTask: Task = {
      id: Date.now().toString(),
      ...createTaskDto,
      status: 'pendente',
    };
    this.tasks.push(newTask);
    this.saveTasks();
    return Promise.resolve(newTask);
  }

  async update(id: string, updateTaskDto: UpdateTaksDto): Promise<Task> {
    const index = this.tasks.findIndex((task) => task.id === id);
    if (index === -1) {
      throw new NotFoundException(`Tarefa com ID ${id} não encontrada`);
    }
    this.tasks[index] = { ...this.tasks[index], ...updateTaskDto };
    this.saveTasks();
    return Promise.resolve(this.tasks[index]);
  }

  async remove(id: string): Promise<void> {
    const index = this.tasks.findIndex((task) => task.id === id);
    if (index === -1) {
      throw new NotFoundException(`Tarefa com ID ${id} não encontrada`);
    }
    this.tasks.splice(index, 1);
    this.saveTasks();
  }
}

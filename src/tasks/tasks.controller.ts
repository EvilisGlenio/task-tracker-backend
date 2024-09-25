import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './entities/task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaksDto } from './dto/update-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  //Get /tasks
  @Get()
  getAllTasks(): Promise<Task[]> {
    return this.tasksService.findAll();
  }

  //Get /tasks/:id
  @Get(':id')
  getTaskById(@Param('id') id: string): Promise<Task> {
    return this.tasksService.findOne(id);
  }

  //Get /tasks/:status
  @Get('status/:status')
  getTaskByStatus(@Param('status') status: string): Promise<Task[]> {
    return this.tasksService.findStatus(status);
  }

  //Post /tasks/
  @Post()
  create(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
    return this.tasksService.create(createTaskDto);
  }

  //Put /tasks/:id
  @Put(':id')
  updateTask(
    @Param('id') id: string,
    @Body() updateTaskDto: UpdateTaksDto,
  ): Promise<Task> {
    return this.tasksService.update(id, updateTaskDto);
  }

  //Delete /tasks/:id
  @Delete(':id')
  deleteTask(@Param('id') id: string): Promise<void> {
    return this.tasksService.remove(id);
  }
}

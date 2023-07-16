import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { Completion, Todo } from './todo.model';
import { TodoService } from './todo.service';
import { ApiTags, ApiResponse, ApiParam } from '@nestjs/swagger';

@ApiTags('todos')
@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: Todo,
    isArray: true,
  })
  getTodos(): Todo[] {
    return this.todoService.getTodos();
  }

  @Get(':id')
  @ApiParam({
    name: 'id',
    description: 'The id of the todo',
    type: Number,
  })
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: Todo,
  })
  getTodoById(id: string): Todo {
    return this.todoService.getTodoById(Number(id));
  }

  @Post()
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
    type: Todo,
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  createTodo(@Body() todo: Todo): Todo[] {
    return this.todoService.createTodo(todo);
  }

  // PUT
  @Put(':id')
  @ApiParam({
    name: 'id',
    description: 'The id of the todo',
    type: Number,
  })
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: Todo,
  })
  updateTodoById(@Body() completion: Completion, id: string): Todo {
    return this.todoService.updateTodoById(Number(id), completion.completed);
  }

  // DELETE
  @Delete(':id')
  @ApiParam({
    name: 'id',
    description: 'The id of the todo',
    type: Number,
  })
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: Todo,
  })
  deleteTodoById(id: string): Todo[] {
    return this.todoService.deleteTodoById(Number(id));
  }
}

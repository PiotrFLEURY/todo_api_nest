import { Injectable } from '@nestjs/common';
import { Todo } from './todo.model';

@Injectable()
export class TodoService {
  private todos: Todo[] = [
    new Todo({
      id: 1,
      title: 'Todo 1',
      description: 'Description 1',
      completed: true,
    }),
    new Todo({
      id: 2,
      title: 'Todo 2',
      description: 'Description 2',
      completed: false,
    }),
    new Todo({
      id: 3,
      title: 'Todo 3',
      description: 'Description 3',
      completed: false,
    }),
  ];

  getTodos(): Todo[] {
    return this.todos;
  }

  getTodoById(id: number): Todo {
    return this.todos.find((todo) => todo.id === id);
  }

  createTodo(todo: any): Todo[] {
    this.todos.push(todo);
    return this.todos;
  }

  updateTodoById(id: number, completed: boolean): Todo {
    const todo = this.getTodoById(id);
    todo.completed = completed;
    return todo;
  }

  deleteTodoById(id: number): Todo[] {
    const todoIndex = this.todos.findIndex((todo) => todo.id === id);
    this.todos.splice(todoIndex, 1);
    return this.todos;
  }
}

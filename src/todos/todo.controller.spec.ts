import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import { Todo } from './todo.model';

describe('TodoController', () => {
  let todoController: TodoController;
  let todoService: TodoService;

  beforeEach(async () => {
    todoService = new TodoService();
    todoController = new TodoController(todoService);
  });

  describe('root', () => {
    it('should return a list of Todo', () => {
      const result = [
        new Todo({
          id: 1,
          title: 'Todo 1',
          description: 'Description 1',
          completed: false,
        }),
      ];
      jest.spyOn(todoService, 'getTodos').mockImplementation(() => result);
      expect(todoController.getTodos()).toBe(result);
    });
  });
});

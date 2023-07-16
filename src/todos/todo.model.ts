import { ApiProperty } from '@nestjs/swagger';

export class Todo {
  @ApiProperty()
  id: number;
  @ApiProperty()
  title: string;
  @ApiProperty()
  description: string;
  @ApiProperty()
  completed: boolean;

  constructor({
    id = 0,
    title = '',
    description = '',
    completed = false,
  }: {
    id?: number;
    title?: string;
    description?: string;
    completed: boolean;
  }) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.completed = completed;
  }
}

export class Completion {
  @ApiProperty()
  completed: boolean;
}

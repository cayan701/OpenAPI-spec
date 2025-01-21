import {
  Body,
  Controller,
  Get,
  Path,
  Post,
  Query,
  Route,
  SuccessResponse,
} from "tsoa";

import { Todo } from "./todo";
import { TodoCreationParams, TodoService } from "./todoService";

// whatever you write here will get convereted to express routes such as app.get and so on and so forth

@Route("todo")
export class TodoController extends Controller {
  @Get("{todoId}")
  public async getTodo(@Path() todoId: string): Promise<Todo> {
    const todoService = new TodoService();
    return todoService.get(todoId);
  }
}

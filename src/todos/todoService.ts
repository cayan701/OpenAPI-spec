import { Todo } from "./todo";

// export type TodoCreationParams {
//  title: string;
//  description: string;
// }

// Same thing

export type TodoCreationParams = Pick<Todo, "title" | "description">;

export class TodoService {
  public get(todoId: string): Todo {
    return {
      id: todoId,
      title: "mocked todo",
      description: "mocked todo",
      done: false,
    };
  }

  public create(todoCreationParams: TodoCreationParams): Todo {
    console.log("mock DB call");
    return {
      id: "1",
      title: "mocked todo",
      description: "mocked todo",
      done: false,
    };
  }
}

import { Router, Request, Response, RequestHandler } from "express";
import { Todo } from "../models/todo";

const router = Router();

let TODOS: Todo[] = [];

router.get("/", (req: Request, res: Response) => {
  res.json({ res: TODOS });
});

router.post("/", (req: Request, res: Response) => {
  const text = (req.body.text as string) || "Default Text";
  const newTodo = new Todo(Date.now().toString(), text);
  TODOS.push(newTodo);

  res.status(201).json({ message: "Created the todo", res: newTodo });
});

router.get("/:id", (req: Request, res: Response) => {
  const id = req.params.id as string;
  const foundedTodo = TODOS.filter((todo) => todo.id === id);
  if (foundedTodo.length === 0)
    return res.status(404).send("Did not found the TODO");

  res.status(201).json({ messege: "Found it!", res: foundedTodo });
});

router.patch("/:id", (req: Request, res: Response) => {
  const id = req.params.id as string;
  const todoIndex = TODOS.findIndex((todo) => todo.id === id);
  if (todoIndex === -1) return res.status(404).send("Did not found the TODO");

  TODOS[todoIndex] = new Todo(TODOS[todoIndex].id, req.body.text);

  res.json({ res: TODOS[todoIndex] });
});

router.delete("/:id", (req: Request, res: Response) => {
  const id = req.params.id as string;
  const todoIndex = TODOS.findIndex((todo) => todo.id === id);
  if (todoIndex === -1) return res.status(404).send("Did not found the TODO");

  TODOS.splice(todoIndex, 1);
  res.json({ message: "deleted" });
});

export default router;

import { Router, Request, Response } from "express";
import { Todo } from "../models/todo";

const router = Router();

const TODOS: Todo[] = [];

router.get("/", (req: Request, res: Response) => {
  res.json({ res: TODOS });
});

router.post("/", (req: Request, res: Response) => {
  const text = (req.body.text as string) || "Default Text";
  const newTodo = new Todo(Date.now().toString(), text);
  TODOS.push(newTodo);

  res.status(201).json({ message: "Created the todo", res: newTodo });
});

export default router;

import Router from "koa-router";
import {
  getListTodos,
  createTodo,
  updateTodos,
  deleteTodos,
} from "../handlers/todos/todoHandlers.js";
import { checkCreateInput } from "../middleware/checkInputTodo.js";

const router = new Router({
  prefix: "/api",
});

router.get("/todos", getListTodos);
router.post("/todo", checkCreateInput, createTodo);
router.delete("/todos", deleteTodos);
router.put("/todos", updateTodos);

export default router;

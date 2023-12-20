import Router from "koa-router";
import { getAllTodos, createTodo, updateTodos, deleteTodos } from "../handlers/todos/todoHandlers.js";
import { checkCreateInput } from "../middleware/checkInputTodo.js";

const router = new Router({
  prefix: "/api"
});

router.get("/todos", getAllTodos);
router.post("/todo", checkCreateInput, createTodo);
router.delete("/todos", deleteTodos);
router.put("/todos", updateTodos);

export default router;
//# sourceMappingURL=routes.js.map
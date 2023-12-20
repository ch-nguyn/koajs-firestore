import {
  getAll,
  addOne,
  updateList,
  removeList,
} from "../../database/todoRepository.js";

export const getAllTodos = async (ctx) => {
  try {
    const todos = getAll();
    ctx.status = 200;
    return (ctx.body = {
      success: true,
      data: todos,
    });
  } catch (e) {
    console.error(e);
    ctx.status = 404;
    return (ctx.body = {
      success: false,
      error: e.message,
    });
  }
};

export const deleteTodos = async (ctx) => {
  try {
    const { arrIds } = ctx.req.body;
    removeList(arrIds);
    ctx.status = 204;
    return (ctx.body = {
      success: true,
      message: "Deleted successfully!",
    });
  } catch (e) {
    console.error(e);
    ctx.status = 404;
    return (ctx.body = {
      success: false,
      error: e.message,
    });
  }
};

export const createTodo = async (ctx) => {
  try {
    const todo = ctx.request.body;
    const todoRes = addOne(todo);
    ctx.status = 201;
    return (ctx.body = {
      success: true,
      data: todoRes,
    });
  } catch (e) {
    console.error(e);
    ctx.status = 400;
    return (ctx.body = {
      success: false,
      error: e.message,
    });
  }
};

export const updateTodos = async (ctx) => {
  try {
    const { arrIds, isComplete } = ctx.req.body;
    updateList(arrIds, isComplete);

    ctx.status = 200;
    return (ctx.body = {
      success: true,
    });
  } catch (e) {
    console.error(e);
    ctx.status = 404;
    return (ctx.body = {
      success: false,
      error: e.message,
    });
  }
};
//# sourceMappingURL=todoHandlers.js.map

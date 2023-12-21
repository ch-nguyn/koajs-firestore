import {
  getList,
  addOne,
  updateList,
  removeList,
} from "../../database/todoRepository.js";

export function createTodo(ctx) {
  try {
    const todo = ctx.req.body;
    addOne(todo);
    ctx.status = 201;
    return (ctx.body = {
      success: true,
    });
  } catch (e) {
    console.error(e);
    ctx.status = 400;
    return (ctx.body = {
      success: false,
      error: e.message,
    });
  }
}

export const getListTodos = async (ctx) => {
  try {
    const todos = await getList(ctx.req.query);
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

export const updateTodos = async (ctx) => {
  try {
    const { arrIds, data } = ctx.req.body;
    updateList(data, arrIds);
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

export const deleteTodos = async (ctx) => {
  try {
    const { arrIds } = ctx.req.body;
    removeList(arrIds);
    ctx.status = 204;
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

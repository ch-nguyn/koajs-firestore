import { saveData } from "../helpers/saveData.js";
import { todoRef } from "./config.js";

export const getAll = () => {
  const todos = todoRef.get();
  console.log(todos);
  return todos;
};

export const addOne = (todo) => {
  todo.id = uuidv4();
  todo.isCompleted = false;
  let data = [...todos, todo];
  saveData(data);
  return todo;
};

export const updateList = (arrIds, isComplete = false) => {
  const data = [...todos].map((todo) => {
    if (arrIds.includes(todo.id)) {
      if (isComplete) {
        todo.isCompleted = true;
      } else {
        todo.isCompleted = !todo.isCompleted;
      }
    }
    return todo;
  });
  saveData(data);
};

export const removeList = (arrId) => {
  const data = todos.filter((todo) => !arrId.includes(todo.id));
  saveData(data);
};
//# sourceMappingURL=todoRepository.js.map

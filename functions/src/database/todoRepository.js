import getDataPrepare from "../helpers/getDataPrepare.js";
import sortData from "../helpers/sortData.js";
import db from "./config.js";

const todoRef = db.collection("todos");

export const getList = async (orderBy = "asc") => {
  const snapshot = await todoRef.get();
  const data = snapshot.docs.map((doc) => getDataPrepare(doc));
  return sortData(data, "createdAt", orderBy);
};

export const addOne = async (todo) => {
  await todoRef.add({
    text: todo.text,
    isCompleted: false,
    createdAt: Date.now(),
    updatedAt: null,
  });
};

/**
 *
 * @param {string[]} arrIds
 * @param {boolean} isComplete
 */
export const updateList = async (ids, data) => {
  const jobs = ids.map((id) =>
    todoRef.doc(id).update({ ...data, updatedAt: Date.now() })
  );
  await Promise.all(jobs);
};

export const removeList = async (ids) => {
  const jobs = ids.map((id) => todoRef.doc(id).delete());
  await Promise.all(jobs);
};

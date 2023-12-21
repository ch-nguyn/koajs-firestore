import getDataPrepare from "../helpers/getDataPrepare.js";
import sortData from "../helpers/sortData.js";
import db from "./config.js";

const todoRef = db.collection("todos");

export const getList = async ({ orderBy = "asc", limit = 10 } = {}) => {
  limit = Number(limit);
  const snapshot = await todoRef
    .orderBy("createdAt", orderBy)
    .limit(limit)
    .get();
  const data = snapshot.docs.map((doc) => getDataPrepare(doc));
  return data;
};

/**
 *
 * @param {Data} data
 */
export const addOne = async (data) => {
  await todoRef.add({
    ...data,
    iscompleted: false,
    createdAt: new Date(),
  });
};

/**
 *
 * @param {string[]} arrIds
 * @param {Data} data
 */
export const updateList = async (data, ids = []) => {
  const jobs = ids.map((id) =>
    todoRef.doc(id).update({ ...data, updatedAt: Date.now() })
  );
  await Promise.all(jobs);
};

/**
 *
 * @param {string[]} ids
 */
export const removeList = async (ids = []) => {
  const jobs = ids.map((id) => todoRef.doc(id).delete());
  await Promise.all(jobs);
};

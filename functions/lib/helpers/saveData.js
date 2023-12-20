import fs from "fs";

export const saveData = data => {
  fs.writeFileSync("./src/database/todos.json", JSON.stringify(data));
};
//# sourceMappingURL=saveData.js.map
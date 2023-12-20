import admin from "firebase-admin";
import serviceAccount from "./serviceAccount.json";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

const todoRef = db.collection("todos");
const batch = db.batch();

export { todoRef, batch };
//# sourceMappingURL=config.js.map
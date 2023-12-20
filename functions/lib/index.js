import functions from "firebase-functions";
import Koa from "koa";
import cors from "@koa/cors";
import routes from "./routes/routes.js";
import koaBody from "koa-body";

const app = new Koa();

app.use(cors());
app.use(koaBody({ parsedMethods: ["POST", "PUT", "PATCH", "DELETE"] }));
app.use(routes.allowedMethods());
app.use(routes.routes());

export const api = functions.https.onRequest(app.callback());
//# sourceMappingURL=index.js.map
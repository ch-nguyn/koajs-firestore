import functions from "firebase-functions";
import Koa from "koa";
import routes from "./routes/routes.js";
import cors from "@koa/cors";

const app = new Koa();

app.use(cors());
app.use(routes.allowedMethods());
app.use(routes.routes());

export const api = functions.https.onRequest(app.callback());

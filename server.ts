import express from "express";
import { Express } from "express";
import { SayHi } from "./controllers/myControl";

const app: Express = express();


app.get('/', SayHi)


app.listen(3000, () => {
    console.log("Server is runnng")
})
import express from "express";
import mongoConnection from "./dbConnect/mongoDBConnection";
import { appRouter } from "./decorators/routerDecorator";

import "./routes/taskRoute";

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

app.use(appRouter);


app.listen(PORT, () => {
  mongoConnection
    .then(() => {
      console.log(`Server started at ${PORT}`);
      console.log("DB successfully connected");
    })
    .catch((error) => {
      console.log("DB Connection failed", error);
    });
});

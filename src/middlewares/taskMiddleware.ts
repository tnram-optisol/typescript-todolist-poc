import { NextFunction, Response, response } from "express";
import { ITaskData, Status } from "../interfaces/entity/ITaskData";

export class TaskMiddleWare {
  checkTasks(
    req: {
      body: any;
      task: string | any[];
      status: { toLocaleString: () => string };
    },
    next: any
  ) {
    console.log("Hello");
  }
}

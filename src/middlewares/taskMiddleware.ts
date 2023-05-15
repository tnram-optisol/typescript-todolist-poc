import { Response, response } from "express";
import { ITaskData, Status } from "../interfaces/values/ITaskData";

export class TaskMiddleWare {
  checkTasks(req: ITaskData) {
    if (req?.task?.length < 0) {
      return response.status(500).json({ msg: "Task must not be empty" });
    }
    if (
      Object.keys(Status).findIndex((e) => e === req?.status?.toLocaleString())
    ) {
      return response
        .status(500)
        .json({ msg: `Invalid Status and Status must be one of ${Status}` });
    }
  }
}

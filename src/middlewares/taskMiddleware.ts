import { NextFunction, Response, response } from "express";
import { ITaskData, Status } from "../interfaces/entity/ITaskData";

export class TaskMiddleWare {
  checkTasks(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (
      req: Request,
      res: Response,
      next: NextFunction
    ) {
      console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
      originalMethod.call(this, req, res, next);
    };

    return descriptor;
  }
}

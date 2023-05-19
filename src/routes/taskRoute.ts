import { Request, Response } from "express";
import { ObjectId } from "mongoose";

import Router from "../decorators/routerDecorator";
import { ITaskRoute } from "../interfaces/routes/ITaskRoute";
import TaskService from "../services/taskService";
import { TaskMiddleWare } from "../middlewares/taskMiddleware";
import Middleware from "../decorators/middlewareDecorator";

const taskService = new TaskService();
const taskValidate = new TaskMiddleWare();

class TaskRoute implements ITaskRoute {
  @Router({
    path: "/task/add",
    method: "post",
  })
  @Middleware({
    path: "/task/add",
    middleware: taskValidate.checkTasks,
  })
  addTask(req: Request, res: Response) {
    if (req.body) {
      taskService.addTask(req.body);
    }
    res.status(200).json("Data added");
  }
  @Router({
    path: "/task/",
    method: "get",
  })
  async getTask(req: Request, res: Response) {
    let data = await taskService.getTask();
    res.status(200).json(data);
  }
  @Router({
    path: "/task/:id",
    method: "get",
  })
  async getTaskById(req: Request, res: Response) {
    let data = await taskService.getTaskById(req.params.id);
    res.status(200).json(data);
  }
}

export default TaskRoute;

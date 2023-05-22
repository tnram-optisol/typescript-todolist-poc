import { Request, Response } from "express";

import Router from "../decorators/routerDecorator";
import { ITaskRoute } from "../interfaces/routes/ITaskRoute";
import TaskService from "../services/taskService";
import { TaskMiddleWare } from "../middlewares/taskMiddleware";
import Middleware from "../decorators/middlewareDecorator";

const taskService = new TaskService();
const taskValidate = new TaskMiddleWare();

class TaskRoute implements ITaskRoute {
  // Save Task
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

  //Get All Tasks
  @Router({
    path: "/task/",
    method: "get",
  })
  async getTask(req: Request, res: Response) {
    let data = await taskService.getTask();
    res.status(200).json(data);
  }

  //Get Task By Id
  @Router({
    path: "/task/:id",
    method: "get",
  })
  async getTaskById(req: Request, res: Response) {
    let data = await taskService.getTaskById(req.params.id);
    res.status(200).json(data);
  }

  //Update Task By Id
  @Router({
    path: "/task/:id",
    method: "put",
  })
  @Middleware({
    path: "/task/:id",
    middleware: taskValidate.checkTasks,
  })
  async updateTask(req: Request, res: Response) {
    let data = await taskService.updateTask(req.params.id, req.body);
    res.status(200).json(data);
  }

  // Remove Task By Id
  @Router({
    path: "/task/:id",
    method: "delete",
  })
  async removeTask(req: Request, res: Response) {
    let data = await taskService.removeTask(req.params.id);
    res.status(200).json(data);
  }

  //Search Tasks
  @Router({
    path: "/task/allTasks",
    method: "get",
  })
  async searcTask(req: Request, res: Response) {
    let data = await taskService.searchTask(req.body);
    res.status(200).json(data);
  }
}

export default TaskRoute;

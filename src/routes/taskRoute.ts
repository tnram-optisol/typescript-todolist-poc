import { Request, Response } from "express";
import Router from "../decorators/routerDecorator";
import { ITaskRoute } from "../interfaces/routes/ITaskRoute";
import TaskService from "../services/taskService";

const taskService = new TaskService();

class TaskRoute implements ITaskRoute {
  @Router({
    path: "/task/add",
    method: "post",
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
  getTask(req: Request, res: Response) {
    res.json({ msg: "TaskList" });
  }
}

export default TaskRoute;

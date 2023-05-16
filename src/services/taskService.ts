import fs from "fs";
import { ITaskData } from "../interfaces/entity/ITaskData";
import { ITaskService } from "../interfaces/services/ITaskService";
import { TaskDao } from "../database/daos/TaskDao";

export default class TaskService implements ITaskService {
  taskDao: TaskDao;
  constructor() {
    this.taskDao = new TaskDao();
  }
  async addTask(taskData: ITaskData) {
    taskData.isCompleted = taskData.isCompleted ? taskData.isCompleted : false;
    return await this.taskDao.saveTask(taskData);
  }
  async getTask(): Promise<ITaskData[]> {
    return await this.taskDao.getAllTask();
  }
}

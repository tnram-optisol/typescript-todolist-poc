import fs from "fs";
import { ITaskData } from "../interfaces/entity/ITaskData";
import { ITaskService } from "../interfaces/services/ITaskService";
import { TaskDao } from "../database/daos/TaskDao";
import { ObjectId } from "mongoose";

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
  async getTaskById(id: string): Promise<ITaskData | { msg: string }> {
    return await this.taskDao.getTaskById(id);
  }
  async updateTask(id: string, task: ITaskData): Promise<{ msg: string }> {
    return await this.taskDao.updateTask(id, task);
  }
  async removeTask(id: string): Promise<{ msg: string }> {
    return await this.taskDao.removeTask(id);
  }
  async searchTask(task: ITaskData): Promise<ITaskData[] | { msg: string }> {
    return await this.taskDao.searchTasks(task);
  }
}

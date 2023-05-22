import { ObjectId } from "mongoose";
import { ITaskData } from "../entity/ITaskData";

export interface ITaskDao {
  saveTask(taskData: ITaskData): Promise<{ msg: string }>;
  getAllTask(): Promise<ITaskData[]>;
  updateTask(_id: string, task: ITaskData): Promise<{ msg: string }>;
  removeTask(_id: string): Promise<{ msg: string }>;
  getTaskById(id: string): Promise<ITaskData | { msg: string }>;
  searchTasks(task: ITaskData): Promise<ITaskData[] | { msg: string }>;
  getCompletedTasks(): Promise<ITaskData[] | { msg: string }>;
}

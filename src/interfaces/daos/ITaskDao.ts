import { ObjectId } from "mongoose";
import { ITaskData } from "../entity/ITaskData";

export interface ITaskDao {
  saveTask(taskData: ITaskData): Promise<{
    msg: string;
  }>;
  getAllTask(): Promise<ITaskData[]>;
  updateTask(
    _id: ObjectId,
    task: ITaskData
  ): Promise<{
    msg: string;
  }>;
  removeTask(_id: ObjectId): Promise<{
    msg: string;
  }>;
  getTaskById(id: ObjectId): Promise<
    | ITaskData
    | {
        msg: string;
      }
  >;
  searchTasks(task: ITaskData): Promise<
    | ITaskData[]
    | {
        msg: string;
      }
  >;
  getCompletedTasks(): Promise<
    | ITaskData[]
    | {
        msg: string;
      }
  >;
}

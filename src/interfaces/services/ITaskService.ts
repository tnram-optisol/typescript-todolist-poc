import { ITaskData } from "../entity/ITaskData";

export interface ITaskService {
  addTask(taskData: ITaskData): void;
  getTask(taskData: ITaskData): Promise<ITaskData[]>;
  getTaskById(id: string): Promise<
    | ITaskData
    | {
        msg: string;
      }
  >;
}

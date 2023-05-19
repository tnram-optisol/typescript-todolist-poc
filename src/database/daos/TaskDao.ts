import { ObjectId } from "mongoose";
import { ITaskData } from "../../interfaces/entity/ITaskData";
import Task from "../entity/Task";
import { ITaskDao } from "../../interfaces/daos/ITaskDao";

export class TaskDao implements ITaskDao {
  async saveTask(taskData: ITaskData): Promise<{ msg: string }> {
    await Task.create(taskData);
    return { msg: "Task Created Successfully" };
  }

  async getAllTask(): Promise<ITaskData[]> {
    return await Task.find();
  }

  async updateTask(_id: ObjectId, task: ITaskData): Promise<{ msg: string }> {
    const res: ITaskData | null = await Task.findByIdAndUpdate(_id, task);
    if (!res) {
      return { msg: "No Task found" };
    }
    return { msg: "Task Removed Successfully" };
  }

  async removeTask(_id: ObjectId): Promise<{ msg: string }> {
    const res: ITaskData | null = await Task.findByIdAndDelete({ _id });
    if (!res) {
      return { msg: "No Task found" };
    }
    return { msg: "Task Removed Successfully" };
  }

  async getTaskById(id: string): Promise<ITaskData | { msg: string }> {
    const res: ITaskData | null = await Task.findOne({ _id: id });
    if (!res) {
      return { msg: "No Task found" };
    }
    return res;
  }

  async searchTasks(task: ITaskData): Promise<ITaskData[] | { msg: string }> {
    const todos: ITaskData[] = await Task.find({ task });
    if (todos.length == 0) {
      return { msg: "No Task found" };
    }
    return todos;
  }

  async getCompletedTasks(): Promise<ITaskData[] | { msg: string }> {
    const todos: ITaskData[] = await Task.find({ isCompleted: true });
    if (todos.length == 0) {
      return { msg: "No Task found" };
    }
    return todos;
  }
}

import { Request, Response } from "express";

export interface ITaskRoute {
  getTask: (req: Request, res: Response) => void;
  addTask: (req: Request, res: Response) => void;
  getTaskById: (req: Request, res: Response) => void;
}

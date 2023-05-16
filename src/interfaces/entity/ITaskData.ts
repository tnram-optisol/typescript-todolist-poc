export interface ITaskData {
  task: string;
  description?: string;
  status: Status;
  isCompleted?: boolean;
}

export enum Status {
  "In-Progress",
  "Hold",
  "Completed",
  "New Task",
}

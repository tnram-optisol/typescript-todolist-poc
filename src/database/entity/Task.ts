import mongoose from "mongoose";
import { ITaskData, Status } from "../../interfaces/entity/ITaskData";

const TaskSchema = new mongoose.Schema(
  {
    task: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    isCompleted: {
      type: Boolean,
      required: true,
      default: false,
    },
    status: {
      type: String,
      enum: Status,
      default: "In-Progress",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<ITaskData>("task", TaskSchema);

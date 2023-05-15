import fs from "fs";
import { ITaskData } from "../interfaces/values/ITaskData";

export default class TaskService {
  addTask(taskData: ITaskData) {
    taskData.isCompleted = taskData.isCompleted ? taskData.isCompleted : false;
    let data = fs.readFileSync("tasks.json");
    let myObject = JSON.parse(data.toString());
    myObject.push(taskData);

    // Writing to our JSON file
    let newData2 = JSON.stringify(myObject);

    fs.writeFile("tasks.json", newData2, (err) => {
      // Error checking
      if (err) throw err;
      console.log("New data added");
    });
  }
}

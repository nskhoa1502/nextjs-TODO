import { ITask } from "@/types/tasks";
import React from "react";

interface TaskProps {
  task: ITask;
}

const Task: React.FC<TaskProps> = ({ task }) => {
  return (
    <tr>
      <th>{task?.id}</th>
      <td>{task?.text}</td>
    </tr>
  );
};

export default Task;

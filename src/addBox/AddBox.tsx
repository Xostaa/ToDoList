import classes from "./AddBox.module.scss";
import Task from "../task/Task";
import InputTask from "../inputTask/InputTask";
import { useState, useEffect} from "react";

interface TaskType {
  id: string;
  value: string;
  completed: boolean;
}

export default function AddBox() {
  const [tasks, setTasks] = useState<TaskType[]>(() => {
    const storedTask = localStorage.getItem("tasks");
    return storedTask ? JSON.parse(storedTask) : [];
  });
    
  useEffect(() => {
    try {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    } catch (error) {
      console.error("Ошибка сохранения данных", error);
    }
  }, [tasks]);

  return (
    <>
      <div className={classes.addBox}>
        <InputTask setTasks={setTasks} />
        {tasks.map((task) => (
          <Task
            key={task.id}
            value={task.value}
            tasks={tasks}
            setTasks={setTasks}
            task={task}
          />
        ))}
      </div>
    </>
  );
}
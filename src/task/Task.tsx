import classes from "./Task.module.scss";
import React, { useState } from "react";
interface TaskType {
  id: string;
  value: string;
  completed: boolean;
}

export default function Task({
  value,
  tasks,
  setTasks,
  task,
}: {
  value: string;
  tasks: TaskType[];
  task: TaskType;
  setTasks: React.Dispatch<React.SetStateAction<TaskType[]>>;
}) {
  const [states, setStates] = useState({
    animate: "animated flipInX",
    className: [classes.taskBox, classes.task],
  });

  function completedTask(event: React.MouseEvent<HTMLInputElement>) {
    const target = event.target as HTMLInputElement;

    if (target.checked == true) {
      setStates((prevState) => ({
        ...prevState,
        animate: "",
      }));

      setTimeout(
        () =>
          setStates(() => ({
            animate: "animated flipInX",
            className: [classes.taskBoxCompleted, classes.taskCompleted],
          })),
        10
      );
    } else {
      setStates((prevState) => ({
        ...prevState,
        animate: "",
      }));

      setTimeout(
        () =>
          setStates(() => ({
            animate: "animated flipInX",
            className: [classes.taskBox, classes.task],
          })),
        10
      );
    }
  }

  function closeTask() {
    setStates((prevState) => ({
      ...prevState,
      animate: "animated bounceOutLeft",
    }));

    setTimeout(() => {
      setTasks(tasks.filter((item) => item.id !== task.id));
    }, 1000);
  }

  return (
    <>
      <div className={`${states.className[0]} ${states.animate}`}>
        <input
          onClick={completedTask}
          type="checkbox"
          name=""
          id=""
          className={classes.checkbox}
        />
        <div className={states.className[1]}>{value}</div>
        <span
          onClick={closeTask}
          className={classes.iconClose}
          title="close item"
        >
          ✖
        </span>
      </div>
    </>
  );
}

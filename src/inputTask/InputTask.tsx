import classes from "./InputTask.module.scss";
import { useRef, useState, type KeyboardEvent } from "react";

interface TaskType {
  id: string;
  value: string;
  completed: boolean;
}

export default function InputTask({
  setTasks,
}: {
  setTasks: React.Dispatch<React.SetStateAction<TaskType[]>>;
}) {
  const [inputRef, errorRef] = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLParagraphElement>(null),
  ];
  const [inputValue, setInputValue] = useState<string>("");

  function createTask(inputValue: string) {
    const newTask: TaskType = {
      id: Date.now().toString(),
      value: inputValue,
      completed: false,
    };

    if (inputValue == "" && errorRef.current) {
      errorRef.current.className = `animated bounceIn ${classes.error}`;
    } else if (inputValue !== "" && errorRef.current) {
      errorRef.current.className = `animated bounceIn ${classes.error} hidden`;
      setTasks((prevTasks) => [...prevTasks, newTask]);
    }
  }

  return (
    <>
      <div className={classes.inputWrapper}>
        <input
          onKeyUp={(event: KeyboardEvent) => {
            const target = event.target as HTMLInputElement;
            const value = target.value;
            setInputValue(value);
          }}
          placeholder="✍️ Добавить задачу"
          className={classes.addItem}
          ref={inputRef}
        />
        <span
          onClick={() => {
            createTask(inputValue);
            if (inputRef.current) {
              inputRef.current?.focus();
              const value = inputRef.current.value = "";
              setInputValue(value);
            }
            
          }}
          title="Add item"
          className={classes.icon}
        >
          ✚
        </span>
      </div>
      <p ref={errorRef} className={`animated bounceIn ${classes.error} hidden`}>
        Ой, кажется вы забыли ввести текст
      </p>
    </>
  );
}

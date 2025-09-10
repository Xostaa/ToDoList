import classes from "./Main.module.scss";
import AddBox from "../addBox/AddBox";

export default function Main() {
  const weekDay: string[] = [
    "понедельник 💪😀",
    "Вторник 😜",
    "Среда 😌☕",
    "Четверг 🤗",
    "Пятница 🍻",
    "Суббота 😴",
    "Воскресенье 🖖",
  ];

  const randomWordArray: string[] = [
    "Ого, сегодня ",
    "Кажется, сегодня ",
  ];

  const randomWord = Math.floor(Math.random() * randomWordArray.length);

  return (
    <>
      <div className="container">
        <div>
          <img src="vite.svg" alt="" />
          <img src="react.svg" alt="" />
        </div>
        <div className={classes.weekday}>
          {randomWordArray[randomWord] + weekDay[new Date().getDay() - 1]}
        </div>
        <AddBox />
      </div>
    </>
  );
}

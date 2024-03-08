import { title } from "process";
import React, { ChangeEvent, useState } from "react";

type FullInputPropsType = {
  addMessage: (title: string) => void;
};
export const FullInput = (props: FullInputPropsType) => {
  //создаем локальный state
  let [title, setTitle] = useState("");
  console.log(title);

  //выносим функции наверх и здесь обязательна типизация event, автоматическая типизация только в коллбэках, там знают, что такое event
  const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    //console.log(event.currentTarget.value);
    setTitle(event.currentTarget.value);
  };

  const onClickButtonHandler = () => {
    props.addMessage(title);
    setTitle("");
  };
  return (
    <div>
      {/* title привязываем к значению input, чтобы они синхронизировались */}
      <input value={title} onChange={onChangeInputHandler} />
      <button onClick={onClickButtonHandler}>+</button>
    </div>
  );
};

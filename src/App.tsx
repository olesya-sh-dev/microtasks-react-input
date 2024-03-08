import React, { useState } from "react";

import "./App.css";
// import { FullInput } from "./components/FullInput";
import { Input } from "./components/Input";
import { Button } from "./components/Button";

function App() {
  let [message, setMessage] = useState([
    { message: "message1" },
    { message: "message2" },
    { message: "message3" },
    { message: "message4" },
    { message: "message5" },
  ]);
  let [title, setTitle] = useState("");
  console.log(title);
  //создаем функцию, которая будет добавлять задачу в список
  const addMessage = (title: string) => {
    // console.log(title);
    let newMessage = { message: title };
    setMessage([newMessage, ...message]);
  };

  const callBackButtonHandler = () => {
    addMessage(title);
    setTitle("");
  };

  return (
    <div className="App">
      {/* <FullInput addMessage={addMessage} /> */}
      <Input setTitle={setTitle} title={title} />
      <Button name={"+"} callBack={callBackButtonHandler} />
      {/* <div>
        <input />
        <button>+</button>
      </div> */}
      {message.map((el, index) => {
        return <div key={index}>{el.message}</div>;
      })}
    </div>
  );
}

export default App;

import React, { useState } from "react";
import "./App.css";
// import { FullInput } from "./components/FullInput";
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import { v1 } from "uuid";

function App() {
  let [message, setMessage] = useState([
    { message: "message1", id: v1() },
    { message: "message2", id: v1() },
    { message: "message3", id: v1() },
    { message: "message4", id: v1() },
    { message: "message5", id: v1() },
  ]);
  let [title, setTitle] = useState("");
  console.log(title);
  //создаем функцию, которая будет добавлять задачу в список
  const addMessage = (title: string) => {
    // console.log(title);
    let newMessage = { message: title, id: v1() };
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
      {message.map((el, id) => {
        return (
          <div key={id}>
            {el.message},{el.id}
          </div>
        );
      })}
    </div>
  );
}

export default App;

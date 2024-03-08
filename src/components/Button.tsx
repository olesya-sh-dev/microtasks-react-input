import React from "react";

type ButtonPropsType = {
  name: string;
  callBack: () => void;
};

export const Button = (props: ButtonPropsType) => {
  const OnClickButtonHandler = () => {
    props.callBack();
  };
  return <button onClick={OnClickButtonHandler}>{props.name}</button>;
};

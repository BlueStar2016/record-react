//useRef获取元素
import React, { useContext,useRef } from "react";
import AppContext from "../context";

export default function CompA() {
  const { name } = useContext(AppContext);
  const inputRef = useRef(null); 
  const onButtonClick=()=>{
    //   inputEl.current.focus();
    console.info(inputRef.current.value);
  }
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    }
  }));

  return <>
    <p>我是组件A，拿到设置的名字为{name}</p>
    <input ref={inputRef} type="text"/>
    <button onClick={onButtonClick}>Focus the input</button>
  </>;
}

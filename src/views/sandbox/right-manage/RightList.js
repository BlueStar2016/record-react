// useContext的使用，其作用就是可以做状态的分发，在React16.X以后支持，避免了react逐层通过Props传递数据。
import React, { useState,useMemo } from "react";
import AppContext from "../../../context";
import { Button } from "antd";

import CompA from "../../../components/CompA";
import CompB from "../../../components/CompB";
import CompC from "../../../components/CompC";

export default function RightList() {
  const [name, setName] = useState("你说嘴巴嘟嘟，嘟嘟嘟嘟");
  const [count, setCount] = useState(0);
  //   learn and share react，continuous update...  record-react
  const setNumber = () => {
    setCount(count + 1);
    // setCount(5);
  };
  const double = useMemo(()=>{
    console.log('double')
    return count * 2
},[count === 2])//关注点

  return (
    <>
      <h2>useContext的使用</h2>
      <p>{name}</p>
      <Button
        type="primary"
        onClick={() => {
          setName("hooks测试");
        }}
      >
        设置名字
      </Button>
      <button onClick={setNumber}>数字：{count}</button>
      <AppContext.Provider value={{ name: name }}>
        <CompA />
        <CompB />
      </AppContext.Provider>
      {/* <CompC count={count}/> */}
      <CompC/>
      <div>Double is :{double}</div>
    </>
  );
}

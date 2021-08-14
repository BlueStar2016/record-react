// useContext的使用，其作用就是可以做状态的分发，在React16.X以后支持，避免了react逐层通过Props传递数据。
import React, { useContext, useState } from "react";
import { Button } from "antd";

const AppContext = React.createContext({});

const A = () => {
  const { name } = useContext(AppContext);
  return <p>我是组件A，拿到设置的名字为{name}</p>;
};
const B = () => {
  const { name } = useContext(AppContext);
  return <p>我是组件B,拿到设置的名字为{name}</p>;
};

export default function RightList() {
  const [name, setName] = useState("你说嘴巴嘟嘟，嘟嘟嘟嘟");
//   learn and share react，continuous update...  record-react
  return (
    <>
      <h2>useContext的使用</h2>
      <p>{name}</p>
      <Button type="primary" onClick={()=>{setName("hooks测试");}}>
        设置名字
      </Button>
      <AppContext.Provider value={{ name: name }}>
        <A />
        <B />
      </AppContext.Provider>
    </>
  );
}

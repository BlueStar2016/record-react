// useEffect()接受两个参数，第一个参数是你要进行的异步操作，第二个参数是一个数组，用来给出Effect的依赖项。
// 只要这个数组发生变化，useEffect()就会执行。
// 当第二项省略不填时，useEffect()会在每次组件渲染时执行。
// 这一点类似于类组件的componentDidMount

import React, { useState, useEffect } from "react";

export default function RoleList() {
  const [loading, setLoading] = useState(true);
  let [number, setNumber] = useState(0);
  useEffect(() => {
    console.info("-----");
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [loading]);

  function alertNumber() {
    setTimeout(() => {
      alert(number);
    }, 3000);
  }

  return (
    <>
      {loading ? <p>Loading...</p> : <p>异步请求完成</p>}
      <p>{number}</p>
      <button onClick={() => setNumber(number + 1)}>+</button>
      <button onClick={alertNumber}>alertNumber</button>
    </>
  );
}

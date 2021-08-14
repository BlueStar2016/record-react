// redux其原理是我们通过用户在页面中发起action,从而通过reducer方法来改变state,从而实现页面和状态的通信。
import { createStore } from "redux";

const reducer = function (state = { num: 0,collapsed:false }, action) {
  switch (action.type) {
    case "add":
      state.num++;
      break;
    case "decrement":
      state.num--;
      break;
    case "isCollapsed":
      state.collapsed = action.content.collapsed;
    default:
      break;
  }
  return { ...state };
};

const store = createStore(reducer);

export default store;


import React, { Component, lazy } from "react";
import store from "../../../store";
// import { useEffect } from "react";
// import axios from "axios";
import { Button } from "antd";

// import Tip from '../../../components/Tip'
const Tip = lazy(() => import("../../../components/Tip"));

// export default function Home() {
//     useEffect(() => {
//         axios.get('/ajax/movieOnInfoList?token=&optimus_uuid=BC502750FABB11EB915D016E228D9E94523682C4D6AC43068F5B5ACFF8AEB448&optimus_risk_level=71&optimus_code=10').then(res=>{
//             console.info(res);
//         })
//     }, [])
//     return (
//         <div>

//         </div>
//     )
// }

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false, num: store.getState().num };
    // this.pushPage = this.pushPage.bind(this);
    console.info("constructor");

    store.subscribe(() => {
      this.setState({ num: store.getState().num });
    });
  }

  componentDidMount() {
    console.info("componentDidMount");
  }

  static getDerivedStateFromProps(props, state) {
    console.info("getDerivedStateFromProps");
    return true;
  }

  pushPage(str, str1) {
    // this.props.history.push('/user-manage/list');
    console.info(str, str1);
  }

  pushPage2 = () => {
    // this.props.history.push('/user-manage/list');
  };

  add = () => {
    store.dispatch({ type: "add", content: { id: 1, msg: "lalal" } });
  };

  decrement = () => {
    store.dispatch({ type: "decrement", content: { id: 1, msg: "wuuu" } });
  };

  render() {
    console.info("render");
    let num = store.getState().num;
    return (
      <>
        <Button
          type="primary"
          onClick={this.pushPage.bind(this, "触发了点击", "hahah")}
        >
          Button1
        </Button>
        <Button type="primary" onClick={this.pushPage2}>
          Button2
        </Button>
        <Button
          type="primary"
          onClick={(e) => this.pushPage("触发了点击", "hahha", e)}
        >
          Button3
        </Button>
        <Button type="primary" onClick={this.add} danger>
          ++
        </Button>
        <Button type="primary" onClick={this.decrement}>
          --
        </Button>
        {num}
        <Tip />
      </>
    );
  }
}

export default Home;

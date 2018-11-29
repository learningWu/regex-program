import React, {
  Component
} from "react";
import logo from "./logo.svg";
import "./App.css";
import checkbox from "antd/lib/checkbox";
import "antd/lib/checkbox/style";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      regexString: "",
      regex: "",
      matchResult: "",
      globalMatch: false
    };
  }
  regexStringChange = e => {
    var value = e.target.value;
    this.setState({
      regexString: value
    });
  };
  regexChange = e => {
    var value = e.target.value;
    this.setState({
      regex: value
    });
  };
  startGlobalMatch = e => {
    let reg = new RegExp(this.state.regex);
    // alert(reg.test(this.state.regexString) ? true : false);//test返回是否可以匹配到
    //因为 this.props 和 this.state 可能是异步更新的，你不应该依靠它们的值来计算下一个状态。
    this.setState((prevState, props) => {
      let results = [];
      for (const result of prevState.regexString.matchAll(reg)) {
        results = [...results, result + "\n"];
      };
      // alert(result ? result : '没匹配到字符串'); //exec返回匹配的结果
      return {
        matchResult: results
      };
    });
  };

  startMatch = e => {
    let reg = new RegExp(this.state.regex);
    // alert(reg.test(this.state.regexString) ? true : false);//test返回是否可以匹配到
    //因为 this.props 和 this.state 可能是异步更新的，你不应该依靠它们的值来计算下一个状态。
    this.setState((prevState, props) => {
      let result = reg.exec(prevState.regexString);
      // alert(result ? result : '没匹配到字符串'); //exec返回匹配的结果
      return {
        matchResult: result
      };
    });
  }

  checkChange = e => {
    this.setState((prevState, props) => {
      return {
        globalMatch: !prevState.globalMatch
      }
    })
  }
  render() {
    return ( <
      div className = "App" >
      <
      header className = "App-header" >
      <
      div className = "App-row" >
      待匹配字符串： {
        " "
      } <
      input className = "App-text"
      type = "text"
      value = {
        this.state.regexString
      }
      onChange = {
        this.regexStringChange
      }
      />{" "} < /
      div > {
        " "
      } <
      div className = "App-input-regex-row" >
      请输入正则表达式： {
        " "
      } <
      input className = "input"
      type = "text"
      value = {
        this.state.regex
      }
      onChange = {
        this.regexChange
      }
      />{" "} 全局匹配 <input type='checkbox' className='checkbox' defaultChecked={this.state.globalMatch} onChange={this.checkChange} ></input > {
        " "
      } <
      button onClick = {
        this.state.globalMatch ? this.startGlobalMatch : this.startMatch
      } > 开始匹配 < /button>{" "} < /
      div > {
        " "
      } <
      div className = "App-row" >
      匹配结果： {
        " "
      } <
      text className = "App-text" > {
        this.state.matchResult
      } < /text>{" "} < /
      div > {
        " "
      } <
      /header>{" "} < /
      div >
    );
  }
}

export default App;
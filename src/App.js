import React, {
  Component
} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      regexString: "",
      regex: ""
    }
  }
  regexStringChange = (e) => {
    var value = e.target.value;
    this.setState({
      regexString: value
    })
  }
  regexChange = (e) => {
    var value = e.target.value;
    this.setState({
      regex: value
    })
  }
  startMatch = (e) => {
    let reg = new RegExp(this.state.regex);
    // alert(reg.test(this.state.regexString) ? true : false);//test返回是否可以匹配到
    alert(reg.exec(this.state.regexString));//exec返回匹配的结果

  }

  render() {
    return (<
      div className="App" >
      <
      header className="App-header" >
        <
      div className="App-row"> 待匹配字符串：<
            input type="text" value={this.state.regexString} onChange={this.regexStringChange} /> < /div>
             <
      div className="App-row"> 请输入正则表达式：<
              input type="text" value={this.state.regex} onChange={this.regexChange} /> < /div>
    <div onClick={this.startMatch}>
              测试匹配
    </div>
            <
      /header> < /
      div >
                                                                                                                                );
                                                                                                                              }
                                                                                                                            }
                                                                                                                            
export default App;
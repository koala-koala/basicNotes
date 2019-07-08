import React, { PureComponent } from "react";
import Child from "./Child";
import "../../less/main.less";

export default class App extends PureComponent {
  state = {};
  render() {
    return (
      <div>
        哈哈哈哈，打不过我吧s
        <Child />
      </div>
    );
  }
}

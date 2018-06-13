import React, { Component } from "react";
import "./App.css";
import TodoList from "./TodoList.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoList
          todos={["buy milk", "learn chicken rice"]}
          title={"home todos"}
        />
        <TodoList
          todos={["learn ruby", "learn c", "learn python"]}
          title={"work todos"}
        />
      </div>
    );
  }
}

export default App;

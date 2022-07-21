import logo from "./logo.svg";
import "./App.css";
import person from "./Person/person.css";
import Person from "./Person/person";
import React, { Component } from "react";
import { eventWrapper } from "@testing-library/user-event/dist/utils";

class App extends Component {
  state = {
    name: "Faraz",
    age: 22,
  };
  updateData = (newName) => {
    this.setState({
      name: newName,
      age: 19,
    });
  };
  changedData = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  render() {
    const style = {
      width: "20%",
      margin: "auto",
      border: "1px solid #eee",
      padding: "15px",
      boxShadow: "0 2px 3px #ccc",
      borderRadius: "5px",
    };
    return (
      <div className="App">
        <h1>Class Component</h1>
        <button style={style} onClick={this.updateData.bind(this, "Huraira")}>
          Update Data
        </button>
        <Person
          name={this.state.name}
          age={this.state.age}
          click={this.updateData.bind(this, "Ammad")}
          changed={this.changedData}
        />
      </div>
    );
  }
}

export default App;

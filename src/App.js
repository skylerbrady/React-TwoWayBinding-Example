import React, { Component } from "react";
import "./App.css";
import Validation from "./Validation/Validation";
import Char from "./Char/Char";
class App extends Component {
  state = {
    userInput: ""
  };
  inputChanged = event => {
    this.setState({ userInput: event.target.value });
  };
  deleteChar = index => {
    const text = this.state.userInput.split("");
    text.splice(index, 1);
    const updatedText = text.join("");
    this.setState({ userInput: updatedText });
  };
  render() {
    let charList = this.state.userInput.split("").map((ch, index) => {
      return (
        <Char
          character={ch}
          key={index}
          clicked={() => this.deleteChar(index)}
        />
      );
    });
    return (
      <div className="App">
        <input
          type="text"
          className="inputField"
          placeholder="Enter Text"
          onChange={this.inputChanged}
          value={this.state.userInput}
        />
        <h3>{this.state.userInput}</h3>
        <Validation inputLenght={this.state.userInput.length} />
        {charList}
      </div>
    );
  }
}

export default App;

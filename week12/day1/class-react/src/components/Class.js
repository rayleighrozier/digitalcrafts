// type rcc
import React from "react";

// have to export
// don't do default if you have multiple things to export
export default class ClassComponent extends React.Component {
  state = {
    counter: 0,
    currentInput: "",
    items: ["test"],
  };
  changeCount = (event) => {
    if (event.target.name === "increment") {
      this.setState({
        counter: this.state.counter + 1,
      });
    } else if (this.state.counter > 0) {
      this.setState({
        counter: this.state.counter - 1,
      });
    } else {
      this.setState({ counter: 0 });
    }
  };

  addInput = () => {
    const newItems = [...this.state.items, this.state.currentInput];
    this.setState({ items: newItems });
    console.log("items", this.state.items);
  };
  render() {
    return (
      <div>
        <h1> Classes </h1>
        <h1>{this.state.counter}</h1>
        <button name="increment" onClick={(e) => this.changeCount(e)}>
          Increment
        </button>
        <button name="decrement" onClick={(e) => this.changeCount(e)}>
          Decrement
        </button>
        <input
          onChange={(e) => {
            this.setState({ currentInput: e.target.value });
          }}
          type="text"
        ></input>
        <button onClick={this.addInput}>Submit</button>
        <div className="item-container">
          {this.state.items?.map((item) => {
            return <p>{item}</p>;
          })}
        </div>
      </div>
    );
  }
}

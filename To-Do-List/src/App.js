import React, { Component } from "react";
import TextBox from "./Text-box";
import Table from "./Table";

class App extends Component {
  state = {
    text: [],
  };

  addToTable = (text) => {
    this.setState({ text: [...this.state.text, text] });
  };

  handleDelete = (index) => {
    const text = this.state.text;
    this.setState({
      text: text.filter((text, key) => {
        return key != index;
      }),
    });
  };

  render() {
    return (
      <div className="container">
        <Table data={this.state.text} handleDelete={this.handleDelete} />
        <TextBox addToTable={this.addToTable} />
      </div>
    );
  }
}

export default App;

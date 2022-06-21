import React, { Component } from "react";

class TextBox extends Component {
  handleExchange = () => {
    const textarea = document.querySelector("textarea");
    if (textarea.value !== "") {
      this.props.addToTable(textarea.value);
    }
    textarea.value = "";
  };

  render() {
    return (
      <form>
        <textarea cols="50" rows="5"></textarea>
        <input type="button" value="Add" onClick={this.handleExchange}></input>
      </form>
    );
  }
}

export default TextBox;

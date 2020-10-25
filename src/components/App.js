import React, { Component } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderBall: false, //variable needed to be changed
      posi: 0,
      ballPosition: { left: "0px", right: "0px" }
    };
    this.renderChoice = this.renderChoice.bind(this);
    this.buttonClickHandler = this.buttonClickHandler.bind(this);
  }
  //call back function
  buttonClickHandler() {
    this.setState({ renderBall: true });
  }
  renderChoice() {
    if (this.state.renderBall) {
      return <div className="ball" style={this.state.ballPosition}></div>;
    } else
      return (
        <button onClick={this.buttonClickHandler}>Click For One Ball</button>
      );
  }

  //bind ArrowRight keydown event

  componentDidMount() {
    window.addEventListener("keydown", (event) => {
      //   console.log(this.state);
      if (event.keyCode === 39) {
        const value = this.state.posi + 5;
        // console.log(5);
        this.setState({
          ballPosition: { left: value + "px", right: "0px" },
          posi: value
        });
      }
      if (event.keyCode === 37) {
        const value = this.state.posi + 5;
        const value1 = this.state.posi - 5;
        // console.log(5);
        this.setState({
          ballPosition: { left: value1 + "px", right: value + "px" },
          posi: value
        });
      }
    });
  }

  render() {
    return <div className="playground">{this.renderChoice()}</div>;
  }
}

export default App;

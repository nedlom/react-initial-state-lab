import { Component } from "react";

// your Bomb code here!
export default class Bomb extends Component {

  constructor(props) {
    super() 
    debugger
    this.state = {secondsLeft: props.initialCount}
  }

  render() {
    if (this.state.secondsLeft === 0) {
      return "Boom!"
    } else {
      return `${this.state.secondsLeft} seconds left before I go boom!`
    }

  }

}
import { Component } from "react";

// your ImageSlider code here!
export default class Slider extends Component {
  
  constructor() {
    super();
    this.state = {currentSlideIndex: 0}
  }

  render() {
    return `I am on slide ${this.state.currentSlideIndex}`
  }

}
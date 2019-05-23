import React from "react";
import Observable from "../Scripts/Observable";
//TODO: Test should component update in here.
//Implement a component that takes a word input and displays all combinations, permutations, word length, and word reversed.
export default class WordObserver extends React.PureComponent {
  constructor(props) {
    super(props);
    this.observable = new Observable();
    this.state = {
      inputText: ""
    };
  }
  render() {
    return (
      <div id="wordObserverContainer">
        <input inputText="hello" />
      </div>
    );
  }
}

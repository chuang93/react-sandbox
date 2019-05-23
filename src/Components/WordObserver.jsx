import React from "react";
import Observable from "../Scripts/Observable";
//TODO: Test should component update in here. create higher order componnet to show render count
//Implement a component that takes a word input and displays all combinations, permutations, word length, and word reversed.
export default class WordObserver extends React.PureComponent {
  constructor(props) {
    super(props);
    this.observable = new Observable();
    this.observable.subscribe(this.getPermutations);
    this.observable.subscribe(this.getCombinations);
    this.state = {
      inputText: ""
    };
  }

  initializeObserver = context => {};

  getPermutations = data => {
    document.querySelector("#permutations").textContent = "Permutations!";
  };

  getCombinations = data => {
    document.querySelector("#combinations").textContent = "Combinations";
  };
  render() {
    return (
      <div>
        <div id="wordObserverContainer">
          <input type="text" name="wordObserver" value={this.state.inputText} />
        </div>
        <div id="permuations" />
        <div id="combinations" />
      </div>
    );
  }
}

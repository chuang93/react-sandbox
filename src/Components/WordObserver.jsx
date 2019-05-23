import React from "react";
import Observable from "../Scripts/Observable";
//TODO: Test should component update in here. create higher order componnet to show render count
//Implement a component that takes a word input and displays all combinations, permutations, word length, and word reversed.
export default class WordObserver extends React.PureComponent {
  constructor(props) {
    super(props);
    this.initializeObserver();
    this.state = {
      inputText: ""
    };
  }

  initializeObservers = () => {
    const obs = (this.observable = new Observable());
    obs.subscribe(this.getPermutations);
    obs.subscribe(this.getCombinations);
    const observerContainer = document.querySelector("#wordObserverContainer");
    observerContainer.addEventListener("keydown", function(event) {
      if (event.target.id === "observerInput") {
        obs.notify("data");
      }
    });
  };

  getPermutations = data => {
    document.querySelector("#permutations").textContent =
      "Permutations of" + data;
  };

  getCombinations = data => {
    document.querySelector(
      "#combinations"
    ).textContent = `Combinations of ${data}`;
  };
  render() {
    return (
      <div>
        <div id="wordObserverContainer">
          <input
            id="observerInput"
            type="text"
            name="wordObserver"
            value={this.state.inputText}
          />
        </div>
        <div id="permutations" />
        <div id="combinations" />
      </div>
    );
  }
}

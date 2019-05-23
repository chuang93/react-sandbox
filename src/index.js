import React from "react";
import ReactDOM from "react-dom";
import WordObserver from "./Components/WordObserver";

import "./styles.css";

function cacheDecorator(func) {
  let cache = new Map();
  return function(x) {
    if (!cache.has(x)) {
      const val = func.apply(this, arguments);
      cache.set(x, val);
    }
    return cache.get(x);
  };
}

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      renderCount: 1,
      cached: false,
      cacheValue: ""
    };
    this.handleManualRender = this.handleManualRender.bind(this);
  }

  handleManualRender() {
    const state = this.state;
    this.setState({
      ...state,
      renderCount: state.renderCount + 1
    });
  }

  render() {
    return (
      <div className="App">
        <h2>Start editing to see some magic happen!</h2>
        <button id="renderManualButton" onClick={this.handleManualRender}>
          Manual Render!
        </button>
        <div id="renderCounter">
          We have rendered {this.state.renderCount} times!
        </div>
        <br />
        <WordObserver />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

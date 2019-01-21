import React, {Component} from "react";
import "./App.css";
import Connection from "./Connection";
import Name from "./Name";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <Name/>
            <Connection/>
        </header>
      </div>
    );
  }
}

export default App;

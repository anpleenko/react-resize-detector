import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import Com from "./component";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  display: 'flex'
};

const buttonStyles={
  position: 'absolute',
  left: 0,
  top: 0
}

class App extends React.Component {
  state = { show: true };
  onResize(e) {
    console.log("resize", e);
  }
  handleToggle = () => {
    this.setState({show: !this.state.show})
  }
  render() {
    const { show } = this.state;
   
    return (
      <div style={styles}>
        <button onClick={this.handleToggle} style={buttonStyles}>toggle</button>
        {show && (
          <div style={{}}>
            <Hello name="CodeSandbox" />
            <h2>Start editing to see some magic happen {"\u2728"}</h2>
          </div>
        )}

        <Com style={{height: 300, flexGrow: 1 }}/>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));

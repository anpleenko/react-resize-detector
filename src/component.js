import React from "react";
import cn from "classnames";
import ReactResizeDetector from "react-resize-detector";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  // width: 200
  height: 300
};

// // Small devices (landscape phones, 576px and up)
// @media(min - width: 576px) { ... }

// // Medium devices (tablets, 768px and up)
// @media(min - width: 768px) { ... }

// // Large devices (desktops, 992px and up)
// @media(min - width: 992px) { ... }

// // Extra large devices (large desktops, 1200px and up)
// @media(min - width: 1200px) { ... }

function between(x, a, b) {
  return x > a && x < b;
}

export default class Com extends React.Component {
  state = { width: 0 };

  onResize = (width, rrr) => {
    this.setState({ width });
  };
  
  render() {
    const { width } = this.state;
    const renderClassName = cn({
      xs: width < 567,
      sm: between(width, 576, 768),
      md: between(width, 768, 992),
      lg: between(width, 992, 1200),
      xl: width > 1200
    });

    return (
      <div style={this.props.style} className={renderClassName}>
        <ReactResizeDetector
          handleWidth
          handleHeight
          refreshMode="debounce"
          refreshRate={200}
          onResize={this.onResize}
        />
        {renderClassName}
      </div>
    );
  }
}

import React, { Component } from "react";
import CheckBox from "./CheckBox";
import "../index.css";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dest: [
        { id: 1, value: "Aasiya Jayavant", isChecked: false },
        { id: 2, value: "Luvieen Lawrence", isChecked: false },
        { id: 3, value: "Rey Mibourne", isChecked: false },
        { id: 4, value: "Cayle Brister", isChecked: false },
        {
          id: 5,
          value: "Deveedaas Nandi",
          isChecked: false,
        },
        {
          id: 6,
          value: "Obasey Chidy",
          isChecked: false,
        },
        {
          id: 7,
          value: "Xenie Dolezelova",
          isChecked: false,
        },
        {
          id: 8,
          value: "Ezequiel Dengra",
          isChecked: false,
        },
      ],
    };
  }

  handleAllChecked = (event) => {
    let dest = this.state.dest;
    dest.forEach((dest) => (dest.isChecked = event.target.checked));
    this.setState({ dest: dest });
  };

  handleCheckChieldElement = (event) => {
    let dest = this.state.dest;
    dest.forEach((dest) => {
      if (dest.value === event.target.value)
        dest.isChecked = event.target.checked;
    });
    this.setState({ dest: dest });
  };
  render() {
    return (
      <div className="Input">
        <h1>Portugal</h1>
        <ul>
          {this.state.dest.map((dest) => {
            return (
              <CheckBox
                handleCheckChieldElement={this.handleCheckChieldElement}
                {...dest}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Input;

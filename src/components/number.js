import React, { Component } from "react";

class Number extends Component {
  constructor() {
    super();
    this.state = {
      number: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    };
  }

  render() {
    return (
      <div>
        {this.state.number.map(el => (
          <ul className='number-resume'>
            <li>
              <p> {el} </p>{" "}
            </li>{" "}
          </ul>
        ))}
      </div>
    );
  }
}
export default Number;

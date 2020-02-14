import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Education extends Component {
  render() {
    return (
      <Grid className='resume'>
        <Cell className='number-all' col={8}>
          <p className='educat'>........{this.props.nameOfDiploma}</p>
        </Cell>

        <Cell className='number-all' col={4}>
          <p>
            {" "}
            {this.props.startYear}/{this.props.startMonth} -{" "}
            {this.props.endYear}/{this.props.endMonth}
          </p>
        </Cell>
      </Grid>
    );
  }
}

export default Education;

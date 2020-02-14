import React, { Component } from 'react';
import { Grid, Cell } from "react-mdl";


 class Experience extends Component {
  render() {
    return (
      <Grid>

        <Cell col={8}>
    <p> {this.props.jobName} </p>
    <p> {this.props.JobDescription} </p>


        </Cell>

        <Cell col={4}>
    <p> {this.props.startMonth}-{this.props.startYear} / {this.props. endMonth}-{this.props.endYear} </p>

</Cell>
      </Grid>

    )
  }
}

export default Experience ;

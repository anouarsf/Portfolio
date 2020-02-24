import React, { Component } from 'react'
import { Grid } from "react-mdl";


 class CompetencesInfo extends Component {
  render() {
    return (
      <Grid>
       <div className='skills-front'>

<img
  className='logo-skills-front'
  src={this.props.imglogo}
  style={{
    height: "70px",
    width: "70px",
    marginLeft: "25px",
    opacity: "0.2"
  }}
/>
<p style={{ opacity: "0.2" }}>
  |
</p>
<p
  className='name-logo-skills-front'
>
  {this.props.skillsFront}
</p>
</div>

      </Grid>
    )
  }
}

export default CompetencesInfo;

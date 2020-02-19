import React, { Component } from 'react'
import { Grid } from "react-mdl";


 class Skills extends Component {
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



{/* <div className='skills-front'>
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
<p style={{opacity: "0.2" }}>
  |
</p>

<p
  className='name-logo-skills'
>
  JAVASCRIPT
</p>
</div>

<div className='skills-front'>
<img
  className='logo-skills-front'
  src={react}
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
  className='name-logo-skills'
>
  REACT JS
</p>
</div>

<div className='skills-front'>
<img
  className='logo-skills-front'
  src={redux}
  style={{
    height: "70px",
    width: "70px",
    marginLeft: "25px",
    opacity: "0.2"
  }}
/>
<p style={{ 
opacity: "0.2" ,color:"orange" }}>
  |
</p>

<p
  className='name-logo-skills'
>
  REDUX
</p>
</div>


<div className='skills-front'>
<img
  className='logo-skills-front'
  src={node}
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
  className='name-logo-skills'
>
  NODE JS
</p>
</div>


<div className='skills-front'>
<img
  className='logo-skills-front'
  src={Bootstrap}
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
  className='name-logo-skills'
>
  BOOTSTRAP
</p>
</div>

<div className='skills-front'>
<img
  className='logo-skills-front'
  src={express
  }
  style={{
    height: "70px",
    width: "90px",
    marginLeft: "25px",
    opacity: "0.2"
  }}
/>
<p style={{ opacity: "0.2" }}>
  |
</p>
<p
  className='name-logo-skills'
>
EXPRESS JS  </p>
</div>


<div className='skills-front'>
<img
  className='logo-skills-mongo'
  src={mongo}
  style={{
    height: "80px",
    width: "240px",
    opacity: "0.2"
  }}
/>
<p style={{ opacity: "0.2" }}>
  |
</p>
<p
  className='name-logo-skills'
>
  MONGO DB
</p>
</div> */}












      </Grid>
    )
  }
}

export default Skills

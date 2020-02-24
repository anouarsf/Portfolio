import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import logo from "./logo.png";
import Resume from "./Resume/resume";
import Skills from "./Skills/skills";
import Aboutme from "./Aboutme/aboutme";
import Contact from "./contact"



class Landing extends Component {
 constructor(){
 super()
 this.state = {
   x:0,
   y:0
 }
}
 
_onMouseMove = (e) => {
  const width = this.refs.titleContainer.clientWidth;
  const height = this.refs.titleContainer.clientHeight;
  const oX = (e.nativeEvent.offsetX/width) * 100;
  const oY = (e.nativeEvent.offsetY/height) * 100;
  this.setState({
      x: oX,
      y: oY
  });
}

  render() {
    const {x, y} = this.state;
        const maskStyle = {
            '--maskX': x,
            '--maskY': y
        }

    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className='landing-grid'>
        <Cell col={4}>

            <img src={logo} alt='avatar' className='avatar-img' />
            </Cell>

            <Cell col={8}>
              <div className="name">
              <h3 > Sfayhi <a style={{  color: 'rgb(113, 9, 173)'

}}>Anouar</a></h3>

              </div>
            <div className="titleContainer"
                onMouseMove={this._onMouseMove}
                ref="titleContainer"
                style={maskStyle}
            >
                <div className="titleWrapper">
                    <h1>Developper full stuck Js</h1>
                </div>
                <hr/>
                <div className="titleWrapper cloneWrapper">
                    <h1>Developper full stuck Js</h1>
                </div>
            </div>
      
              <div class='footer-social-icons'>
                <ul class='social-icons'>
                  <li>
                    <a href='https://www.facebook.com/'>
                      {" "}
                      <i class='fa fa-facebook'></i>
                    </a>
                  </li>
                  <li>
                    <a href=''>
                      {" "}
                      <i class='fa fa-linkedin'></i>
                    </a>
                  </li>
                  <li>
                    <a href=''>
                      {" "}
                      <i class='fa fa-github'></i>
                    </a>
                  </li>
                </ul>
              </div>
          </Cell>
          <Aboutme/>
          <Resume/>
         <Skills/>
         <Contact/>


        </Grid>
      </div>
    );
  }
}

export default Landing;

import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Skills from "./skills";
import html from "./html.png";
import react from "./react.png";
import redux from "./redux.png";
import css from "./css.png";
import js from "./js.png";
import node from "./node.png";
import Bootstrap from "./bootstrap.png";
import mongo from "./mongodb.jpg";
import express from "./Expressjs.png";

class Projects extends Component {
  render() {
    return (
      <Grid className='Skills'>
        <Cell col={4} className='Title-Skills'>
          {" "}
          <h3 className='Title-Skills-informatique'>Compétence Informatique</h3>
        </Cell>

        <Cell col={8} className='Skills-left'>

          <Skills skillsFront='HTML' imglogo={html}
          
          />
             <Skills skillsFront='CSS' imglogo={css}
          />
<Skills skillsFront='JAVASCRIPT' imglogo={js}
          />


          <Skills skillsFront='REACT' imglogo={react}
          />
          <Skills skillsFront='REDUX' imglogo={redux}
          />
          <Skills skillsFront='NODE' imglogo={node}
          />
          <Skills skillsFront='BOOTSTRAP' imglogo={Bootstrap}
          />
          <Skills skillsFront='EXPRESS JS' imglogo={express}
          />

<Skills skillsFront='MONGO DB' imglogo={mongo}
          />
          
        </Cell>
      </Grid>
    );
  }
}

export default Projects;

import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Skills from "./skills";
import SkillsLinguistique from "./skillsLinguistique"
import html from "./html.png";
import react from "./react.png";
import redux from "./redux.png";
import css from "./css.png";
import js from "./js.png";
import node from "./node.png";
import Bootstrap from "./bootstrap.png";
import mongo from "./mongodb.jpg";

class Projects extends Component {
  render() {
    return (
      <Grid className='Skills'>
   

        <Cell col={12} className='Skills-left'>

        <Cell  className='Title-Skills'>
          {" "}
          <h3 className='Title-Skills-informatique'>Compétences Informatiques</h3>

        </Cell>
      

          <Skills skillsFront='HTML' imglogo={html} />
          <Skills skillsFront='CSS' imglogo={css} />
          <Skills skillsFront='JAVASCRIPT' imglogo={js} />

          <Skills skillsFront='REACT' imglogo={react} />
          <Skills skillsFront='REDUX' imglogo={redux} />
          <Skills skillsFront='NODE' imglogo={node} />
          <Skills skillsFront='BOOTSTRAP' imglogo={Bootstrap} />
          <div className='mongoall'>
            <img src={mongo} className='imgMongodb' />
            <p className='secondMongodb'> | </p>
            <p className='name-logo-skills-mongodb'>MONGO DB</p>

          </div>

          <Cell  className='Title-Skills'>
          {" "}
          <h3 className='Title-Skills-informatique'>Compétences Linguistiques</h3>

        </Cell>
          < SkillsLinguistique/>

        </Cell>

        

      </Grid>
    );
  }
}

export default Projects;

import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import CompetencesInfo from "./competencesInfo";
import CompetencesLingui from "./competencesLingui"
import html from "./html.png";
import react from "./react.png";
import redux from "./redux.png";
import css from "./css.png";
import js from "./js.png";
import node from "./node.png";
import Bootstrap from "./bootstrap.png";
import mongo from "./mongodb.jpg";

class Skills extends Component {
  render() {
    return (
      <Grid className='Skills'>
   

        <Cell col={12} className='Skills-left'>

        <Cell  className='Title-Skills'>
          {" "}
          <h3 className='Title-Skills-informatique'>Compétences Informatiques</h3>

        </Cell>
      

          <CompetencesInfo skillsFront='HTML' imglogo={html} />
          <CompetencesInfo skillsFront='CSS' imglogo={css} />
          <CompetencesInfo skillsFront='JAVASCRIPT' imglogo={js} />

          <CompetencesInfo skillsFront='REACT' imglogo={react} />
          <CompetencesInfo skillsFront='REDUX' imglogo={redux} />
          <CompetencesInfo skillsFront='NODE' imglogo={node} />
          <CompetencesInfo skillsFront='BOOTSTRAP' imglogo={Bootstrap} />
          <div className='mongoall'>
            <img src={mongo} className='imgMongodb' />
            <p className='secondMongodb'> | </p>
            <p className='name-logo-skills-mongodb'>MONGO DB</p>

          </div>

          <Cell  className='Title-Skills'>
          {" "}
          <h3 className='Title-Skills-informatique'>Compétences Linguistiques</h3>

        </Cell>
          < CompetencesLingui/>

        </Cell>

        

      </Grid>
    );
  }
}

export default Skills;

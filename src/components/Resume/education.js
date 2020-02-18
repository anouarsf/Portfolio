import React, { Component } from "react";

class Education extends Component {
  render() {
    return (
      <section id='timeline'>
        <div className='tl-item'>
          <div className='tl-bg'></div>

          <div className='tl-year'>
            <p className='f2-heading'>Education</p>
          </div>
        </div>

        <div className='tl-item'>
          <div className='tl-bg'></div>

          <div className='tl-year'>
            <p className='f2-heading'>2010</p>
          </div>

          <div className='tl-content'>
            <h6> Licence fondamentale en Gestion </h6>
            <p>Ecole superieur de commerce</p>
          </div>
        </div>

        <div className='tl-item'>
          <div className='tl-bg'></div>

          <div className='tl-year'>
            <p className='f2-heading'>2013</p>
          </div>

          <div className='tl-content'>
            <h6> Master recheche en Management</h6>
            <p>Ecole superieur de commerce</p>
          </div>
        </div>

        <div className='tl-item'>
          <div className='tl-bg'></div>

          <div className='tl-year'>
            <p className='f2-heading'>2020</p>
          </div>

          <div className='tl-content'>
            <h6> Developpeur Fullstack</h6>
            <p>Go My Code</p>
          </div>
        </div>
      </section>
    );
  }
}

export default Education;

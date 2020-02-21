import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl';

 class SkillsLinguistique extends Component {
  render() {
    return (
<Grid>
  <Cell col={12}>
    <div className="Skills-Languages">
      <li>
<h3>Anglais</h3>
<span className="bar"><span className="English"></span></span>
      </li>

      <li>
<h3>Français</h3>
<span className="bar"><span className="Frensh"></span></span>
      </li>

    </div>

  </Cell>
</Grid>
    )
  }
}

export default SkillsLinguistique;
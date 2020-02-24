import React, { Component } from 'react'
import { Grid, Cell } from "react-mdl";
import Identity from "./identity" ;

 class Aboutme extends Component {
  render() {
    return (
<Grid className="aboutMe">


        <Cell col={8}>

        <h3 className="titleAbout">Développeur Junior</h3>
        <p  className="description">Après une expérience de 6 ans en marketing digital et en ressource humaine. <br/>J'ai décidé de changer de cap en découvrant l'univers du développement web , et malgré ma motivation je ne pensais pas pouvoir réussir ma reconversion professionnelle seul et sans avoir un diplôme. <br/>
Depuis Novembre 2019 j'ai commencé la formation "Fullstack JS" (4 mois) avec Go My Code. <br/>
J'aime relever les défis , je suis capable de travailler aisément en équipe comme en autonomie .</p>
       

</Cell>

<div className="myself">

<h3 className="titleAbout">ABOUT ME</h3>

<Identity
            name='Sfayhi Anouar'
            dayOfBirth={28}
            monthOfBirth={5}
            YearOfBirth={1987}
            email='anouarsfayhi@gmail.com'
            Adresse='Ennasr 2 , Ariana'
            PhoneNumber='+216 55 417 444'
            Country='Tunisia'
          />

        </div>

        </Grid>

        )
  }
}

export default Aboutme;

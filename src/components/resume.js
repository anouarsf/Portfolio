import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Number from "./number";
import Identity from "./identity";
import Education from "./education";
import Experience from "./experience";



class Resume extends Component {
  render() {
    return (
      <div>
        <Grid className='resume'>
          <Cell className='number-all' col={1}>
            <Number />
          </Cell>

          <Cell className='resume-right-col' col={4}>
            <Identity
              name='Sfayhi Anouar'
              dayOfBirth={28}
              monthOfBirth={5}
              YearOfBirth={1987}
              email='anouarsfayhi@gmail.com'
              Adresse='Ennasr 2 , Ariana'
              Country='Tunisia'
              PhoneNumber='+216 55 417 444'
            />
          </Cell>

          <Cell className='' col={7}>
            <Education
              startYear={2019}
              endYear={2020}
              startMonth='November'
              endMonth='Janvier'
              nameSchool='Go My Gode'
              nameOfDiploma='Devellopement Fullstack Javascript'
            />
            <Education
              startYear={2012}
              endYear={2018}
              startMonth='Septembre'
              endMonth='Decembre'
              nameSchool='Ecole superieur de commerce'
              nameOfDiploma='Master recherche Management'
            />

            <Education
              startYear={2007}
              endYear={2012}
              startMonth='Mars'
              endMonth='Avril'
              nameSchool='Ecole superieur de commerce'
              nameOfDiploma='Licence fondamentale en Gestion'
            />
            <Experience
              startYear={2014}
              endYear={2018}
              startMonth='Mars'
              endMonth='Avril'
              jobName='Co Fondateur et Marketing Manager'
              JobDescription='jjjjjjjjjjjjjjjjjjjjjjjhhhhhhhhhhhhhhhh'
            />

            <Experience
              startYear={2018}
              endYear={2019}
              startMonth='Mars'
              endMonth='Avril'
              jobName='Gestionnaire de paie'
              JobDescription='dsssssssssssssssssssssssdssssssssssssssssssss'
            />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;

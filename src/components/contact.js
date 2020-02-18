import React, { Component } from 'react';
import { Grid, Cell } from "react-mdl";
import Number from "./number";

import Identity from "./identity" ;
import Id from "./id" ;


 class Contact extends Component {
  render() {
    return (
    
      <div>
      <Grid className='contact'>
        
        <Cell className='' col={1}>
          <Number />
        </Cell>

        <Cell className='contact-right-col' col={11}>
        <Id/>

          <Identity
            name='Sfayhi Anouar'
            dayOfBirth={28}
            monthOfBirth={5}
            YearOfBirth={1987}
            email='anouarsfayhi@gmail.com'
            Adresse='Ennasr 2 , Ariana'
            PhoneNumber='+216 55 417 444'
          />
        </Cell >
  
        

      </Grid>
    </div>


    )
  }
}

export default Contact;

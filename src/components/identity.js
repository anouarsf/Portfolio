import React, { Component } from "react";

class Identity extends Component {
  render() {
    return (
      <div>
        <p className='vscode-mainDark'>
       
          class <a className='vscode-lightGreen'> Resume </a> extends  <a className='vscode-lightGreen'> Component </a>
        </p>

    
        <p className= 'vscode-Yellow' > render  <a className= 'vscode-mainRed'> ( {this.props.name} )</a> </p>

        <p className='vscode-vscGrey'> // I'm ambitious and love new challenge;) </p>
        <p className='vscode-vscGrey'> // My vast variety of skills is continuly expanding</p>


        <p className= 'vscode-Yellow'>return  <a className= 'vscode-mainRed'> ( </a> </p>
       
       
        <p className="vscode-lightGreen"> <a className='vscode-redLight' >this</a> .dayOfBirth <a className='vscode-redLight'> = </a> 
        <a className="vscode-mainYellow"> {this.props.dayOfBirth} - {this.props.monthOfBirth} - {this.props.YearOfBirth}</a>
          
        </p>

        <p  className="vscode-lightGreen">  <a className='vscode-redLight' >this</a>    .email  <a className='vscode-redLight'> = </a> {this.props.email} </p>

        <p className="vscode-lightGreen">  <a className='vscode-redLight' >this</a>       .numberPhone  <a className='vscode-redLight'> = </a>        {this.props.PhoneNumber} </p>

        <p className="vscode-lightGreen">  <a className='vscode-redLight' >this</a>              .Adresse      <a className='vscode-redLight'> = </a>       {this.props.Adresse} </p>
        <p className="vscode-lightGreen">  <a className='vscode-redLight' >this</a>                         .Country          <a className='vscode-redLight'> = </a>       {this.props.Country} </p>
        <p> export default Resume ; </p>
      </div>
    );
  }
}

export default Identity;

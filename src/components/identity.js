import React, { Component } from "react";
import Typical from 'react-typical';

class Identity extends Component {
  render() {
    return (
      // <div>
      <div className="identify">
        <p className='vscode-mainDark'>
          class <a className='vscode-mainPurple'> Resume </a> extends{" "}
          <a className='vscode-mainPurple'> Component </a> <a> (*_*) </a>
        </p>

        <p className='vscode-Yellow'>
          {" "}
          render <a className='vscode-mainRed'> ( {this.props.name} )</a>{" "}
        </p>

        <p className='vscode-vscGrey'>
        <a style={{ color:'red'}}> // Je suis {" "}</a>  

          <Typical
        loop={1}
        wrapper="b"
        steps={[ 
        'développeur junior,', 1500,
        'spécialisé en React Js ;', 1500
      ]}  />
          </p>
        <p className='vscode-vscGrey'>
      
        // Je me suis passuionee jaime apprendre et parce que cest là ou convergent les usages
     
        </p>

        <p className='vscode-Yellow'>
          return <a className='vscode-mainRed'> ( </a>{" "}
        </p>

        <p className='vscode-lightGreen'>
          {" "}
          <a className='vscode-redLight'>this</a> .dayOfBirth{" "}
          <a className='vscode-redLight'> = </a>
          <a className='vscode-mainYellow'>
            {" "}
            {this.props.dayOfBirth} - {this.props.monthOfBirth} -{" "}
            {this.props.YearOfBirth}
          </a>
        </p>

        <p className='vscode-lightGreen'>
          {" "}
          <a className='vscode-redLight'>this</a> .email:{" "}
          <a className='vscode-redLight'> = </a>{" "}
          <a className='vscode-mainRed'>{this.props.email}  </a>{" "}
        </p>

        <p className='vscode-lightGreen'>
          {" "}
          <a className='vscode-redLight'>this</a> .numberPhone{" "}
          <a className='vscode-redLight'> = </a>{" "}
          <a className='vscode-mainVsBlue'> {this.props.PhoneNumber} </a>
        </p>

        <p className='vscode-lightGreen'>
          {" "}
          <a className='vscode-redLight'>this</a> .Adresse{" "}
          <a className='vscode-redLight'> = </a>{" "}
          <a className='vscode-mainYellow'> {this.props.Adresse} </a>{" "}
        </p>
        <p className='vscode-lightGreen'>
          {" "}
          <a className='vscode-redLight'>this</a> .Country{" "}
          <a className='vscode-redLight'> = </a>{" "}
          <a className='vscode-mainRed'>  </a>{" "}
        </p>
        <p className='vscode-mainVsBlue'>
          {" "}
          export <a className='vscode-mainPurple'> default</a> Resume ;{" "}
        </p>

      </div>
      
    );
  }
}

export default Identity;

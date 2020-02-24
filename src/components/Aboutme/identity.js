import React, { Component } from "react";

class Identity extends Component {
  render() {
    return (
      <div className='identify'>
        <p>
          {" "}
          <a className="AboutmeThis">this</a> .dayOfBirth <a className="res-aboutMe"> = </a>
          <a className="res-aboutMe">
            {" "}
            {this.props.dayOfBirth} - {this.props.monthOfBirth} -{" "}
            {this.props.YearOfBirth}
          </a>
        </p>

        <p>
          {" "}
          <a className="AboutmeThis">this</a> .email: <a className="res-aboutMe"> = </a> <a className="res-aboutMe">{this.props.email} </a>{" "}
        </p>

        <p>
          {" "}
          <a className="AboutmeThis">this</a> .numberPhone <a className="res-aboutMe"> = </a> <a className="res-aboutMe"> {this.props.PhoneNumber} </a>
        </p>

        <p>
          {" "}
          <a className="AboutmeThis">this</a> .Adresse <a className="res-aboutMe"> = </a> <a className="res-aboutMe"> {this.props.Adresse} </a>{" "}
        </p>
        <p>
          <a className="AboutmeThis">this</a> .Country
          <a className="res-aboutMe"> = </a>
          <a className="res-aboutMe"> {this.props.Country} </a>
        </p>
      </div>
    );
  }
}

export default Identity;

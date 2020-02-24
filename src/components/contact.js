import React, { Component } from 'react'

export default class contact extends Component {
  render() {
    return (
<div id="form-main">
  <div id="form-div">
    <form className="form" id="form1">
      
      <p className="name">
        <input name="name" type="text" className="validate[required,custom[onlyLetter],length[0,100]] feedback-input" placeholder="Name" id="name" />
      </p>
      
      <p className="email">
        <input name="email" type="text" className="validate[required,custom[email]] feedback-input" id="email" placeholder="Email" required />
      </p>
      
      <p className="text">
        <textarea name="text" className="validate[required,length[6,300]] feedback-input" id="comment" placeholder="Comment"></textarea>
      </p>
      
      
      <div className="submit">
        <input type="submit" value="SEND" id="button-blue"/>
        <div className="ease"></div>
      </div>
    </form>
  </div>
  </div>
    )
  }
}

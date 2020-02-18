import React, { Component } from "react";

class Id extends Component {
  render() {
    return (
      <div>
        <ul className='id'>
          <li>
            <img
              className='id-img-contact'
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTXr89xuMky3INgz2QkD739JVuJdkpqFHjhk2YD_4P7ipT1JDoA"
              }
            />{" "}
          </li>
          <li>
            {" "}
            <h6 className='id-contact'>
              Contact.js <a className='id-contact-icon'> x </a>
            </h6>{" "}
          </li>
        </ul>
      </div>
    );
  }
}
export default Id;

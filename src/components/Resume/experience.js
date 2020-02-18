import React, { Component } from "react";

class Experience extends Component {
  render() {
    return (
      <div className='timeline-experience'>
        <div className='timeline-experience-body'>
          <div className='timeline-experience-item'>
            <p className='time-experience'>
              {this.props.startMonth}/{this.props.startYear} -{" "}
              {this.props.endMonth}/{this.props.endYear}
            </p>
            <p className='time-experience-1'></p>
            <div className='content-experience'>
              <h4 className='namejob-experience'> {this.props.jobName} </h4>
              <h6 className='namebrand-experience'> {this.props.nameBrand} </h6>
              <p className='description-experience'>
                {this.props.descriptionJob}
              </p>
              <p className='description-experience'>
                {this.props.descriptionJob1}
              </p>
              <p className='description-experience'>
                {this.props.descriptionJob2}
              </p>
              <p className='description-experience'>
                {this.props.descriptionJob3}
              </p>
              <p className='description-experience'>
                {this.props.descriptionJob4}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Experience;

import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var bio = this.props.data.bio;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src="https://media-exp1.licdn.com/dms/image/C4E03AQFlgYzOdv4WkQ/profile-displayphoto-shrink_200_200/0?e=1605744000&v=beta&t=pB2S4aDCNfgVpjxY1oGHdrb9T3Ms6JwgkrnJ_JFBWFg" alt="Gaurav Singh Profile Pic" />
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>
            Experienced, knowledgeable, hardworking and highly versatile and 
                 adaptable computer/software development and engineering professional/expert 
                 with over 2+ years of experience/education combined and excellent communication 
                 skills ( English close to proficiency: talk to me to verify it on your own).
                 Of those, over a years as a 
                 full-time independent freelancer with more than 5 projects/tasks .
            </p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>Gaurav Singh</span><br />
						   <span>Noida<br />
						         Noida, Delhi NCR, 201301                   </span><br />
						   <span>+91 8299 6868 79</span><br />
                     <span>sgaurav603@gmail.com</span>
					   </p>
               </div>
               <div className="columns download">
                  <p>
                     <a href="https://drive.google.com/file/d/1woFT802IswLsRkVAm4C4tVCnn2hJD4cV/view?usp=sharing" className="button"><i className="fa fa-download"></i>Download Resume</a>
                  </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;

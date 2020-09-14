import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <p>{education.description}</p></div>
      })
      var work = this.props.data.work.map(function(work){
        return <div key={work.company}><h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            <p>{work.description}</p>
        </div>
      })
      var skills = this.props.data.skills.map(function(skills){
        var className = 'bar-expand '+skills.name.toLowerCase();
        return <li key={skills.name}><span style={{width:skills.level}}className={className}></span><em>{skills.name}</em></li>
      })
    }

    return (
      <section id="resume">

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
               <div>
                  <h3>Dr. Abdul Kalam Technical University</h3>
                  <p class="info">
                    Bachelors of Technologyin Computer Science & Engineering,
                    Software Engineering Option <span>•</span>
                    <em class="date">Graduated August 2019</em>
                  </p>
                  <p>
                    Under the recommendation and Guidance of the HOD of College,
                    I transferred to the University. Here I took my Bachelors of
                    Computer Science with a Software Engineering Specialty and
                    achieved a much more thorough education in the underlying
                    theory, concepts, and science behind more complex
                    programming. It was here that I discovered my passion for
                    scalable application programming (web and mobile), the
                    security behind computer and application systems, and found
                    that I have a knack for understanding complex algorithms.
                  </p>
                </div>
                <div>
                  <h3>Senior Secondary School</h3>
                  <p class="info">
                    Science Stream
                    <span>•</span>
                    <em class="date">2014</em>
                  </p>
                  <p>
                    I attended my secondary on a scholarship for the college
                    team. While here, I studied my courses, Wins 2 Mathemetics
                    Olympiads.
                  </p>
                </div>
               </div>
            </div>
         </div>
      </div>


      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Work</span></h1>
         </div>

         <div className="nine columns main-col">
         <div>
              <h3>Shoping site</h3>
              <p class="info">
                Software Developer<span>•</span>
                <em class="date">August 2019-present</em>
              </p>
              <p class="newline">
                Work this as a Freelancer, I have worked as a Full Stack
                Software Engineer . Here I have had the chance to dig in and get
                my hands dirty with all parts of our software. I have worked
                with our legacy Node JS/ Mongo backend, as well as built new
                node-based servers for new products. As well, I led the
                development of V2 of our mobile application written in React
                Native. I have worked extensively with React/Redux as well as
                with react hooks. More recently, As part of our partnership with
                a number of 3rd parties and our planned expansion, the need to
                tighten security and bring our technology up to certain
                compliance standards has become evident. It is my job to bring
                us into alignment with these, as well as hardening our security
                as a whole.
              </p>
            </div>
            <div>
              <h3>COVID-19 Tracker App</h3>
              <p class="info">
                Work as Front-end React JS Developer <span>•</span>
                <em class="date">March-2020</em>
              </p>
              <p class="newline">
                Working for this Epidemic, Its a Chance to make such Web app to
                Available updated cases and help all indivisuals who know about
                the satuations and the Reak Data about this epidemic COVID-19. I
                take for granted every day. I Setting up the Firebase. I uses
                Responsive CSS components. I uses React Context API. I uses
                React Hooks. I uses Material UI for all the header Icons and
                nearly all the Icons. I uses React Chart JS for showing the
                Senario in a proper Chart Manner.
              </p>
            </div>
            <div>
              <h3>Spotify-clone</h3>
              <p class="info">
                Front-end React JS Developer<span>•</span>
                <em class="date">May-2020</em>
              </p>
              <p class="newline">
                This is the Demo project Which i want to show to the clients,
                This is a small Full react JS Firebase App. I Setting up the
                Firebase. I uses Responsive CSS components. I uses React Context
                API. I uses React Hooks. I uses Material UI for all the header
                Icons and nearly all the Icons. I give the authentication
                through firebase, Spotify Developer Section.
              </p>
            </div>

            <div>
              <h3>Airbnb-clone</h3>
              <p class="info">
                Front-end React JS Developer<span>•</span>
                <em class="date">September-2020</em>
              </p>
              <p class="newline">
                This is the Demo project Which i want to show to the clients,
                This is a Full Front-end react JS Firebase App.
                <br />
                One Most important in this Fetches the Date Table I specify all
                the CSS Components. I Setting up the Firebase. I uses Responsive
                CSS components. I uses React Context API. I uses React Hooks. I
                uses Material UI for all the header Icons and nearly all the
                Icons. I give the authentication through firebase, Spotify
                Developer Section.
              </p>
            </div>
        </div>
    </div>



      <div className="row skill">

         <div className="three columns header-col">
            <h1>
              <span>Favorite Tech</span>
            </h1>
         </div>
            <div>
         <div className="nine columns main-col">

         <p class="lead center">
                I'm a tinkerer and am always interested in playing around with
                new technologies but these are the ones that have really won me
                over
              </p>
            </div>
            <ul class="bgrid-quarters s-bgrid-thirds cf">
              <div class="columns feature-item">
                <img class="skill" alt="Git" src="images/tech/git.png" />
                <h5>Git</h5>
                <p>
                  I use Git for all of my projects so far. I have used Git for
                  version control in small teams and have toyed around with
                  contributing to Open Source Projects.
                </p>
              </div>
              <div class="columns feature-item">
                <img class="skill" alt="Java" src="images/tech/javascript.png" />
                <h5>JavaScript</h5>
                <p>
                  Java was my first programming language that I started using in
                  college years ago. It is by far the language I am most
                  familiar with in terms of data-structure and algorithm
                  programming.
                </p>
              </div>
              <div class="columns feature-item">
                <img class="skill" alt="React Js" src="images/tech/react.png" />
                <h5>React Js</h5>
                <p>
                  I am fairly new to React and really did not like it at first.
                  It has grown on me though and I will continue to use it going
                  forward. I have built a ReactJS based resume-website template
                  (link below in portfolio) which I used as a starting point for
                  this personal site.
                </p>
              </div>
              <div class="columns feature-item">
                <img class="skill" alt="Node JS" src="images/tech/node.png" />
                <h5>Node JS</h5>
                <p>
                  Node JS is my server-side scripting language of choice. The
                  bulk of my experience with it has been in conjunction with
                  MeteorJS-based projects
                </p>
              </div>
              
            </ul>
				
			</div>
      </div>
   </section>
    );
  }
}

export default Resume;

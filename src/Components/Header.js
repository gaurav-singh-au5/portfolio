import React, { Component } from 'react';

class Header extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var occupation= this.props.data.occupation;
      var description= this.props.data.description;
      var city= this.props.data.address.city;
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <header id="home">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
	         <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#portfolio">Works</a></li>
            <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
         </ul>

      </nav>

      <div className="row banner">
         <div className="banner-text">
            <h1 className="responsive-headline">I'm Gaurav Singh.</h1>
            <h3>I'm a India based <span>React JS Developer</span>.<br />Full Stack React Developer by Day. Freelancer by Night.</h3>
            <hr />
            <ul className="social">
               
            <li>
                  <a href="https://linkedin.com/in/gaurav-singh-a5715815a">
                     <i class="fa fa-linkedin"></i>
                  </a>
               </li>
               <li>
                  <a href="https://www.instagram.com/sgaurav0303/">
                     <i class="fa fa-instagram"></i>
                  </a></li>
               <li>
                  <a href="https://stackoverflow.com/users/12312762/gaurav-rajpoot">
                     <i class="fa fa-stack-overflow"></i>
                  </a>
               </li>
               <li>
                  <a href="https://github.com/gaurav-singh-au5?tab=repositories">
                     <i class="fa fa-github"></i>
                  </a>
               </li>
            </ul>

            
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;

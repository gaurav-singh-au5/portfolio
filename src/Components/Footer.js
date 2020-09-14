import React, { Component } from "react";

class Footer extends Component {
  render() {
    if (this.props.data) {
      var networks = this.props.data.social.map(function (network) {
        return (
          <li key={network.name}>
            <a href={network.url}>
              <i className={network.className}></i>
            </a>
          </li>
        );
      });
    }

    return (
      <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">

            <li>
                <a href="https://linkedin.com/in/gaurav-singh-a5715815a">
                  <i class="fa fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/sgaurav0303/">
                  <i class="fa fa-instagram"></i>
                </a>
              </li>
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
              <li>
                <a href="https://join.skype.com/invite/YW83c7sLVPQs">
                  <i class="fa fa-skype"></i>
                </a>
              </li>

            </ul>

            <ul className="copyright">
              <li>&copy; Copyright 2020 Gaurav Singh</li>
              <li>
                Design by{" "}
                <a title="Styleshout" href=" ">
                  My freetime
                </a>
              </li>
            </ul>
          </div>
          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open"></i>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;

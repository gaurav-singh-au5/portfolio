import React, { Component } from 'react';

class Portfolio extends Component {
  render() {

    if(this.props.data){
      var projects = this.props.data.projects.map(function(projects){
        var projectImage = 'images/portfolio/'+projects.image;
        return <div key={projects.title} className="columns portfolio-item">
           <div className="item-wrap">
            <a href={projects.url} title={projects.title}>
               <img alt={projects.title} src={projectImage} />
               <div className="overlay">
                  <div className="portfolio-item-meta">
                 <h5>{projects.title}</h5>
                     <p>{projects.category}</p>
                  </div>
                </div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
          </div>
        </div>
      })
    }

    return (
      <section id="portfolio">

      <div className="row">

         <div className="twelve columns collapsed">

            <h1>Check Out Some of My Works.</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {/* <div class="columns portfolio-item">
                <div class="item-wrap">
                  <a
                    href="https://www.canadianwanderlust.com"
                    title="Canadian Wanderlust"
                  >
                    <img
                      alt="Canadian Wanderlust"
                      src="images/portfolio/canadian-wanderlust.jpg"
                    />
                    <div class="overlay">
                      <div class="portfolio-item-meta">
                        <h5>Canadian Wanderlust</h5>
                        <p>My Travel Blog for my post-university travels</p>
                      </div>
                    </div>
                    <div class="link-icon">
                      <i class="fa fa-link"></i>
                    </div>
                  </a>
                </div>
    </div> */}

              <div class="columns portfolio-item">
                <div class="item-wrap">
                  <a
                    href="https://original-thai-food.herokuapp.com/index.html"
                    title="Original Thai Food"
                  >
                    <img
                      alt="Original Thai Food"
                      src="images/portfolio/original-thai-food.jpg"
                    />
                    <div class="overlay">
                      <div class="portfolio-item-meta">
                        <h5>Original Thai Food</h5>
                        <p>
                          Website I built for a restaurant I like in Thailand
                        </p>
                      </div>
                    </div>
                    <div class="link-icon">
                      <i class="fa fa-link"></i>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
      </div>
   </section>
    );
  }
}

export default Portfolio;

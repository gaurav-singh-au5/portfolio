import React, { Component } from 'react';

class Testimonials extends Component {
  render() {

    if(this.props.data){
      var testimonials = this.props.data.testimonials.map(function(testimonials){
        return  <li key={testimonials.user}>
            <blockquote>
               <p>{testimonials.text}</p>
               <cite>{testimonials.user}</cite>
            </blockquote>
         </li>
      })
    }

    return (
      <section id="testimonials">
      <div className="text-container">
         <div className="row">

            <div className="two columns header-col">
               <h1><span>Client Testimonials</span></h1>
            </div>

            <div className="ten columns flex-container">
                  <ul className="slides">
                  <li>
                  <blockquote>
                    <p>
                      I have had the opportunity to work with Gaurav on multiple
                      occasions which has always been a pleasure. He is driven
                      and motivated with a consistently positive attitude. Gaurav
                      excels at communicating with others and is always willing
                      to work hard until he solves the problem at hand.
                    </p>
                    <cite>Ajay Avashthi - Web Developer at AppColony</cite>
                  </blockquote>
                </li>
                  </ul>
               </div>
            </div>
         </div>
   </section>
    );
  }
}

export default Testimonials;

import React from "react";
import Kara from "../photo/kara.jpg";

function About() {
  return (
    <div>
      <div className="container-fluid" id="aboutme">
        <img
          src={Kara}
          height="250"
          className="m-2 rounded-circle responsive float-left"
          id="kara-img" alt="Portrait photo" />
        <p>
          I'm a front end developer based in Philadelphia. The intersection of code, design and art is an endless
          source of fascination for me. Previous to becoming a front end
          developer, I worked in commercial printing, the art world, and
          academia. I draw on all my previous experiences to make the web a more beautiful place. In learning more about coding, I hope to interact with the
          technology that surrounds me in a more meaningful way. 
        </p>

        <p>
        In February
          of 2021, I graduated from University of Pennsylvania LPS Coding
          Bootcamp certificate program. I'm obsessed with all things art and
          design and love playing with modular synthesizers, reading sci-fi
          novels, collecting houseplants, 35mm photography, listening to science
          podcasts, and adding to my ever growing stash of artist
          books/zines/graphic novels. I have a BFA in Film/Cinema Studies from
          Pratt Institute and an MFA in Digital & Interdisciplinary Practice
          from City University of New York.
        </p>
        <div className="row row-cols-2 row-cols-md-4 row-cols-lg-4 row-cols-xl-4 m-5">
          <div className="text-center mb-5">
            <i className="fas fa-envelope-open fa-lg text-secondary"></i> <br />
            <a href="karaiscoding@gmail.com">Email Me</a>
          </div>

          <div className="text-center mb-5">
            <i className="far fa-file-pdf fa-lg text-secondary"></i> <br />
            <a href="Resume_02-09-2021.pdf">Download Resume</a>
          </div>

          <div className="text-center mb-5">
            <i className="fas fa-code-branch fa-lg text-secondary"></i> <br />
            <a href="https://github.com/karajsch" target="_new">
              My GitHub
            </a>
          </div>

          <div className="text-center mb-5">
            <i className="fab fa-linkedin fa-lg text-secondary"></i> <br />
            <a href="https://www.linkedin.com/in/karajsch/" target="_new">
            Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

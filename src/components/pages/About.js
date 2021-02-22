import React from "react";

function About() {
  return (
    <div>
      <div className="container-fluid w-75">
        <h1 className="m-5">About</h1>
        <p>
          Hello! I'm a full stack developer based in Philadelphia. In February
          of 2021, I graduated from University of Pennsylvania LPS Coding
          Bootcamp certificate program. I'm obsessed with all things art and
          design and love playing with modular synthesizers, reading sci-fi
          novels, collecting houseplants, 35mm photography, listening to science
          podcasts, and adding to my ever growing stash of artist
          books/zines/graphic novels. I have a BFA in Film/Cinema Studies from
          Pratt Institute and an MFA in Digital & Interdisciplinary Practice
          from City University of New York.
        </p>

        <p>
          The intersection of code, design, and environmentalism is an endless
          source of fascination for me. Previous to becoming a front end
          developer, I worked in commercial printing, the art world, and
          academia. In learning more about coding, I hope to interact with the
          technology that surrounds me in a more meaningful way.
        </p>
        <div className="row row-cols-2 row-cols-md-4 row-cols-lg-4 row-cols-xl-4 m-5">
          <div className="text-center mb-5">
            <i className="fas fa-envelope-open"></i> <br />
            <a href="karaiscoding@gmail.com">Email Me</a>
          </div>

          <div className="text-center mb-5">
            <i class="far fa-file-pdf"></i> <br />
            <a href="Resume_02-09-2021.pdf">Resume</a>
          </div>

          <div className="text-center mb-5">
            <i class="fas fa-code-branch"></i> <br />
            <a href="https://github.com/karajsch" target="_new">
              GitHub
            </a>
          </div>

          <div className="text-center mb-5">
            <i class="fab fa-linkedin"></i> <br />
            <a href="https://www.linkedin.com/in/karajsch/" target="_new">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

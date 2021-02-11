import React from "react";

function About() {
  return (
    <div className="m-5">
      <h1>About</h1>
      <p>
        I'm a full stack developer at the University of Pennsylvania LPS coding
        boot camp. I'm obsessed with all things art and design and love playing
        with modular synthesizers, reading sci-fi novels, collecting
        houseplants, 35mm photography, listening to science podcasts, and adding
        to my ever growing stash of artist books/zines/graphic novels. I have a
        BFA in Film/Cinema Studies from Pratt Institute and an MFA in Digital &
        Interdisciplinary Practice from City University of New York. The
        intersection of code, design, and environmentalism is an endless source
        of fascination for me. Previous to becoming a front end developer, I
        worked in commercial printing, the art world, and academia. In learning
        more about coding, I hope to interact with the technology that surrounds
        me in a more meaningful way.
      </p>
      <div className="d-flex justify-content-around">
        <div className="text-center">
          <i className="fas fa-envelope-open"></i> <br />
          <a href="karaiscoding@gmail.com">Email Me</a>
        </div>

        
 <div className="text-center">
          <i class="far fa-file-pdf"></i> <br />
          <a href="res">Resume</a>
        </div>

        
 <div className="text-center">
          <i class="fas fa-code-branch"></i> <br />
          <a href="https://github.com/karajsch">GitHub</a>
        </div>

        
 <div className="text-center">
          <i class="fab fa-linkedin"></i> <br />
          <a href="https://www.linkedin.com/in/karajsch/">LinkedIn</a>
        </div>
      </div>
    </div>
  );
}

export default About;

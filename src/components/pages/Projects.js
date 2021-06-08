import React, { Component } from "react";
import projects from "./projects.json";
import Card from "../Card";
import Footer from "../Footer";

class Projects extends Component {
  state = {
    projects,
  };

  render() {
    return (
      <div>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-3 m-5">
          {this.state.projects
            ? this.state.projects.map((project, index) => {
                return (
                  <Card
                    title={project.title}
                    icon={project.icon}
                    url={project.url}
                    github={project.github}
                    image={project.image}
                    description={project.description}
                    tools={project.tools}
                  />
                );
              })
            : "No projects found"}
        </div>
        <Footer />
      </div>
    );
  }
}

export default Projects;

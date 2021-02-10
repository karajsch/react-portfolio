import React, { Component } from "react";
import projects from "./projects.json";
import Card from "../Card";

class Projects extends Component {
  state = {
    projects,
  };

  render() {
    return (
      <div>
        <h1>Projects.</h1>
        {this.state.projects
          ? this.state.projects.map((project, index) => {
              return (
                <Card
                  title={project.title}
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
    );
  }
}

export default Projects;

import React, { Component } from "react";
import Moment from "react-moment";

import Area from "./components/area";
import Personal from "./components/personal";
import personalItems from "./data/personal.json";
import companiesItems from "./data/companies.json";
import projectsItems from "./data/projects.json";
import educationItems from "./data/education.json";
import skillsItems from "./data/skills.json";

class App extends Component {
  render() {
    return (
      <div className="cv">
        <h1 className="cv-header">
          CV of {personalItems.name} by{" "}
          <Moment format="lll">{new Date()}</Moment>
        </h1>
        <Personal {...personalItems} />
        <Area name="companies" items={companiesItems} />
        <Area name="projects" items={projectsItems} />
        <Area name="education" items={educationItems} />
        <Area name="skills" items={skillsItems} />
      </div>
    );
  }
}

export default App;

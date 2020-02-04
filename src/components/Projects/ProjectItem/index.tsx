import React from "react";
// import styled from "styled-components";

export interface Project {
  id: string;
  name: string;
}

const Project = (project: Project) => <div>{project.name}</div>;

export default Project;

import React from "react";
import styled from "styled-components";

import { Project } from "../ProjectItem";

interface Props {
  render(project: Project): JSX.Element;
  data: Array<Project>;
}

const ProjectList: React.SFC<Props> = ({ render, data }) => (
  <Grid>{data.map(project => render(project))}</Grid>
);

export default ProjectList;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

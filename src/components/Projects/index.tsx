import React from "react";
import styled from "styled-components";

import ProjectList from "./ProjectList";
import ProjectItem from "./ProjectItem";
import Fab from "../Common/Elements/Fab/index";

const Projects = () => {
  return (
    <Layout>
      <Left>
        <div>Welcome</div>
        <div>Search</div>
        <ProjectList
          render={project => <ProjectItem key={project.id} {...project} />}
          data={[
            { id: "123", name: "Project 1" },
            { id: "124", name: "Project 2" }
          ]}
        />
      </Left>
      <Right>
        <div>Header</div>
        <div>Today</div>
        <div>Upcoming</div>
        <Fab/>
      </Right>
    </Layout>
  );
};

export default Projects;

const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100%;
  padding: 1em;
`;

const Left = styled.div`
  padding: 4em;
  display: grid;
  grid-gap: 4em;
  grid-template-rows: min-content;
`;
const Right = styled.div`
  background-color: ${({ theme }) => theme.font};
  color: ${({ theme }) => theme.base};
  border-radius: 20px;
  padding: 4em;
  display: grid;
  grid-gap: 4em;
  grid-template-rows: min-content;
`;

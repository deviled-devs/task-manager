import React, { useState } from "react";
import styled from "styled-components";

import ProjectList from "./ProjectList";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  const [selected, setSelected] = useState()
  console.log('selected:', selected)

  return (
    <Layout>
      <Left>
        <div>Welcome</div>
        <div>Search</div>
        <ProjectList
          render={project => <ProjectItem
            key={project.id}
            onChange={setSelected}
            isSelected={selected === project.id}
            {...project}
          />}
          data={[
            { id: "123", name: "Project 1" },
            { id: "124", name: "Project 2" },
            { id: "125", name: "Project 3" },
            { id: "126", name: "Project 4" },
            { id: "127", name: "Project 5" },
            { id: "128", name: "Project 6" },
            { id: "129", name: "Project 7" },
            { id: "130", name: "Project 8" },
          ]}
        />
      </Left>
      <Right>
        <div>Header</div>
        <div>Today</div>
        <div>Upcoming</div>
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

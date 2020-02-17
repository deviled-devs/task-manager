import React, { FC } from "react";
import styled from "styled-components";

import { Project } from "../ProjectItem";
import Typography from '../../Common/Elements/Typography'

interface Props {
  render(project: Project): JSX.Element;
  data: Array<Project>;
}

const ProjectList: FC<Props> = ({ render, data }) => (
  <div>
    <StyledHeader>
      <Typography variant="h4">
        Projects <StyledProjectsCount>({data.length})</StyledProjectsCount>
      </Typography>
    </StyledHeader>
    <Grid>{data.map(project => render(project))}</Grid>
  </div>
);

export default ProjectList;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 2.25rem;
  row-gap: 3.75rem;
  color: #c4c4c4;
`;
const StyledHeader = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 1em;
`
const StyledProjectsCount = styled.span`
  color: ${({ theme }) => theme.fontContrast};
`

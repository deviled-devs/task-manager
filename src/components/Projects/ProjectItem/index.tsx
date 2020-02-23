import React, { Dispatch } from "react";
import styled from "styled-components";

import Typography from '../../Common/Elements/Typography'

export interface Project {
  id: string;
  name?: string;
}
interface IProjectItem extends Project {
  onChange: Dispatch<any>
  isSelected?: boolean
  showMore?: Project[]
}

const cardInitials = (string: string) => string.split(/\s/).reduce((acc, word) => acc += word.slice(0, 1), '')

const Project = ({ id, name, onChange, isSelected, showMore }: IProjectItem) => {
  return (
    <ProjectItem>
      <HiddenInput
        name="projects"
        id={id}
        onChange={() => onChange!(id)}
        checked={isSelected}
      />
      <Label htmlFor={id}>
        <ProjectSquare>
          <Typography variant="h3">
            {showMore ? `${showMore.length}+` : name && cardInitials(name)}
          </Typography>
        </ProjectSquare>
        {!showMore && name}
      </Label>
    </ProjectItem>
  )
};

export default Project;

const ProjectItem = styled.div`
  position: relative;
`

const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ProjectSquare = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${({ theme }) => theme.font};
  width: 100px;
  height: 100px;
  background-color: ${({ theme }) => theme.paper};
  border-radius: 20px;
  margin-bottom: 1.25rem;
  text-transform: uppercase;
  font-weight: 700;
  transition: background-color .15s ease-out;
  &::before {
      position: absolute;
      content: '';
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: calc(100% + 15px);
      height: calc(100% + 15px);
      background: transparent;
      border: 2px solid ${({ theme }) => theme.paper} ;
      border-radius: inherit;
      transition: border-color .15s ease-out;
    }
`

const HiddenInput = styled.input.attrs({ type: 'radio' })`
  opacity: 0;
  position: absolute;
  &:focus + label ${ProjectSquare},
  &:checked + label ${ProjectSquare} {
    &::before {
      border-color: ${({ theme }) => theme.contrast}
    }
  }
  &:checked + label ${ProjectSquare} {
    background-color: ${({ theme }) => theme.contrast};
  }
`

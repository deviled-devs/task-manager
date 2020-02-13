import React, { ReactNode } from "react";
import styled from "styled-components";

interface Props {
  children: ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button = ({ children, onClick }: Props) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;

const StyledButton = styled.button`
  border: none;
  outline: none;
  border-radius: 20px;
  padding: 1em 2em;
  color: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: ${({ theme }) => theme.contrast};

  &:hover {
    opacity: 0.5;
  }
`;

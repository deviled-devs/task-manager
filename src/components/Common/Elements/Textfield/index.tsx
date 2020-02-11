import React, { Dispatch } from "react";
import styled from "styled-components";

interface Props {
  onChange: ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
  value?: string;
  icon?: any;
  placeholder?: string;
}

const Textfield = ({ onChange, value, placeholder }: Props) => {
  return (
    <Container>
      <Input value={value} onChange={onChange} placeholder={placeholder} />
    </Container>
  );
};

export default Textfield;

const Container = styled.div`
  background-color: ${p => p.theme.paper};
  width: fit-content;
  padding: 1em;
  border-radius: 20px;
`;

const Input = styled.input`
  background: none;
  border: none;
  outline: none;
  color: ${({ theme }) => theme.font};

  ::placeholder {
    color: ${({ theme }) => theme.fontContrast};
  }
`;

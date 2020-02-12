import styled from "styled-components";

const Canvas = styled.div`
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;

  background-color: ${({ theme }) => theme.base};
  color: ${({ theme }) => theme.font};

  transition: background-color 0.3s cubic-bezier(0.25, 0.75, 0.5, 1.25);
`;

export default Canvas;

import styled from "styled-components";

const Canvas = styled.div`
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;

  background-color: ${({ theme }) => theme.base};
  color: ${({ theme }) => theme.font};
`;

export default Canvas;

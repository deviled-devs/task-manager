import styled from "styled-components";

const Paper = styled.div`
  background-color: ${props => props.theme.paper};
  width: fit-content;
  border-radius: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  transition: background-color 0.3s cubic-bezier(0.25, 0.75, 0.5, 1.25);
`;

export default Paper;

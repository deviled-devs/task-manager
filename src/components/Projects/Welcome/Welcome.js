import React from "react";
import styled from "styled-components";
import Typography from '../../Common/Elements/Typography/index';

const Welcome = () => {
  return (
    <Layout>
        <h2>Hi Samantha</h2>
        <StyledTypography>Welcome back to the workspace, we missed you!</StyledTypography> 
    </Layout>
  )
}

const Layout = styled.div`
  display: grid;
  grid-gap: 1em;
`;

const StyledTypography = styled(Typography)`
    color: #8A8C98;
`;


export default Welcome;
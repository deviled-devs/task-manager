import React from "react";
import ElementPaper from "../Common/Elements/Paper";
import styled from "styled-components";

const Settings = () => (
  <Layout>
    <Paper></Paper>
  </Layout>
);

export default Settings;

const Layout = styled.div`
  padding: 2em;
`;

const Paper = styled(ElementPaper)`
  padding: 8em;
  height: 100%;
  width: 100%;
`;

import React, {useState} from "react";
import styled from "styled-components";



const Layout = styled.div`
  display: grid;
  grid-gap: 1em;
`;

const P = styled.div`
    color: C4C4C4;
`;


const Welcome = () => {
    const [person, setPerson] = useState({name: 'Samantha' });


    return (
      <Layout>
          <div>
          <h2>Hi {person.name}</h2>
          <P>Welcome back to the workspace, we missed you!</P>
          </div>
      </Layout>
    )
}

export default Welcome;
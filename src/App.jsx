import styled from "styled-components";

import GlobalStyles from "./styles/GlobalStyles";

import Heading from "./ui/Heading";
import Button from "./ui/Button";
import Input from "./ui/Input";

const StyledApp = styled.div`
  background-color: limegreen;
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Heading as="h1">Modern Stay</Heading>

        <Heading as="h2">Check in and out</Heading>
        <Button onClick={() => alert("Checked In")}>Check In</Button>
        <Button onClick={() => alert("Checked Out")}>Check Out</Button>

        <Heading as="h3">Form</Heading>
        <Input type="number" placeholder="Number of guests" />
      </StyledApp>
    </>
  );
}

export default App;

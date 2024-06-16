import styled from "styled-components";

import GlobalStyles from "./styles/GlobalStyles";

import Heading from "./ui/Heading";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Row from "./ui/Row";

const StyledApp = styled.div`
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Row>
          <Row type="horizontal">
            <Heading as="h1">Modern Stay</Heading>
            <div>
              <Heading as="h2">Check in and out</Heading>
              <Button onClick={() => alert("Checked In")}>Check In</Button>
              <Button
                variation="secondary"
                size="small"
                onClick={() => alert("Checked Out")}
              >
                Check Out
              </Button>
            </div>
          </Row>

          <Row>
            <Heading as="h3">Form</Heading>
            <form>
              <Input type="number" placeholder="Number of guests" />
              <Input type="number" placeholder="Number of guests" />
            </form>
          </Row>
        </Row>
      </StyledApp>
    </>
  );
}

export default App;

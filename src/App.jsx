import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Input from "./ui/Input";
import Heading from "./ui/Heading";
import Row from "./ui/Row";
import Button from "./ui/Button";

const StyledApp = styled.main`
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Row>
          <Row type="horizontal">
            <Heading as={"h1"}>The Wild Oasis</Heading>

            <div>
              <Heading as={"h2"}>Check in and out</Heading>
              <Button>random 1</Button>
              <Button variation="secondary" size="small">
                random 2
              </Button>
            </div>
          </Row>

          <Row>
            <Heading as={"h3"}>Form</Heading>
            <form>
              <Input />
              <Input />
            </form>
          </Row>
        </Row>
      </StyledApp>
    </>
  );
}

export default App;

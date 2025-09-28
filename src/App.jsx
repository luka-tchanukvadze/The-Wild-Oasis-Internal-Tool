import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Input from "./ui/Input";
import Heading from "./ui/Heading";
import Row from "./ui/Row";

const StyledApp = styled.main`
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Row type="vertical">
          <Row type="horizontal">
            <Heading as={"h1"}>The Wild Oasis</Heading>

            <div>
              <Heading as={"h2"}>Check in and out</Heading>
              <button>random 1</button>
              <button>random 2</button>
            </div>
          </Row>

          <Row type="vertical">
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

import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Input from "./ui/Input";

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  background-color: var(--color-brand-50);
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <H1>The Wild Oasis</H1>
      <Input />
    </>
  );
}

export default App;
//hey

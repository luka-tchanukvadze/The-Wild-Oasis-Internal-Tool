import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Input from "./ui/Input";
import Heading from "./ui/Heading";

function App() {
  return (
    <>
      <GlobalStyles />
      <Heading as={"h1"}>The Wild Oasis</Heading>
      <Heading as={"h2"}>Check in and out</Heading>
      <Heading as={"h3"}>Form</Heading>
      <Input />
    </>
  );
}

export default App;

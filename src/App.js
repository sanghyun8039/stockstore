import styled from "styled-components";
import Body from "./Components/Body";
import Header from "./Components/Header";
function App() {
  return (
    <Wrapper>
      <Header />
      <Body />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  @media screen and (min-width: 1023px) {
    width: 56% !important;
    margin-left: 22% !important;
    margin-right: 22% !important;
    background-color: grey !important;
  }
`;

export default App;

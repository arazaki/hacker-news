import Header from "components/Header";
import StyledProvider from "libs/styled-components";
import HomeScreen from "modules/Home/screens/Main";
import styled from "styled-components";

const Layout = styled.div`
  overflow-y: auto;
  padding: 2rem 3rem;
`;

function App() {
  return (
    <div className="App">
      <StyledProvider>
        <Header />
        <Layout>
          <HomeScreen />
        </Layout>
      </StyledProvider>
    </div>
  );
}

export default App;

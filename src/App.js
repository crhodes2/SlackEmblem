import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Chat from './components/Chat'
import Login from './components/Login'
import Header from './components/Header'
import styled from 'styled-components'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className="App">
      <Router>
        <Container>
          <Header />
          <Main>
            <Sidebar>

            </Sidebar>
            <Switch>
              <Route path="/room">
              {/* <div className="app_body"> */}
              <Chat />
              {/* </div> */}
              </Route>
              <Route path="/">
                <Login />
              </Route>
            </Switch>         
          </Main>
        </Container>
      </Router>
    </div>
  );
}

export default App;

const Container = styled.div `
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 38px auto;
`

const Main = styled.div `
  display: grid;
  grid-template-columns: 260px auto;
`


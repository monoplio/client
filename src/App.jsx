import { JoinPage, GamePage } from "./pages"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ActionCableProvider } from 'react-actioncable-provider';
import './App.css';

function App() {
  return (
    <div className="App">
      <ActionCableProvider url={"ws://localhost:3000/cable"}>
        <Router>
          <Switch>
            <Route path="/game/:id">
              <GamePage/>
            </Route>
            <Route exact path="/">
              <JoinPage/>
            </Route>
          </Switch>
        </Router>
      </ActionCableProvider>
    </div>
  );
}

export default App;

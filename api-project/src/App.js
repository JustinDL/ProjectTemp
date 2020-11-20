
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link,} from 'react-router-dom';

import Header from './components/header'; 
import Users from './components/users';

function App() {
  return (
    <Router>
      <div className="App">
      <Header />
      <main>
        <Switch>
          
          <Route path="/Users">
            <Users />
          </Route>

          <Route path="/">
            <div>Home</div>
          </Route>

        </Switch>
      </main>
    </div>
    </Router>
  );
}

export default App;

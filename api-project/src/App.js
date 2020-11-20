import logo from './logo.svg';
import './App.css';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link,} from 'react-router-dom';

import Header from './components/header'; 


function App() {
  return (
    <Router>
      <div className="App">
      <Header />
      <main>
        <Switch>
          
          <Route path="/Users">
            <div>Users</div>
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

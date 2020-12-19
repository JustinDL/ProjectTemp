
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link,} from 'react-router-dom';

import Header from './components/header'; 
import Users from './components/users';

// firebase stuff
import withFirebaseAuth from 'react-with-firebase-auth'
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';

const firebaseApp = firebase.initializeApp(firebaseConfig);

const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

const {
  user,
  signOut,
  signInWithGoogle,
} = this.props;

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

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);

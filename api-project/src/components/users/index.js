import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import User from '../user';

const Users = () => {
    const match = useRouteMatch();
    console.log(match);
    return(
        <div>
            <h2>Users</h2>

            <Switch>
                {/*pass parameters.
                 takes a value passed after match.path creates a parameter called userID so you can go to desired user specifically*/}
                <Route path={`${match.path}/:userId`}>
                    <User />
                </Route>
                <Route path={match.path}>
                    <h3>Select a user</h3>
                    <ul>
                        <li>
                            <Link to={`${match.url}/1`}>
                                User 1
                            </Link>
                        </li>
                        <li>
                            <Link to={`${match.url}/2`}>
                                User 2
                            </Link>
                        </li>
                        <li>
                            <Link to={`${match.url}/3`}>
                                User 3
                            </Link>
                        </li>
                    </ul>
                </Route>
            </Switch>
        </div>



    );
}

export default Users;
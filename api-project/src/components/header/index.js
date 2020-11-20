import { Link } from 'react-router-dom';


// all this needs to do is return valid JSX code
// can have other logic
const Header = () => {
    return(
        <header className="App-header">
            <h1>COMP3033 Project</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/Users">Users</Link>
                    </li>

                </ul>
            </nav>
        </header>



    );
}

export default Header; 
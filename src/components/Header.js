import classes from './Header.module.css';
import { useSelector } from 'react-redux';

const Header = (props) => {

  const isLogged = useSelector(state => state.auth.isLoggedIn);

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isLogged  &&  <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button type="button" onClick= {props.onLogout}>Logout</button>
          </li>
        </ul>
      </nav>
      }
    </header>
  );
};

export default Header;

import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';
import { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux'; 
import {authActions} from './store/authSlice';

function App() {

  const isLogged = useSelector(state => state.auth.isLoggedIn);
  const authDispatch = useDispatch();

  const loginHandler = () => {
    authDispatch(authActions.login());
  }

  const logoutHandler = () => {
    authDispatch(authActions.logout());
  }

  return (
    <Fragment>
     <Header onLogout = {logoutHandler}></Header>
      {!isLogged && <Auth onLogin = {loginHandler}></Auth> }
      {isLogged && <UserProfile></UserProfile>}
      {isLogged && <Counter /> }
    </Fragment>
  );
}

export default App;

import logoMestoWhite from '../images/logo-mesto-white.svg';
import { Link, useLocation } from 'react-router-dom';

export default function Header({loggedIn, email, onSignOut}) {

  const location = useLocation();

  return (
    <header className="header">
      <img className="header__logo" src={logoMestoWhite} alt="Логотип Mesto Russia"/>
      <div className="header__nav-container">
        <p className={loggedIn ? "header__caption header__caption_status-logged" : "header__caption"}>{email}</p>
        <Link to={location.pathname === "/signin" ? "/signup" : "/signin"} className={loggedIn ? "header__nav-link header__nav-link_logged" : "header__nav-link"}>
          {location.pathname === "/signin" ? "Регистрация" : "Войти"}
        </Link>
        <Link to="/signin" className={loggedIn ? "header__signout-link header__signout-link_logged" : "header__signout-link"} onClick={onSignOut}>Выйти</Link>
      </div>
    </header>
  )
};



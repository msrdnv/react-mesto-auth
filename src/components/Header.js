import logoMestoWhite from '../images/logo-mesto-white.svg';

export default function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logoMestoWhite} alt="Логотип Mesto Russia"/>
    </header>
  )
};



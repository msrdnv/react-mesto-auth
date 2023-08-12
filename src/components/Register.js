import React from 'react';
import { Link } from "react-router-dom"

export default function Register({onRegister}) {

  const [password, setPassword] = React.useState('');
  const [email, setEmail] = React.useState('');

  function handlePasswordChange (evt) {
    setPassword(evt.target.value);
  }

  function handleEmailChange (evt) {
    setEmail(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onRegister({
      password: password,
      email: email,
    }, evt)
  }

  return (
    <div className="auth-page">
      <div className="auth-page__container">
        <h2 className="auth-page__title">Регистрация</h2>
        <form onSubmit={handleSubmit} className="auth-page__form">
          <input id="email-signup-input" className="auth-page__input" type="email" value={email} onChange={handleEmailChange} name="email" placeholder="Email" required/>
          <input id="password-signup-input" className="auth-page__input" type="password" value={password} onChange={handlePasswordChange} name="password" placeholder="Пароль" required/>
          <button className="auth-page__submit-button" type="submit">Зарегистрироваться</button>
        </form>
        <p className="auth-page__caption">Уже зарегистрированы? <Link to="/signin" className="auth-page__caption-link">Войти</Link></p>
      </div>
    </div>
  )
}

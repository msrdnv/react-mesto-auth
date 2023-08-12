import React from 'react';

export default function Login({onLogin}) {

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
    onLogin({
      password: password,
      email: email,
    }, evt)
  }

  return (
    <div className="auth-page">
      <div className="auth-page__container">
        <h2 className="auth-page__title">Вход</h2>
        <form onSubmit={handleSubmit} className="auth-page__form">
          <input id="email-login-input" className="auth-page__input" type="email" value={email} onChange={handleEmailChange} name="email" placeholder="Email" required/>
          <input id="password-login-input" className="auth-page__input" type="password" value={password} onChange={handlePasswordChange} name="password" placeholder="Пароль" required/>
          <button className="auth-page__submit-button" type="submit">Войти</button>
        </form>
      </div>
    </div>
  )
}

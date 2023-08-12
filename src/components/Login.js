export default function Login({onTrue}) {
  return (
    <div className="auth-page">
      <div className="auth-page__container auth-page__container_place-login">
        <h2 className="auth-page__title">Вход</h2>
        <form className="auth-page__form">
          <input id="email-login-input" className="auth-page__input" type="email" name="email" placeholder="Email" required/>
          <input id="password-login-input" className="auth-page__input" type="password" name="password" placeholder="Пароль" required/>
        </form>
        <button className="auth-page__submit-button" type="submit" onClick={onTrue}>Войти</button>
      </div>
    </div>
  )
}

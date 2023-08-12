import { Link } from "react-router-dom"

export default function Register() {
  return (
    <div className="auth-page">
      <div className="auth-page__container auth-page__container_place-signup">
        <h2 className="auth-page__title">Регистрация</h2>
        <form className="auth-page__form">
          <input id="email-signup-input" className="auth-page__input" type="email" name="email" placeholder="Email" required/>
          <input id="password-signup-input" className="auth-page__input" type="password" name="password" placeholder="Пароль" required/>
        </form>
        <button className="auth-page__submit-button" type="submit">Зарегистрироваться</button>
        <p className="auth-page__caption">Уже зарегистрированы? <Link to="/signin" className="auth-page__caption-link">Войти</Link></p>
      </div>
    </div>
  )
}

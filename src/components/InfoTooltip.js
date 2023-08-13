import imagePositive from '../images/info-image-positive.svg';
import imageNegative from '../images/info-image-negative.svg';

export default function InfoTooltip ({isSuccessful, isOpen, onClose}) {
  return (
    <div className={isOpen ? `popup popup_opened` : "popup"}>
      <div className="popup__container">
        <button className="popup__close-icon" type="button" onClick={onClose}></button>
        <img className="popup__info-image" src={isSuccessful ? imagePositive : imageNegative} alt="Изображение статуса регистрации"/>
        <h2 className="popup__info-text">{isSuccessful ? "Вы успешно зарегистрировались!" : "Что-то пошло не так! Попробуйте ещё раз."}</h2>
      </div>
    </div>
  )
}

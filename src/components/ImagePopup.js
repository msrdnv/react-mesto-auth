export default function ImagePopup({card, onClose}) {
  return (
    <div className={card.isOpen ? "popup popup_type_dark image-popup popup_opened" : "popup popup_type_dark image-popup"}>
      <div className="popup__image-container">
        <img className="popup__full-image" src={card.link} alt={`Увеличенная фотография ${card.name}`}/>
        <button className="popup__close-icon" type="button" onClick={onClose}></button>
        <p className="popup__image-caption">{card.name}</p>
      </div>
    </div>
  )
}



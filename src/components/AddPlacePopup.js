import React from 'react';
import PopupWithForm from './PopupWithForm.js'

export default function AddPlacePopup ({onAddPlace, isOpen, onClose}) {

  const nameRef = React.useRef();
  const linkRef = React.useRef();

  function handleSubmit(evt) {
    evt.preventDefault();
    onAddPlace({
      name: nameRef.current.value,
      link: linkRef.current.value,
    }, evt);
  }

  return (
    <PopupWithForm onClose={onClose} isOpen={isOpen} onSubmit={handleSubmit} title="Новое место" name="card" button="Создать">
      <input ref={nameRef} id="card-name-input" className="popup__input" type="text" name="name" minLength="2" maxLength="30" placeholder="Название" required/>
      <span className="card-name-input-error popup__error popup__error_visible"></span>
      <input ref={linkRef} id="link-input" className="popup__input" type="url" name="link" placeholder="Ссылка на картинку" required/>
      <span className="link-input-error popup__error popup__error_visible"></span>
    </PopupWithForm>
  )
}

import React from 'react';
import PopupWithForm from './PopupWithForm.js'

export default function EditAvatarPopup({onUpdateAvatar, isOpen, onClose}) {

  const avatarRef = React.useRef();

  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  return(
    <PopupWithForm onClose={onClose} isOpen={isOpen} onSubmit={handleSubmit} title="Обновить аватар" name="avatar" button="Сохранить">
      <input ref={avatarRef} id="avatar-link-input" className="popup__input" type="url" name="avatar" placeholder="Ссылка на новый аватар" required/>
      <span className="avatar-link-input-error popup__error popup__error_visible"></span>
    </PopupWithForm>
  )
}

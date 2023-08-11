import React from 'react';
import PopupWithForm from './PopupWithForm.js'
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

export default function EditProfilePopup ({onUpdateUser, isOpen, onClose}) {

  const [name, setName] = React.useState('Жак-Ив Кусто');
  const [about, setAbout] = React.useState('Исследователь океана');

  function handleNameChange (evt) {
    setName(evt.target.value);
  }

  function handleAboutChange (evt) {
    setAbout(evt.target.value);
  }

  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setName(currentUser.name);
    setAbout(currentUser.about);
  }, [currentUser, isOpen]);

  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateUser({
      name,
      about,
    });
  }

  return (
    <PopupWithForm onClose={onClose} isOpen={isOpen} onSubmit={handleSubmit} title="Редактировать профиль" name="profile" button="Сохранить">
      <input id="name-input" className="popup__input" type="text" name="name" value={name ?? 'Жак-Ив Кусто'} onChange={handleNameChange} minLength="2" maxLength="40" placeholder="Имя" required/>
      <span className="name-input-error popup__error popup__error_visible"></span>
      <input id="about-input" className="popup__input" type="text" name="about" value={about ?? 'Исследователь океана'} onChange={handleAboutChange} minLength="2" maxLength="200" placeholder="О себе" required/>
      <span className="about-input-error popup__error popup__error_visible"></span>
    </PopupWithForm>
  )
}

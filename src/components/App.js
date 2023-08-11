import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import ImagePopup from './ImagePopup.js';
import PopupWithForm from './PopupWithForm.js'
import EditAvatarPopup from './EditAvatarPopup.js';
import EditProfilePopup from './EditProfilePopup.js';
import AddPlacePopup from './AddPlacePopup.js';
import { api } from '../utils/api.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

export default function App() {

  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({src: "./", isOpen: false});

  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserData(), api.getCards()])
    .then(([userData, cards]) => {
      setCurrentUser(userData)
      setCards(cards)
    })
    .catch(console.error);
  }, []);

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setSelectedCard({src: "./", isOpen: false});
  }

  function handleCardClick({link, name}) {
    setSelectedCard({link, name, isOpen: true});
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    api.changeLikeCardStatus(card._id, isLiked)
    .then((newCard) => setCards((state) => state.map((c) => c._id === card._id ? newCard : c)))
    .catch(console.error)
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id)
    .then(() => setCards((state) => state.filter((c) => c._id !== card._id)))
    .catch(console.error)
  }

  function handleUpdateUser({name, about}) {
    api.editUserData({name, about})
    .then((userData) => {
      setCurrentUser(userData);
      closeAllPopups();
    })
    .catch(console.error)
  }

  function handleUpdateAvatar({avatar}) {
    api.editUserAvatar({avatar})
    .then((userData) => {
      setCurrentUser(userData);
      closeAllPopups();
    })
    .catch(console.error)
  }

  function handleAddPlaceSubmit({name, link}, evt) {
    api.postNewCard({name, link})
    .then((newCard) => {
      setCards([newCard, ...cards]);
      closeAllPopups();
      evt.target.reset();
    })
    .catch(console.error)
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
      <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar}/>
      <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser}/>
      <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlaceSubmit}/>
      <PopupWithForm title="Вы уверены?" name="confirmation" button="Да"/>
      <Header/>
      <Main cards={cards} onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick}
      onCardClick={handleCardClick} onCardLike={handleCardLike} onCardDelete={handleCardDelete}/>
      <Footer/>
    </CurrentUserContext.Provider>
  );
}


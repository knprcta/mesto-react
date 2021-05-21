import React from "react";
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import EditProfilePopup from './EditProfilePopup';
import ImagePopup from './ImagePopup';
import api from '../utils/api';
import CurrentUserContext from '../contexts/CurrentUserContext';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [currentUser, setCurrentUser] = React.useState({});

  React.useEffect(() => {
    api.getUserInfo()
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
    setIsImagePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsImagePopupOpen(false);
    setSelectedCard({});
  }

  function handleUpdateUser(info) {
    api.setUserInfo(info)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch(err => {
        console.log(err);
      })
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
       <div className="page__content">

          <Header />
          <Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onCardClick={handleCardClick} />
          <Footer />
          <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
          <PopupWithForm name="place" title="Новое место" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} button="Создать">
            <section className="popup__field">
              <input className="popup__input popup__input_title" type="text" name="name" id="cardName-input" placeholder="Название" required minLength="2" maxLength="30" />
              <span className="popup__input-error" id="cardName-input-error"></span>
            </section>
            <section className="popup__field">
              <input className="popup__input popup__input_link" type="url" name="link" id="cardLink-input" placeholder="Ссылка на картинку" required />
              <span className="popup__input-error" id="cardLink-input-error"></span>
            </section>
          </PopupWithForm>
          <PopupWithForm name="avatar" title="Обновить аватар" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} button="Обновить">
            <section className="popup__field">
              <input className="popup__input popup__input_avatar" type="url" name="avatar" id="userAvatar-input" placeholder="Ссылка на картинку" required />
              <span className="popup__input-error" id="userAvatar-input-error"></span>
            </section>
          </PopupWithForm>
          <PopupWithForm name="confirm" title="Вы уверены?" button="Да" />
          <ImagePopup isOpen={isImagePopupOpen} onClose={closeAllPopups} card={selectedCard} />

        </div>
      </div >
    </CurrentUserContext.Provider>
  );
}

export default App;

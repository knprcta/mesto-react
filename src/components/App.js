import React from "react";
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isImagePopupOpen, setImagePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
    setImagePopupOpen(true);
  }

  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setImagePopupOpen(false);
    setSelectedCard({});
  }

  return (
    <div className="page">
      <div className="page__content">

        <Header />
        <Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onCardClick={handleCardClick} />
        <Footer />
        <PopupWithForm name="profile" title="Редактировать профиль" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} button="Сохранить">
          <section className="popup__field">
            <input className="popup__input popup__input_name" type="text" name="name" id="userName-input" placeholder="Имя" required minLength="2" maxLength="40" />
            <span className="popup__input-error" id="userName-input-error"></span>
          </section>
          <section className="popup__field">
            <input className="popup__input popup__input_about" type="text" name="about" id="userAbout-input" placeholder="О себе" required minLength="2" maxLength="200" />
            <span className="popup__input-error" id="userAbout-input-error"></span>
          </section>
        </PopupWithForm>
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
  );
}

export default App;

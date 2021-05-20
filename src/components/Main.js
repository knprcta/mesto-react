import React from 'react';
import api from '../utils/api';
import Card from './Card';
import CurrentUserContext from '../contexts/CurrentUserContext';

function Main(props) {
  const [cards, setCards] = React.useState([]);
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    api.getInitialCards()
      .then(res => {
        setCards(res);
      })
      .catch(err => {
        console.log(err);
      })
  }, [])

  return (
    <main>
      <section className="profile">
        <div className="profile__main">
          <div className="profile__avatar">
            <div className="profile__avatar-img" style={{ backgroundImage: `url(${currentUser.avatar})` }}></div>
            <div className="profile__edit-avatar" onClick={props.onEditAvatar}></div>
          </div>
          <div className="profile__info">
            <div className="profile__name-container">
              <h1 className="profile__name">{currentUser.name}</h1>
              <button className="profile__edit-button" type="button" onClick={props.onEditProfile}></button>
            </div>
            <p className="profile__about">{currentUser.about}</p>
          </div>
        </div>
        <button className="profile__add-button" type="button" onClick={props.onAddPlace}></button>
      </section>

      <section className="elements">
        {cards.map(item => (
          <Card key={item._id} card={item} onCardClick={props.onCardClick} />
        ))}
      </section>
    </main>
  )
}

export default Main;
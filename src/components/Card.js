function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <article className="element">
      <div className="element__image" style={{ backgroundImage: `url(${props.card.link})` }} onClick={handleClick}></div>
      <div className="element__bottom">
        <h2 className="element__caption">{props.card.name}</h2>
        <div className="element__like-container">
          <button className="element__like-button" type="button"></button>
          <span className="element__likes-count">{props.card.likes.length}</span>
        </div>
      </div>
      <button className="element__delete-button" type="button"></button>
    </article>
  )
}

export default Card;
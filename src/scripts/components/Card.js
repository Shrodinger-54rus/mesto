export default class Card {
  constructor(data, templateSelector, handleCardClick) {
    this._data = data
    this._templateSelector = templateSelector
    this._handleCardClick = handleCardClick
  }

  _getCardElement() {
    return document
      .querySelector(this._templateSelector)
      .content.querySelector('.photo-grid__item')
      .cloneNode(true)
  }

  _setEventListener() {
    this._likeButton.addEventListener('click', () => {
      this._likeButton.classList.toggle('photo-grid__like_active')
    })

    this._deleteButton.addEventListener('click', () => {
      this._cardElement.remove()
    })

    this._image.addEventListener('click', () => {
      this._handleCardClick(this._cardData)
    })
  }

  createCard() {
    this._cardElement = this._getCardElement()

    this._deleteButton = this._cardElement.querySelector(
      '.photo-grid__delete-button'
    )
    this._likeButton = this._cardElement.querySelector('.photo-grid__like')
    this._image = this._cardElement.querySelector('.photo-grid__image')
    this._title = this._cardElement.querySelector('.photo-grid__title')

    this._image.src = this._data.link
    this._image.alt = this._data.name
    this._title.textContent = this._data.name

    this._setEventListener()

    return this._cardElement
  }

  _openImage() {
    this._handleCardClick(this._data)
  }
}

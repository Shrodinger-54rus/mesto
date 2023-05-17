export default class Card {
  constructor(cardData, templateSelector, showImage) {
    this._cardData = cardData;
    this._name = cardData.name;
    this._link = cardData.link;
    this._templateSelector = templateSelector;
    this._showImage = showImage;
  };

  _getCardElement() {
    return document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.photo-grid__item')
      .cloneNode(true);
  };

  _setEventListener() {
    this._likeButton.addEventListener('click', () => {
      this._likeButton.classList.toggle('photo-grid__like_active');
      });

    this._deleteButton.addEventListener('click', () => {
      this._cardElement.remove();
      }); 

    this._image.addEventListener('click', () => {
      this._showImage(this._cardData);
      });
  };

  createCard() {
    this._cardElement = this._getCardElement();

    this._deleteButton = this._cardElement.querySelector('.photo-grid__delete-button');
    this._likeButton = this._cardElement.querySelector('.photo-grid__like');
    this._image = this._cardElement.querySelector('.photo-grid__image');
    this._title = this._cardElement.querySelector('.photo-grid__title');

    this._image.src = this._link;
    this._image.alt = this._name;
    this._title.textContent = this._name;

    this._setEventListener();

    return this._cardElement;
  };
};

import Popup from './Popup.js'

export default class PopupConfirm extends Popup {
  constructor(popupSelector, formSubmit) {
    super(popupSelector)
    this._formSubmit = formSubmit
    this._form = this._popup.querySelector('.popup__form')
    this._submitButton = this._form.querySelector('.submit__button')
    this._loadingTextButton = this._submitButton.textContent
  }

  setEventListener() {
    super.setEventListener()
    this._form.addEventListener('submit', (e) => {
      e.preventDefault()
      this._submitButton.textContent = `${this._submitButton.textContent}...`
      this._formSubmit({ card: this._item, cardId: this._cardId })
    })
  }

  setTextLoading() {
    this._submitButton.textContent = this._loadingTextButton
  }

  open = ({ card, cardId }) => {
    super.open()
    this._item = card
    this._cardId = cardId
  }
}

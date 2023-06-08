import Popup from './Popup.js'

export default class PopupWithForm extends Popup {
  constructor(popupSelector, formSubmit) {
    super(popupSelector)
    this._formSubmit = formSubmit
    this._form = this._popup.querySelector('.popup__form')
    this._inputs = Array.from(this._form.querySelectorAll('.popup__input'))
    this._submitButton = this._form.querySelector('.submit__button')
    this._loadingTextButton = this._submitButton.textContent
  }

  _getInputValues() {
    const inputValues = {}
    this._inputs.forEach((input) => {
      inputValues[input.name] = input.value
    })
    return inputValues
  }

  setEventListener() {
    super.setEventListener()
    this._form.addEventListener('submit', (e) => {
      e.preventDefault()
      this._submitButton.textContent = `${this._submitButton.textContent}...`
      this._formSubmit(this._getInputValues())
    })
  }

  setTextLoading() {
    this._submitButton.textContent = this._loadingTextButton
  }

  close() {
    super.close()
    this._form.reset()
  }
}

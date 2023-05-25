import Popup from './Popup.js'

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector)
  }

  open(image) {
    this._zoomImage = this._popup.querySelector('.image-show__item')
    this._imageCaption = this._popup.querySelector('.image-show__caption')

    this._zoomImage.src = image.link
    this._zoomImage.alt = image.name
    this._imageCaption.textContent = image.name
    super.open()
  }
}

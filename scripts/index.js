import { initialCards } from './array.js'
import Card from './Card.js'
import FormValidator from './FormValidator.js'
import Section from './Section.js'
import PopupWithForm from './PopupWithForm.js'
import PopupWithImage from './PopupWithImage.js'
import UserInfo from './UserInfo.js'

const container = document.querySelector('.page')
const inputName = container.querySelector('.popup__input_type_name')
const inputAboutMe = container.querySelector('.popup__input_type_about-me')
const profileName = container.querySelector('.profile__title')
const profileJob = container.querySelector('.profile__subtitle')
const editProfilePopup = container.querySelector('.popup_edit-profile')
const editProfileButton = container.querySelector('.profile__edit')
const addImagePopup = container.querySelector('.popup_add-image')
const addImageButton = container.querySelector('.profile__add')
const imagePopup = document.querySelector('.popup_image-show')
const editProfileForm = container.querySelector(
  '.popup__form_type_edit-profile'
)
const addImageForm = container.querySelector('.popup__form_type_new-image')
const templateSelector = '.photo-template'
const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible',
}

const openImage = new PopupWithImage(imagePopup)
openImage.setEventListener()

const userInfo = new UserInfo(profileName, profileJob)

const popupUserInfo = new PopupWithForm(editProfilePopup, (inputValues) => {
  userInfo.setUserInfo(inputValues)
})

popupUserInfo.setEventListener()

const popupAddImage = new PopupWithForm(addImagePopup, (inputValues) => {
  renderCardElement({
    name: inputValues.name,
    link: inputValues.link,
  })
  popupAddImage.close()
})

popupAddImage.setEventListener()

editProfileButton.addEventListener('click', () => {
  popupUserInfo.open()
  inputName.value = userInfo.getUserInfo().name
  inputAboutMe.value = userInfo.getUserInfo().aboutMe
})

addImageButton.addEventListener('click', () => {
  popupAddImage.open()
  cardValidator.disableButton()
})

function createNewCard(cardData) {
  const card = new Card(cardData, templateSelector, () => {
    openImage.open(cardData)
  })
  const cardElement = card.createCard()
  return cardElement
}

const cardList = new Section(
  {
    items: initialCards,
    renderer: renderCardElement,
  },
  '.photo-grid'
)

cardList.renderItems()

function renderCardElement(cardData) {
  const cardElement = createNewCard(cardData)
  cardList.addItem(cardElement)
}

const profileValidator = new FormValidator(config, editProfileForm)
const cardValidator = new FormValidator(config, addImageForm)

profileValidator.enableValidation()
cardValidator.enableValidation()

import { initialCards } from './utils/cardsData.js'
import Card from './components/Card.js'
import FormValidator from './components/FormValidator.js'
import Section from './components/Section.js'
import PopupWithForm from './components/PopupWithForm.js'
import PopupWithImage from './components/PopupWithImage.js'
import UserInfo from './components/UserInfo.js'
import {
  inputName,
  inputAboutMe,
  profileName,
  profileJob,
  editProfilePopup,
  editProfileButton,
  addImagePopup,
  addImageButton,
  imagePopup,
  editProfileForm,
  addImageForm,
  templateSelector,
  config,
} from './utils/constants.js'

const cardList = new Section(
  {
    items: initialCards,
    renderer: renderCardElement,
  },
  '.photo-grid'
)

const popupAddImage = new PopupWithForm(addImagePopup, (inputValues) => {
  renderCardElement({
    name: inputValues.name,
    link: inputValues.link,
  })
  popupAddImage.close()
})

const openImage = new PopupWithImage(imagePopup)

const popupUserInfo = new PopupWithForm(editProfilePopup, (inputValues) => {
  userInfo.setUserInfo(inputValues)
})

const userInfo = new UserInfo(profileName, profileJob)

const profileValidator = new FormValidator(config, editProfileForm)

const cardValidator = new FormValidator(config, addImageForm)

function createNewCard(cardData) {
  const card = new Card(cardData, templateSelector, () => {
    openImage.open(cardData)
  })
  const cardElement = card.createCard()
  return cardElement
}

function renderCardElement(cardData) {
  const cardElement = createNewCard(cardData)
  cardList.addItem(cardElement)
}

editProfileButton.addEventListener('click', () => {
  popupUserInfo.open()
  inputName.value = userInfo.getUserInfo().name
  inputAboutMe.value = userInfo.getUserInfo().aboutMe
})

addImageButton.addEventListener('click', () => {
  popupAddImage.open()
  cardValidator.disableButton()
})

profileValidator.enableValidation()
cardValidator.enableValidation()
openImage.setEventListener()
popupUserInfo.setEventListener()
cardList.renderItems()
popupAddImage.setEventListener()

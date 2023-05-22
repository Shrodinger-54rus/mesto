import {initialCards} from './array.js';
import Card from './Card.js';
import FormValidator from './FormValidator.js';
// import Section from './Section.js';

const container = document.querySelector('.page');
const formProfileEdit = container.querySelector('.popup__form');
const inputName = container.querySelector('.popup__input_type_name');
const inputAboutMe = container.querySelector('.popup__input_type_about-me');
const profileName = container.querySelector('.profile__title');
const profileJob = container.querySelector('.profile__subtitle');
const editProfilePopup = container.querySelector('.popup_edit-profile');
const editProfileButton = container.querySelector('.profile__edit');
const cardsContainer = container  .querySelector('.photo-grid');
const addImagePopup = container.querySelector('.popup_add-image');
const addImageButton = container.querySelector('.profile__add');
const addNewImageForm = container.querySelector('.popup__form_type_new-image');
const imagePopup = document.querySelector('.popup_image-show');
const zoomImage = document.querySelector('.image-show__item');
const showImageCaption = document.querySelector('.image-show__caption');
const popups = document.querySelectorAll('.popup');
const nameImageInput = addNewImageForm.querySelector('.popup__input_type_image-name');
const linkImageInput = addNewImageForm.querySelector('.popup__input_type_image-url');
const closeButtons = document.querySelectorAll('.popup__close-button');
const editProfileForm = container.querySelector('.popup__form_type_edit-profile');
const addImageForm = container.querySelector('.popup__form_type_new-image');
const templateSelector = '.photo-template';
const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible',
};

function openPopup(popup) {                          
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', handleCloseByEsc);
  document.addEventListener('click', handleCloseByClick);
};

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', handleCloseByEsc);
  document.removeEventListener('click', handleCloseByClick);
};

Array.from(closeButtons).forEach((closeButton) => {
  const popupPerent = closeButton.closest('.popup');
  closeButton.addEventListener('click', () => closePopup(popupPerent));
});

function handleCloseByClick(evt) {
  if (evt.target.classList.contains('popup_opened')) {
    closePopup(evt.target);
  };
};

function handleCloseByEsc(evt) {
  if (evt.key === "Escape") {
    closePopup(document.querySelector('.popup_opened'));
  };
};

function showImage(cardData) {
  openPopup(imagePopup);
  zoomImage.src = cardData.link;
  zoomImage.alt = cardData.name;
  showImageCaption.textContent = cardData.name;
};

function renderCardElement(cardElement) {
  cardsContainer.prepend(cardElement);
};

function createNewCard(cardData) {
  const card = new Card(cardData, templateSelector, showImage);
  const cardElement = card.createCard();
  return cardElement;
};

function addNewImage(event) {
  event.preventDefault();
  const name = nameImageInput.value;
  const link = linkImageInput.value;
  const cardData = {name, link};
  renderCardElement(createNewCard(cardData));
  closePopup(addImagePopup);
  event.target.reset();
};

initialCards.forEach((card) => {
  renderCardElement(createNewCard(card));
});

editProfileButton.addEventListener('click', () => {
  inputName.value = profileName.textContent;
  inputAboutMe.value = profileJob.textContent;
  openPopup(editProfilePopup);
});

addImageButton.addEventListener('click', () => {
  openPopup(addImagePopup);
  cardValidator.disableButton();
});

formProfileEdit.addEventListener('submit', (event) => {
  event.preventDefault();
  profileName.textContent = inputName.value;
  profileJob.textContent = inputAboutMe.value;
  closePopup(editProfilePopup);
});

addNewImageForm.addEventListener('submit', addNewImage);

const profileValidator = new FormValidator(config, editProfileForm);
const cardValidator = new FormValidator(config, addImageForm);

profileValidator.enableValidation();
cardValidator.enableValidation();

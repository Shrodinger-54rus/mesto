export const container = document.querySelector('.page')
export const inputName = container.querySelector('.popup__input_type_name')
export const inputAboutMe = container.querySelector(
  '.popup__input_type_about-me'
)
export const profileName = container.querySelector('.profile__title')
export const profileJob = container.querySelector('.profile__subtitle')
export const editProfilePopup = container.querySelector('.popup_edit-profile')
export const editProfileButton = container.querySelector('.profile__edit')
export const addImagePopup = container.querySelector('.popup_add-image')
export const addImageButton = container.querySelector('.profile__add')
export const imagePopup = document.querySelector('.popup_image-show')
export const editProfileForm = container.querySelector(
  '.popup__form_type_edit-profile'
)
export const addImageForm = container.querySelector(
  '.popup__form_type_new-image'
)
export const templateSelector = '.photo-template'
export const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible',
}

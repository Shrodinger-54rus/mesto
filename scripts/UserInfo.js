export default class UserInfo {
  constructor(nameSelector, aboutMeSelector) {
    this._nameSelector = nameSelector
    this._aboutMeSelector = aboutMeSelector
  }

  getUserInfo() {
    const inputsUserInfo = {
      name: this._nameSelector.textContent,
      aboutMe: this._aboutMeSelector.textContent,
    }
    return inputsUserInfo
  }

  setUserInfo(inputsUserInfo) {
    this._nameSelector.textContent = inputsUserInfo.name
    this._aboutMeSelector.textContent = inputsUserInfo.aboutMe
  }
}

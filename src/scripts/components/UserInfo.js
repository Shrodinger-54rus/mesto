export default class UserInfo {
  constructor(nameSelector, aboutMeSelector, userAvatarSelector) {
    this._nameSelector = nameSelector
    this._aboutMeSelector = aboutMeSelector
    this._userAvatarSelector = userAvatarSelector
  }

  getUserInfo() {
    const inputsUserInfo = {
      name: this._nameSelector.textContent,
      aboutMe: this._aboutMeSelector.textContent,
    }
    return inputsUserInfo
  }

  setUserInfo({ name, job, avatar }) {
    this._nameSelector.textContent = name
    this._aboutMeSelector.textContent = job
    this._userAvatarSelector.src = avatar
  }
}

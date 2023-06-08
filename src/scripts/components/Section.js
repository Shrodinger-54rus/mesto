export default class Section {
  constructor(renderer, containerSelector) {
    this._renderer = renderer
    this._container = containerSelector
  }

  renderItems(cardsData) {
    cardsData.forEach((card) => {
      this._renderer(card)
    })
  }

  addItem(card) {
    this._container.prepend(card)
  }
}

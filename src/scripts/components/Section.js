export default class Section {
  constructor(renderer, container) {
    this._renderer = renderer
    this._container = container
  }

  renderItems(cardsData) {
    cardsData.forEach((card) => {
      this._renderer(card)
    })
  }

  addItem(card) {
    this._container.prepend(card)
  }

  addItemAppend(card) {
    this._container.append(card)
  }
}

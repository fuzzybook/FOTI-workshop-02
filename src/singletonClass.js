
class Singleton {
  constructor() {
    this._name = 'I\'m pippo'
  }
  get name() {
    return this._name
  }

  set name(name) {
    this._name = name
  }
}

const ____MyPrivateSingleton = new Singleton()

export default ____MyPrivateSingleton

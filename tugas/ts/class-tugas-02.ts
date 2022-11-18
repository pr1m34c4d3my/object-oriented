export default class Musik {
  _insturmen: string = "";
  _caraMain: string = "";

  constructor(instrumen: string, caraMain: string) {
    this._insturmen = instrumen;
    this._caraMain = caraMain;
  }

  result(): string {
    return `ini alat musik ${this._insturmen} mainnya di ${this._caraMain}`;
  }
}

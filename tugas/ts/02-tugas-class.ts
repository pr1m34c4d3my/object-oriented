import Musik from "./class-tugas-02";

class Type extends Musik {
  _jenis: string = "";

  constructor(instrumen: string, caraMain: string, jenis: string) {
    super(instrumen, caraMain);
    this._jenis = jenis;
  }

  printAll(): string {
    return `${this.result()} berjenis ${this._jenis}`;
  }
}

let mainMusik: Type = new Type("gitar", "dipetik", "melodis");
console.log(mainMusik.printAll());

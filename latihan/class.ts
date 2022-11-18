class Sound {
  _effect: string = "";
  _volume: number = 0;

  constructor(effect: string, volume: number) {
    this._effect = effect;
    this._volume = volume;
  }

  printSound(): string {
    return `pakai efek ${this._effect} di volume ${this._volume}`;
  }
}

class Guitar extends Sound {
  _nama: string = "";
  _senar: number = 0;
  _hasKnob: boolean = false;
  _pickUp: string = "";

  constructor(
    nama: string,
    feet: number,
    hasPaw: boolean,
    pickUp: string,
    effect: string,
    volume: number
  ) {
    super(effect, volume);
    this._nama = nama;
    this._senar = feet;
    this._hasKnob = hasPaw;
    this._pickUp = pickUp;
  }

  printGuitar(): string {
    return `Saya main gitar ${this._nama} senar ${this._senar} dengan pickup ${
      this._pickUp
    } ${this._hasKnob} ${this.printSound()} `;
  }
}

let newGuitar: Guitar = new Guitar("Gibson", 7, true, "Behringer", "metal", 7);

console.log(newGuitar.printGuitar());

//buat perulangan menggunakan ts
//buat sebuah class dan class tersebut menggunakan extend output dipanggil semua

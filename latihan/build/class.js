"use strict";
class Sound {
    constructor(effect, volume) {
        this._effect = "";
        this._volume = 0;
        this._effect = effect;
        this._volume = volume;
    }
    printSound() {
        return `pakai efek ${this._effect} di volume ${this._volume}`;
    }
}
class Guitar extends Sound {
    constructor(nama, feet, hasPaw, pickUp, effect, volume) {
        super(effect, volume);
        this._nama = "";
        this._senar = 0;
        this._hasKnob = false;
        this._pickUp = "";
        this._nama = nama;
        this._senar = feet;
        this._hasKnob = hasPaw;
        this._pickUp = pickUp;
    }
    printGuitar() {
        return `Saya main gitar ${this._nama} senar ${this._senar} dengan pickup ${this._pickUp} ${this._hasKnob} ${this.printSound()} `;
    }
}
let newGuitar = new Guitar("Gibson", 7, true, "Behringer", "metal", 7);
console.log(newGuitar.printGuitar());
//buat perulangan menggunakan ts
//buat sebuah class dan class tersebut menggunakan extend output dipanggil semua

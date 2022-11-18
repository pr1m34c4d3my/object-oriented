"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Musik {
    constructor(instrumen, caraMain) {
        this._insturmen = "";
        this._caraMain = "";
        this._insturmen = instrumen;
        this._caraMain = caraMain;
    }
    result() {
        return `ini alat musik ${this._insturmen} mainnya di ${this._caraMain}`;
    }
}
exports.default = Musik;

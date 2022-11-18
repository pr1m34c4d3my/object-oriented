"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const class_tugas_02_1 = __importDefault(require("./class-tugas-02"));
class Type extends class_tugas_02_1.default {
    constructor(instrumen, caraMain, jenis) {
        super(instrumen, caraMain);
        this._jenis = "";
        this._jenis = jenis;
    }
    printAll() {
        return `${this.result()} berjenis ${this._jenis}`;
    }
}
let mainMusik = new Type("gitar", "dipetik", "melodis");
console.log(mainMusik.printAll());

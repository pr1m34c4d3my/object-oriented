let array = [1, [1, 2], [3, 4], [1, [2]], 5, 6];

let array2 = [
  {
    nama: "wisnu",
    umur: 26,
    domisili: "jakarta barat",
  },
  {
    nama: "budi",
    umur: 27,
    domisili: "jakarta utara",
  },
  {
    nama: "laksono",
    umur: 28,
    domisili: "jakarta timur",
  },
];

let array3 = [
  {
    name: "John",
    age: 21,
    state: "America",
    grade: [90, 80, 70],
  },
  {
    name: "Doe",
    age: 22,
    state: "California",
    grade: [90, 80, 70],
  },
  {
    name: "Foo",
    age: 23,
    state: "Australia",
    grade: [90, 80, 70],
  },
];

console.log(array3[0].name, "" + array2[0].umur, "" + array2[0].domisili);

console.log(array3[0].grade[0]);
//console.log(array3[0].grade[1]);
//console.log(array3[0].grade[2]);
console.log(array3[1].grade[0]);
//console.log(array3[1].grade[1]);
//console.log(array3[1].grade[2]);
console.log(array3[2].grade[0]);
//console.log(array3[2].grade[1]);
//console.log(array3[2].grade[2]);

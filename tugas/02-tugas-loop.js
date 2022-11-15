// Tugas 2 ganjilGenap tanpa function
let awal = 0;
let batas = 100;

for (awal; awal <= batas; awal++) {
  if (awal % 2 == 0) {
    console.log(awal, "adalah bilangan genap");
  } else {
    console.log(awal, "adalah bilangan ganjil");
  }
}

//function ganjilGenap(awal, batas)
gabung = (awal, batas) => {
  for (awal; awal <= batas; awal++) {
    if (awal % 2 == 0) {
      console.log(awal, "adalah bilangan genap");
    } else {
      console.log(awal, "adalah bilangan ganjil");
    }
  }
  return;
};

gabung(0, 100);

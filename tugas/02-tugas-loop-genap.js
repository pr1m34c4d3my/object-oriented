//Tugas 2 Genap
genap = (awal, batas) => {
  for (awal; awal <= batas; awal++) {
    if (awal % 2 == 0 && awal != 0) {
      console.log(awal);
    }
  }
  return;
};

genap(0, 100);
console.log("Ini Bilangan Genap");

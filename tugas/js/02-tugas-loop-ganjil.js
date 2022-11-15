//Tugas 2 Ganjil
ganjil = () => {
  let awal = 0;
  let batas = 100;
  const pesan = "Ini Bilangan Ganjil";

  for (awal; awal <= batas; awal++) {
    if (awal % 2 == 1) {
      console.log(awal);
    }
  }
  return pesan;
};

console.log(ganjil());

//Tugas 1
penilaian = () => {
  let score = Math.floor(Math.random() * 101);
  let result = "";

  if (score >= 90) {
    result = "A";
  } else if (score >= 80) {
    result = "B";
  } else if (score >= 70) {
    result = "C";
  } else if (score >= 60) {
    result = "D";
  } else if (score < 60) {
    result = "E";
  }

  console.log("Nilai Kamu", score);
  console.log("Grade Kamu", result);

  return;
};

penilaian();

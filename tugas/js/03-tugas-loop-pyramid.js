pyramid1 = (baris) => {
  for (let i = 0; i <= baris; i++) {
    let jarak = "-".repeat(baris - i);
    let gambar = "a ".repeat(i);

    console.log(jarak + gambar);
  }
};

pyramid1(10);

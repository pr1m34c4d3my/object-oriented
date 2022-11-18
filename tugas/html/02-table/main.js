let dataFav = [
  {
    nama: "Wisnu",
    Makanan: "Soto",
    Minuman: "Air Putih",
    Diaduk: "Iya",
  },
  {
    nama: "Farid",
    Makanan: "Roti",
    Minuman: "Air Zam Zam",
    Diaduk: "Tidak",
  },
  {
    nama: "Budi",
    Makanan: "Nasi Goreng",
    Minuman: "Air Putih",
    Diaduk: "Iya",
  },
];

let judul = ["Favorite", "Orang"];
let table = document.getElementById("myTable");

buildTable = (data) => {
  for (let i = 0; i < data.length; i++) {
    let row = `<tr>
                  <td>${data[i].nama}</td>
                  <td>${data[i].Makanan}</td>
                  <td>${data[i].Minuman}</td>
                  <td>${data[i].Diaduk}</td>
               </tr>`;

    table.innerHTML += row;
  }
};

buildTable(dataFav);

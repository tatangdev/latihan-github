// Nama -> nama program
// Tatang -> penjumlahan
function penjumlahan(a, b) {
  return a + b;
}
console.log(penjumlahan(1, 2));

//Muhammad Al Imran -> menghitung volume kubus
function hitungVolumeKubus(sisi) {
  return sisi * sisi * sisi;
}

var panjangSisi = 5;
var volumeKubus = hitungVolumeKubus(panjangSisi);
console.log(
  "panjang sisi volume kubus " + panjangSisi + " adalah " + volumeKubus
);

<<<<<<< HEAD
// Muhmmad Luthfi Ramadhan -> menghitung volume tabung
const hitungVolumeTabung = (jariJari, tinggi) => {
  const PHI = 3.14;
  return PHI * jariJari * jariJari * tinggi;
};

const volumeTabung = hitungVolumeTabung(5, 10);
console.log(`volume tabung adalah ${volumeTabung}`);
=======
// Achmad Fahmi Al Hafidz -> menghitung keliling persegi panjang
function kelilingPersegiPanjang(panjang, lebar){
  return 2 * (panjang+lebar)
}

console.log(kelilingPersegiPanjang(5, 2));
>>>>>>> 09f3645f64fddfd3de81760cece0332a2de28d38

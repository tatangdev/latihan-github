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

// Muhmmad Luthfi Ramadhan -> menghitung volume tabung
const hitungVolumeTabung = (jariJari, tinggi) => {
  const PHI = 3.14;
  return PHI * jariJari * jariJari * tinggi;
};

const volumeTabung = hitungVolumeTabung(5, 10);
console.log(`volume tabung adalah ${volumeTabung}`);

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

function kelilingLingkaran(r){
  let hasil = 2 * 3.14 * r
  return 'Keliling lingkaran adalah ' + hasil
}

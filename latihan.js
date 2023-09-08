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
console.log('panjang sisi volume kubus ' + panjangSisi + ' adalah ' + volumeKubus);

// Muhammad Taufik Hidayat -> menghitung volume kerucut
function hitungVolumeKerucut(r, t) {
  return (1 / 3) * 3.14 * r * r * t;
}
console.log(hitungVolumeKerucut(7, 10));

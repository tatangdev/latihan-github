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

// Achmad Fahmi Al Hafidz -> menghitung keliling persegi panjang
function kelilingPersegiPanjang(panjang, lebar){
  return 2 * (panjang+lebar)
}

console.log(kelilingPersegiPanjang(5, 2));

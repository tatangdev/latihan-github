// Nama -> nama program
// Tatang -> penjumlahan
function penjumlahan(a, b) {
  return a + b;
}
console.log(penjumlahan(1, 2));

// Hafid Nur-Keliling jajar genhang
//

function KjajarGenjang(sisi_satu, sisi_dua) {
  return 2 * (sisi_satu + sisi_dua);
}
console.log(KjajarGenjang(10,10))
// Arfin -> Luas Segitiga
function luasSegitiga(a, b) {
  return 0.5 * a * b;
}
console.log(luasSegitiga(5, 10));

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
function kelilingPersegiPanjang(panjang, lebar) {
  return 2 * (panjang + lebar);
}

console.log(kelilingPersegiPanjang(5, 2));

// Aldi -> luas persegi panjang
function luaspersegipanjang(p,l) {
  return p * l
}
console.log(luaspersegipanjang(5,10))
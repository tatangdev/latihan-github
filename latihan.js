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

//Shera Alice Ayutri -> menghitung volume bola
function volumeBola(jariJari) {
    const pi = 3.14;
    const volume = (4 / 3) * pi * jariJari ** 3;
    return volume;
  }
const jariJariBola = 10;
const hasilVolume = volumeBola(jariJariBola);
console.log(`Volume bola dengan jari-jari ${jariJariBola} adalah ${hasilVolume}`);

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

//Ismiazzah Kamilah -> menghitung volume balok
function hitungVolumeBalok(panjang, lebar, tinggi){
  let volume = panjang * lebar * tinggi
  return volume;
}

let panjangBalok = 5
let lebarBalok = 3
let tinggiBalok = 2

let volumeBalok = hitungVolumeBalok(panjangBalok, lebarBalok, tinggiBalok)
console.log("Volume balok adalah" + volumeBalok);

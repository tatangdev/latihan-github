// Nama -> nama program
// Tatang -> penjumlahan
function penjumlahan(a, b) {
    return a + b;
}
console.log(penjumlahan(1, 2));

// Purno -> Volume Limas Persegi
function volumeLimasPersegi(s, t) {
    return (1 / 3) * s ** 2 * t;
}
console.log(volumeLimasPersegi(5, 6));

// Hafid Nur-Keliling jajar genhang
function KjajarGenjang(sisi_satu, sisi_dua) {
    return 2 * (sisi_satu + sisi_dua);
}
console.log(KjajarGenjang(10, 10));

// Arfin -> Luas Segitiga
function luasSegitiga(a, b) {
    return 0.5 * a * b;
}
console.log(luasSegitiga(5, 10));

//Muhammad Al Imran -> menghitung volume kubus
function hitungVolumeKubus(sisi) {
    return sisi * sisi * sisi;
}
console.log(hitungVolumeKubus(5));

// Muhammad Taufik Hidayat -> menghitung volume kerucut
function hitungVolumeKerucut(r, t) {
    return (1 / 3) * 3.14 * r * r * t;
}
console.log(hitungVolumeKerucut(7, 10));

//Niko Muhamad Fajar -> keliling Lingkaran
function kelilingLingkaran(r) {
    let hasil = 2 * 3.14 * r;
    return 'Keliling lingkaran adalah ' + hasil;
}
console.log(kelilingLingkaran(10));

// Achmad Fahmi Al Hafidz -> menghitung keliling persegi panjang
function kelilingPersegiPanjang(panjang, lebar) {
    return 2 * (panjang + lebar);
}
console.log(kelilingPersegiPanjang(5, 2));

// Muhmmad Luthfi Ramadhan -> menghitung volume tabung
const hitungVolumeTabung = (jariJari, tinggi) => {
    const PHI = 3.14;
    return PHI * jariJari * jariJari * tinggi;
};
console.log(hitungVolumeTabung(5, 10));

// Najmul Azka -> luas jajar genjang
function luasJajarGenjang(alas, tinggi) {
    return alas * tinggi;
}
console.log(luasJajarGenjang(10, 8));

//Najmul Azka -> keliling layang-layang
function kelilingLayangLayang(sisiPertama, sisiKedua) {
    return 2 * (sisiPertama + sisiKedua);
}
console.log(kelilingLayangLayang(4, 6));

// Nama -> nama program
// Tatang -> penjumlahan
function penjumlahan(a, b) {
    return a + b
}
console.log(penjumlahan(1, 2))


// Rian -> menghitung volume limas segitiga

function volumeLimasSegitiga(tinggisegitiga,alasSegitiga,tinggiLimas) {
    const luasAlas = 1/2 * alasSegitiga * tinggisegitiga
    return 1/3 * luasAlas * tinggiLimas
}


console.log(volumeLimasSegitiga(10,10,12));
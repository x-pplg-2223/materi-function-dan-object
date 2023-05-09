/*Function adalah sebuah blok kode yang disusun 
sedemikian rupa untuk menjalankan sebuah tindakan. Blok kode ini dibuat untuk dapat bisa digunakan kembali.
contoh function pertama
tanpa return*/
function functionpertama()
{
    console.log('halo! ini function pertama saya')
}

functionpertama();

//function kedua
//pakai return
function munculangkadua() {
    return 2
}

var tampungdulu = munculangkadua();
console.log(tampungdulu)

//function ketiga
function denganreturn()
{
    return 'azril cilacap & ali wonosobo';
}
const tampunganfunctiondenganreturn = denganreturn();
console.log(tampunganfunctiondenganreturn)

//atau untuk perkalian
function kembali(angka)
{
    return angka * 3;
}
const sus = kembali(3);
console.log(sus)

//Pengiriman parameter lebih dari satu (4)
function tampilangka (angkapertama, angkakedua) {
    return angkapertama + angkakedua
}

console.log(tampilangka(10, 29))

//Inisialisasi parameter dengan nilai default (5)
function seenumber(number = 3) {
    return number
}
console.log(seenumber(7))// 7, sesuai dengan nilai parameter
console.log(seenumber())// 3, karena default dari parameter yang pertama

//anonymous function
var perkalian = function(angkahiji, angkalorodua){
    return angkahiji * angkalorodua 
}
console.log(perkalian(24, 5))
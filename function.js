// contoh function pertama
console.log('function ke-1');
function functionPertama() //pendeklarasian function
{
    console.log('Halo ini function pertama saya');
}
functionPertama();

// function ke 2
console.log('function ke-2');
function functionKedua()
{
    return 'Ini adalah fungsi untuk mengembalikan sebuah nilai';
}
const tampunganFunctionDenganReturn = functionKedua(); //menampung fungsi kedalam variabel
console.log(tampunganFunctionDenganReturn);

// function ke 3
console.log('function ke-3');
function functionKetiga(angka, angka2)
{
    return angka % angka2
}
const tampung1 = functionKetiga(2,4);
console.log(tampung1);

// function ke 4
console.log('function ke-4');
function tampilkanAngka(angkaPertama = 5, angkaKedua = 6)
{
    return angkaPertama + angkaKedua;
}
console.log(tampilkanAngka(5, 5));

// function ke 5
console.log('function ke-5');
function tampilkanAngkaDefault(angka = 9)
{
    return angka
}
console.log(tampilkanAngkaDefault(5));
console.log(tampilkanAngkaDefault());

// function ke 5.1
console.log('function ke-5.1');
var fungsiPerkalian = function(angkaDepan, angkaBelakang) 
{
    return angkaDepan * angkaBelakang    
}
console.log(fungsiPerkalian(2,3));
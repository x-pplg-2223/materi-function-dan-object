const person = {
    name: "Achmad Tirto Sudiro",
    gender: "laki-laki",
    age: 16
}
console.log(`Halo nama saya ${person.name}, saya berjenis kelamin ${person.gender}, dan umur saya ${person.age}`);

var mobil = [
    {merk: "BMW", warna: "merah", tipe: "sedan"}, 
    {merk: "toyota", warna: "hitam", tipe: "box"}, 
    {merk: "audi", warna: "biru", tipe: "sedan"}
  ]
  mobil.forEach(function(item){
    console.log("merk : " + item.merk)
 })
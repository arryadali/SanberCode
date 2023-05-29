//Soal 1
function cetakFunction() {
    return "Hallo nama saya Arrya Dali Lesmana"
}

console.log(cetakFunction())

console.log("")

//Soal 2
function myFunction(angka1, angka2) {
    return angka1 + angka2
}

let angka1 = 20
let angka2 = 7

let output = myFunction(angka1, angka2)
console.log(output)

console.log("")

//Soal 3
const Hello = () => {
    return "Hello"
}

console.log(Hello())

console.log("")

//Soal 4
let obj = {
    nama : "john",
    umur : 22,
    bahasa : "indonesia"
}

console.log(obj.bahasa)

console.log("")

//Soal 5
let arrayDaftarPeserta = ["John Doe", "laki-laki", "baca buku" , 1992]
let objDaftarPeserta = {
    nama : arrayDaftarPeserta[0],
    jenis_kelamin : arrayDaftarPeserta[1],
    hobi : arrayDaftarPeserta[2],
    tahun : 1992
}

console.log(objDaftarPeserta)

console.log("")

//Soal 6
var buah = [
    {nama : "Nanas", warna : "Kuning", adaBijinya : false, harga : 9000},
    {nama : "Jetuk", warna : "Orange", adaBijinya : true, harga : 8000},
    {nama : "Semangka", warna : "Hijau & Merah", adaBijinya : true, harga : 10000},
    {nama : "Pisang", warna : "Kuning", adaBijinya : false, harga : 5000}
]

var buahFilter = buah.filter(function(jenis) {
    return jenis.adaBijinya === false;
})

console.log(buahFilter)

console.log("")

//Soal 7
let phone = {
    name: "Galaxy Note 20",
    brand: "Samsung",
    year: 2020
 }
const {name, brand, year} = phone

console.log(name, brand, year)

console.log("")

//Soal 8
let dataBukuTambahan = {
    penulis : "john doe",
    tahunTerbit : 2020
}

let buku = {
    nama : "pemprograman dasar",
    jumlahHalaman : 172
}

let objOutput = {...dataBukuTambahan, ...buku}

console.log(objOutput)

console.log("")

//Soal 9
let mobil = {
    merk : "bmw",
    color : "red",
    year : 2002
}

const functionObject = (param) => {
    return param
}

console.log(functionObject(mobil))

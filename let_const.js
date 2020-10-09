/* ======================================================
LET AND CONST

ES6 memperkenalkan 2 cara baru untuk membuat variabel:
let seperti pengganti var
====================================================== */
console.clear()

let num1 = 10
console.log(num1)

let mName = "Sigit"
let isOldEnough = false
let marks = [9, 5, 6, 3]
let blogObj = {
    title: 'belajar es6',
    description: 'Lorem Ipsum Dolor'
}

/* ============================================================
const : itu digunakan untuk membuat variabel dengan nilai 
konstan yang juga dikenal sebagai konstanta. variabel yang 
dibuat menggunakan const tidak dapat diperbarui nanti dalam kode 
============================================================== */

const GetApi = "http://api.test.com/v1";

const num2 = 20
// num2 = 30
console.log(num2)

num3 = 40
console.log(num3)
var num3;


// PERBEDAAN ANTARA VAR DENGAN LET DAN CONST
/*
Jika var itu bersifat variabel global dan let itu bersifat variabel local namun masih dalam 1 function.

** Untuk let itu berlaku di dalam kurung kurawal saja misalnya di dalam kurung kurawal 
if, else, for, while, try, catch, switch.

** Untuk var itu dimanpun kita mendeklarasikan selagi masih di dalam function itu maka masih dapat di akses.
atau yang sering disebut dengan function scope.

** untuk const itu sama dengan let hanya saja value dari variable tersebut tidak dapat di ubah.
*/

function denganVar(){
    var angka = 1;
    if(angka == 1){
        var angka2 = ++angka;
    }
    return angka2;
}

function denganLet(){
    let angka = 1;
    if(angka == 1){
        let angka2 = ++angka;
    }
    return angka2;
}
  
console.log("dengan var hasilnya : "+denganVar());
console.log("dengan let hasilnya : "+denganLet());
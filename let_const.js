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
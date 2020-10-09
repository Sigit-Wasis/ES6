/* =========================================================================================================
ES6 memberi kita sintaks baru untuk mendefinisikan fungsi menggunakan panah tebal “=>”. 
Fungsi panah membawa banyak kejelasan & pengurangan kode. 
========================================================================================================= */

// SYNTAX ES5
function greetings(name) {
    return ('welcome ' + name)
}
console.log(greetings('sigit'))

// SYNTAX ES6
// arrow function dengan implisit return
const mGreetings = (name) => `welcome ${name}`
console.log(mGreetings('wasis subekti'))

// function dengan 1 parameter
var hello1 = nama => {
    console.log(`selamat datang ${nama}`)
}

//function dengan lebih dari 1 parameter
var hello2 = (nama,nama2)=> {
    console.log(`selamat datang ${nama} dan ${nama2}`)
}

//function tanpa parameter
var hello3 = () => {
    console.log("selamat datang di website saya")
}
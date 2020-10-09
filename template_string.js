/* =========================================================================================================
Itu hanyalah sebuah string yang memungkinkan penyematan ekspresi di dalamnya. 
untuk membuat template string Anda tidak menggunakan tanda kutip tunggal atau ganda, 
Anda menggunakan tanda back tick atau (``). ekspresi disematkan dengan membungkusnya di dalam $ {} 
=========================================================================================================  */

// Example 1
const mGreetings = `Hello ${name}`
// di sini ekspresinya adalah variabel

const moreGreetings = `Hello ${fullName()}`
// di sini ekpresinya adalah memanggil function


// Example 2
const firstName = "Sigit"
const lastName = "Wasis"

function getFullName (firstName, lastName) {
    return `${firstName} ${lastName}`;
}

const mGreetings = `Hello ${getFullName(firstName, lastName)}`
console.log(mGreetings);


// Example 3
const red = 199;
const green = 155;
const blue = 422;
const yellow = 0.8;

const rgbExp = `rgba(${red}, ${green}, ${blue}, ${yellow})`;
console.log(rgbExp);
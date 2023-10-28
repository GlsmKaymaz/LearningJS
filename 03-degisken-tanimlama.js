// ********** Degisken Tanimlama Kurallari  ********** 
// https://www.w3schools.com/js/js_conventions.asp
// https://google.github.io/styleguide/jsguide.html#features-local-variable-declarations
// https://www.robinwieruch.de/javascript-naming-conventions

// ### Degisken Genel Tanimlama Kurallari:
// camelCase Kullanimi:
let fullname  = "" // bu dogru kullanim degil :(
let kodluyoruzserverinfo = "" // bu dogru kullanim degil :(
let kodluyoruz_server_info = "" // bu dogru kullanim degil :(
let fullName = ""
let kodluyoruzServerInfo = "" // bu dogru :)
let kodluyoruzSERverInfo = "" // bu dogru kullanim degil :(

// let firstName = "Hakan", lastName = "Yalcinkaya"
let firstName = "Hakan"
let lastName = "Yalcinkaya"
console.log(firstName, lastName)

// UPPER_CASE Kullanimi:
const password = "1234" // bu dogru kullanim degil :(
const PASSWORD = "1234" // dogru kullanim
const SERVER_PASSWORD = "1234"

// degiskenlerde turkce ve diger dillerin kullanimi:
let türkçeBilgi = 'Türkçe Bilgi Yazdırılıyor..' // bu dogru kullanim degil :(
// let turkceBilgi // olmazzz :( 
let info = 'Türkçe Bilgi Yazdırılıyor..'
console.log(info)


// ### Ek Bilgi:
// 1: boolean tanimlarken is/has kullanimi:
let isActive = true
let hasPassword = false

// 2: Line Length < 80
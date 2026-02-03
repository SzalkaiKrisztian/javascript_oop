import { muvelet,muveletLetrehoz } from "./functions.js"
import { Gomb } from "./Gomb.js"

/**@type {HTMLInputElement} */
const inputF1 = document.createElement('input')
inputF1.type='text'
inputF1.id="egy"
document.body.appendChild(inputF1)

/**@type {HTMLInputElement} */
const inputF2 = document.createElement('input')
inputF1.type='text'
inputF1.id="ketto"
document.body.appendChild(inputF2)

/**@type {HTMLDivElement} */
const div = document.createElement('div')
document.body.appendChild(div)

const osszead = new Gomb(inputF1,inputF2,"+",div)
const kivon = new Gomb(inputF1,inputF2,"-",div)
const szorzas = new Gomb(inputF1,inputF2,"*",div)


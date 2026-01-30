import { muvelet,muveletLetrehoz } from "./functions.js"

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

/**@type {HTMLButtonElement} */
const button = document.createElement("button")
button.innerText="hozzaad"
document.body.appendChild(button)

button.addEventListener('click',function(){
    const sz1=Number(inputF1.value)
    const sz2=Number(inputF2.value)
    const {result} = muvelet(sz1,sz2,muveletLetrehoz('+'))
    div.innerText=result
})

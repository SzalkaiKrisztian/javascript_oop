import { muvelet, muveletLetrehoz } from "./functions.js"

class Gomb{
    /**
     * 
     * @param {HTMLInputElement} input1 
     * @param {HTMLInputElement} input2 
     * @param {string} muveletString 
     * @param {HTMLDivElement} eredmenyDiv 
     */
    constructor(input1, input2, muveletString, eredmenyDiv){
        const b = document.createElement("button")
        b.innerText=muveletString
        document.body.appendChild(b)
        b.addEventListener('click',this.#calculate(input1,input2,eredmenyDiv).bind(muveletString))
    }
    /**
     * 
     * @param {HTMLInputElement} input2 
     * @param {HTMLInputElement} input1 
     * @param {HTMLDivElement} eredmenydiv 
     * @returns 
     */
    #calculate(input1, input2, eredmenydiv){
        return function(){
            const in1=Number(input1.value)
            const in2=Number(input2.value)
            const {result} = muvelet(in1,in2,muveletLetrehoz(this))
            eredmenydiv.innerText=result
        }
    }
}

export{Gomb}
import data from "./data.json" with{type: "json"}
/**
 * @typedef {{question:string,valid:boolean}} Question
 */

class Jatek {
    /**@type {Question[]} */
    #Questions;
    constructor() {
        this.#Questions=[]

        for (const d of data.questions) {
            this.#Questions.push(d)
        }
        this.jatek()
    }
    jatek(){
        let talalat = 0
        let kerdes = 0;

        while (kerdes < this.#Questions.length) {
            const div = document.body.querySelector(".cardArea")
            div.innerHTML = ""

            const helyes = document.createElement("button")
            helyes.innerText = this.#Questions[kerdes].question
            helyes.classList.add("card-true")
            div.appendChild(helyes)

            const hamis = document.createElement("button")
            hamis.innerText = this.#Questions[kerdes].question
            hamis.classList.add("card-false")
            div.appendChild(hamis)

            helyes.addEventListener('click', (e) => {
                if(this.#Questions[kerdes].valid){talalat++}
                kerdes++
            })

            hamis.addEventListener('click', (e) => {
                if(this.#Questions[kerdes].valid){talalat++}
                kerdes++
            })

        }
    }
}
const jatek = new Jatek()
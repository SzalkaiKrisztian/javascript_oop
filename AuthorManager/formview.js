import { createInputAndErrorDiv } from "./gomszab.min.js";
import { AuthorManager } from "./manager.js";
import { ViewElement } from "./viewelement.js";

class FormView extends ViewElement{//formview kiterjesztes
    /**@type {FormField[]} */
    #FormInputList//privat  forminput list tulajdonsag
    /**@type {AuthorManager} */
    #manager//privat manager tul
    /**@type {HTMLFormElement} */
    /**
     * 
     * @param {string} id 
     * @param {import("./index.js").FormFieldType[]} formFieldList 
     * @param {AuthorManager} manager 
     */
    constructor(id, formFieldList, manager){//def constructor
        super(id)//szülöt meghivjuk ugyanazzal az idvel
        this.#manager=manager// a bemeneti manager ertekadas
        this.#FormInputList=[]//ures lista alapbol
        const form = document.createElement('form')//+form
        for(const field of formFieldList){//vegigmegyunk a bemeneti formfieldlist parameteren
            const formField = new FormField(field.id,field.label,field.name, form)//peldanyosítjuk a form inputokat
            this.#FormInputList.push(formField)//hozzaadjuk
        }
        const button = document.createElement('button')//+button
        button.innerText="küldés"
        form.appendChild(button)//hozzaadjuk a formhoz
        const resultDiv= document.createElement('div')//+div amiben a megjelenő szövegnek()
        this.div.appendChild(resultDiv)//hozzaadjuk a viewelementdihez a reesultdivet
        this.div.appendChild(form)//form a divhez
        form.addEventListener('submit',(e)=>{//feliratkozunk a form submit eseményere
            e.preventDefault()//megakadályozzuk az alap lefutasat az esemenynek
            const elem = this.#createElement()//meghivjuk a create element methodust
            this.#manager.addElement(elem)//meghivjuk a manager addelement fuggvenyet (lasd authormanager.addelement)
        })
        this.#manager.addElementResultCallback=(result)=>{//def az addelementresultcallbacket
            resultDiv.innerText=result//beallitjuk a resultdiv ertekenek a kapott stringet
            setTimeout(()=>{//settimeout ,eghivasa
                resultDiv.innerText=''//toroljuk a tartalmat 1,5 mp mulva (pop up)
            }, 1500)
        }
    }
    /**
     * @returns {import("./index.js").AuthorType}
     */
    #createElement(){//def cre... definialasa
        /**
         * @type {import("./index.js").AuthorType}
         */
        let result={}//ures lista Authortype
        for(const field of this.#FormInputList){//vegigmegyunk a forminputlist elemein
            if(field.validate()){//meghivjuk minden form elemere a validate fuggvenyt
                result[field.name] = field.value//a result objektum forinputfield nev 
                // ertekevel megegyezó nevű tulnak megadjuk a forminput beviteéi mezo erteket
            }
        }
        return result//visszaterunk az objektummal
    }
} 


class FormField{ //def forminputoszt
    /**@type {HTMLInputElement} */
    #inputElement//inptelement privat
    /**@type {HTMLDivElement} */
    #errorDiv//erroruzenet privat
    /**@type {string} */
    #name//private name
    get name(){//getter
        return this.#name//visszaterunk a name tulajdonság ertekevel
    }
    get value(){//getter a value-nak
        return this.#inputElement.value ? this.#inputElement.value : undefined//ha az inputnak van beirt erteke, akkor veszater a beirt ertekkel
    }
    /**
     * 
     * @param {string} id 
     * @param {string} label 
     * @param {string} name 
     * @param {HTMLFormElement} parent 
     */
    constructor(id,label,name,parent){//def egy constructor
        this.#name=name
        const {input,errorDiv} = createInputAndErrorDiv({id,label,name,parent})//visszater a inputal meg hibadivvel
        this.#inputElement=input//beadjuk
        this.#errorDiv=errorDiv//beadjuk
    }
    /**
     * 
     * @returns {boolean}
     */
    validate(){//def vaildate fugg
        let result=true //alapbol true result
        if(!this.value){//ha a value getter visszateresi erteke undefined
            this.#errorDiv.innerText="kotelező"//beallitjuk az errordiv erteket a hibauzenetre
            result=false//ezert false
        }else{
            this.#errorDiv.innerText=''//ha nem undefined toroljuk a hibauzenetet
        }
        return result//visszaasja a igazt vagy hamist
    }
}

export {FormView}
import { createInputAndErrorDiv } from "./gomszab.min.js";
import { AuthorManager } from "./manager.js";
import { ViewElement } from "./viewelement.js";

class FormView extends ViewElement{
    /**@type {FormField[]} */
    #FormInputList
    /**@type {AuthorManager} */
    #manager
    /**@type {HTMLFormElement} */
    #Form
    /**
     * 
     * @param {string} id 
     * @param {import("./index.js").FormFieldType[]} formFieldList 
     * @param {AuthorManager} manager 
     */
    constructor(id, formFieldList, manager){
        super(id)
        this.#manager=manager
        this.#FormInputList=[]
        const form = document.createElement('form')
        for(const field of formFieldList){
            const formField = new FormField(field.id,field.label,field.name, form)
            this.#FormInputList.push(formField)
        }
        const button = document.createElement('button')
        button.innerText="küldés"
        form.appendChild(button)
        const resultDiv= document.createElement('div')
        this.div.appendChild(resultDiv)
        this.div.appendChild(form)
        form.addEventListener('submit',(e)=>{
            e.preventDefault()
            const elem = this.#createElement()
            this.#manager.addElement(elem)
        })
        this.#manager.addElementResultCallback=(result)=>{
            resultDiv.innerText=result
            setTimeout(()=>{
                resultDiv.innerText=''
            }, 1500)
        }
    }
    /**
     * @returns {import("./index.js").AuthorType}
     */
    #createElement(){
        /**
         * @type {import("./index.js").AuthorType}
         */
        let result={}
        for(const field of this.#FormInputList){
            if(field.validate()){
                result[field.name] = field.value
            }
        }
        return result
    }
} 


class FormField{
    /**@type {HTMLInputElement} */
    #inputElement
    /**@type {HTMLDivElement} */
    #errorDiv
    /**@type {string} */
    #name
    get name(){
        return this.#name
    }
    get value(){
        return this.#inputElement.value ? this.#inputElement.value : undefined
    }
    /**
     * 
     * @param {string} id 
     * @param {string} label 
     * @param {string} name 
     * @param {HTMLFormElement} parent 
     */
    constructor(id,label,name,parent){
        this.#name=name
        const {input,errorDiv} = createInputAndErrorDiv({id,label,name,parent})
        this.#inputElement=input
        this.#errorDiv=errorDiv
    }
    /**
     * 
     * @returns {boolean}
     */
    validate(){
        let result=true
        if(!this.value){
            this.#errorDiv.innerText="kotelező"
            result=false
        }else{
            this.#errorDiv.innerText=''
        }
        return result
    }
}

export {FormView}
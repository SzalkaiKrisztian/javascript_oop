import { hide, show } from "./gomszab.min.js";

/**
 * Ősosztály a megjelenítendő view osztálynK
 * @callback ActivateCallback
 * @returns {void}
 */
class ViewElement{
    /**@type {HTMLDivElement} */
    #div;
    /**@type {string} */
    #id;
    /**@type {ActivateCallback} */
    #activateCallback;//LEFUT HA megjelenik az elem a képernyőn(opcionalis pl navigate fugg)

    get div(){
        return this.#div
    }

    /**@param {ActivateCallback} value */
    set activateCallback(value){ //beallitja az aktivatecallbacknek a bemeneti parametert
        this.#activateCallback=value
    }

    get id(){//get az id-nek (navigációkor hasznélatos)
        return this.#id
    }

    /**
     * 
     * @param {string} id 
     */
    constructor(id){
        this.#id=id
        this.#div=document.createElement("div")
        this.#div.id=id;
    }

    /**
     * 
     * @param {HTMLElement} parent 
     */
    appendTo(parent){
        parent.appendChild(this.#div)
    }

    /**
     * 
     * @param {string} id 
     */
    activate(id){
        if(this.#id === id){
            show(this.#div)
            if(this.#activateCallback){
                this.#activateCallback();
            }
        }
        else{
            hide(this.#div)
        }
    }
}

export {ViewElement}
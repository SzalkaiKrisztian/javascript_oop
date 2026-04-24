import { ViewElement } from "./viewelement.js";
import { createRadioButton } from "./gomszab.min.js";

class NavigationBar extends ViewElement{ //kiemeljuk
    /**@type {ViewElement[]} */
    #viewElementList;//privat tul ami tartalmazza a megjenelytendő viewelement leszármazottakat (tabaazat form )

    constructor(){//üres navbar
        super("navbar");//meghívjuk a szülőosztály konstruktorát
        this.#viewElementList=[];//üres tömb
        this.div.addEventListener("change", (e)=>{//feliratkozunk a div change esemenyere (mivel a div radiogombokat fog ztartalmazni, ezert tudjuk figyelni a div-nel hogy melyik rádiógomb van kijelolve)
            const radioButtonValue = e.target.value //elkérjük a target value erteket
            this.activate(radioButtonValue); // meghívjuk az aktivate fuggvenyt a kivalasztott radiogomb ertekevel (a view element azonosítoi lehetnek lásd addview element)
        })
    }

    /**
     * 
     * @param {string} label 
     * @param {ViewElement} viewElement 
     */
    addViewElement(label, viewElement){//navigation barnak def egy fuggvenxt
        this.#viewElementList.push(viewElement);//a bemen
        const div= createRadioButton({id: viewElement.id, name: this.id, label})//csinalunke gy radiogobot eminek az azon a viewelement azon, a lebelje a fuggveny bemeneti param. 
        // és a name az a navbar azonosítoja, radio csoport
        this.div.appendChild(div); //hozzafuzzuk a divhez a radiogomb kreálás visszaerteket (thi.div lást viewelement oszt def)
    }

    /**
     * @override
     * @param {string} value 
     */
    activate(value){//a szulo oszt definial egy aktivate fuggvenyt (lasd viewelement.activate) de a navbar más logikat alkalmaz
        for(const viewElement of this.#viewElementList){//a divn belül lekerjuk a bemeneti parameterrel megegyező id elemet, es kijelöltre állítjuk
            viewElement.activate(value) //VEGIG megyunk a viewelement listen (table form es inport export)        
        }
        this.div.querySelector(`#${value}`).checked = true;//meghívjuk az activate fuggvenyet minden viewelementnek
    }
}

export {NavigationBar} //expoprt a navbart
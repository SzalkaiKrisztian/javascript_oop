import { createTableCell, createTableHeader } from "./gomszab.min.js";
import { AuthorManager } from "./manager.js";
import { ViewElement } from "./viewelement.js";


class TableView extends ViewElement {//tablazat kiterjesztes
    /** @type {AuthorManager} */
    #manager;
    /** @type {HTMLTableSectionElement} */
    #tbody//tabla torzs

    /**
     * 
     * @param {string[]} headerArray
     * @param {string} id 
     * @param {AuthorManager} manager
     */
    constructor(id, headerArray, manager) {
        super(id);//szülo construktor meghivasa
        this.#manager = manager//bemeneti manager
        const table = document.createElement("table")
        this.div.appendChild(table)
        const thead = createTableHeader(headerArray)
        table.appendChild(thead);
        this.#tbody = document.createElement("tbody")
        table.appendChild(this.#tbody)// ez a resz mar megy
        this.#manager.tableCallback = (authorList) => {//manager tablecallbackjét ...
            if (authorList.length == 0) {//ha a lsta ures akkor colspan
                const tr = document.createElement('tr')//tbodyhz
                this.#tbody.appendChild(tr)//tbodyhoz
                const td = createTableCell(tr, "nincs megjelenítendő sor")
                td.colSpan = 3//ures sor ha ures tartalom
            }//bele lehetne tenni else agba a fort
            for (const author of authorList) {//vegigmegyunk az authorlistan
                const tr = document.createElement("tr")//sor+
                this.#tbody.appendChild(tr)//tbodyhoz

                createTableCell(tr, author.name)//+cella name
                createTableCell(tr, author.work)//+cella work
                createTableCell(tr, author.concept)//+cella concept
            }
        }
        this.activateCallback = () => {//activatecallback def
            this.#tbody.innerHTML = ''//tbody tartalam delete
            this.#manager.getAllElement()//meghívjuk a getallt ami meghivja a table callbacket
        }
    }
}

export { TableView }//export table
/** 
 * @typedef {{author: string, title1: string, concepts1: string, title2?: string,  concepts2?: string}} RowspanRowType  
 * @typedef {{author: string, title: string, concepts: string, concepts2?: string}} ColspanRowType
 * @typedef {{name: string, colSpan?: number}} HeaderType
 * @callback VisszaHiv
 * @param {HTMLTableSectionElement}
*/

/** @type {HeaderType[]}  */
const rowspanHeaderArr = [{ name: "Szerző" }, { name: "Mű" }, { name: "Fogalmak" }]
/** @type {HeaderType[]}   */
const colspanHeaderArr = [{ name: "Szerző" }, { name: "Mű" }, { name: "Fogalmak", colSpan: 2 }]

/** @type {RowspanRowType[]}  */
const rowspanBodyArr = [
    {
        author: "Appolliniare",
        title1: "A megsebzett galamb és a szökőkút",
        concepts1: "képvers",
        title2: "Búcsú",
        concepts2: "avantgárd"
    },
    {
        author: "Thomas Mann",
        title1: "Mario és a varázsló",
        concepts1: "kisregény"
    },
    {
        author: "Franz Kafka",
        title1: "A per",
        concepts1: "képvers",
        title2: "Az átvlátozás",
        concepts2: "kisregény"
    }
]



/** @type {ColspanRowType[]} */
const colspanBodyArr = [
    {
        author: "Appolliniare",
        title: "A megsebzett galamb és a szökőkút",
        concepts: "Képvers",
        concepts2: "Emlékezés",
    },
    {
        author: "Appolliniare",
        title: "Búcsú",
        concepts: "Avantgárd"
    },
    {
        author: "Thomas Mann",
        title: "Mario és a varázsló",
        concepts: "Kisregény"
    },
    {
        author: "Franz Kafka",
        title: "A per",
        concepts: "regény"
    },
    {
        author: "Franz Kafka",
        title: "Az átváltozás",
        concepts: "kisregény",
        concepts2: "groteszk"
    }
]

//renderColspanBody(makeTableBodyWithHeader(colspanHeaderArr), colspanBodyArr)
//renderRowspanBody(makeTableBodyWithHeader(rowspanHeaderArr), rowspanBodyArr)

//--------------------------------------orai munka
class Table {
    /**@type {HTMLTableSectionElement} */
    #tbody;
    get tbody() {
        return this.#tbody
    }
    /**@param {HeaderType} tableHeaderArry  */
    constructor(tableHeaderArry) {
        this.#tbody = makeTableBodyWithHeader(tableHeaderArry)
    }
    /**@param {VisszaHiv} paramCallBack  */
    method(paramCallBack) {
        paramCallBack(this.#tbody)
    }
}

class ColSpanTable extends Table {
    /**@param {HeaderType} tableHeaderArry  */
    constructor(tableHeaderArry) {
        super(tableHeaderArry)
    }
    render(colSpanRowType) {
        renderColspanBody(this.tbody, colSpanRowType)
    }
}

class RowSpanTable extends Table {
    /**@param {HeaderType} tableHeaderArry  */
    constructor(tableHeaderArry) {
        super(tableHeaderArry)
    }
    render(RowSpanRowType) {
        renderRowspanBody(this.tbody, RowSpanRowType)
    }
}
//----------------------------------------------
const colSpanTable = new ColSpanTable(colspanHeaderArr)
colSpanTable.render(colspanBodyArr)

const rowSpanTable = new RowSpanTable(rowspanHeaderArr)
rowSpanTable.render(rowspanBodyArr)

const button = document.createElement('button')
button.innerText = "rowspan hozzáadása"
document.body.appendChild(button)
button.addEventListener('click', buttonSorAdd.bind(rowSpanTable))

/**
 * @this RowSpanTable
 * @returns {void}
 */
function buttonSorAdd(){
    /**@type {RowspanRowType} */
    const objektum = {
        author: "Franz Kafka",
        title1: "A per",
        concepts1: "képvers",
        title2: "Az átvlátozás",
        concepts2: "kisregény"
    }
    this.method(function (body) {
        const tr1 = document.createElement('tr')
        body.appendChild(tr1)
        //war
        const td1 = document.createElement('td')
        td1.innerText = objektum.author
        tr1.appendChild(td1)

        //team1
        const td2 = document.createElement('td')
        td2.innerText = objektum.title1
        tr1.appendChild(td2)

        //tem1Size
        const td3 = document.createElement('td')
        td3.innerText = objektum.concepts1
        tr1.appendChild(td3)

        //tem2, tem2Size
        if (objektum.title2 && objektum.concepts2) {
            td1.rowSpan = 2 //kibőviti az elsőt a wart ha van több

            const tr2 = document.createElement('tr')
            body.appendChild(tr2) //egy új sorba fűzzük az új információt, mivwl bővitjük a war 2-re

            const td4 = document.createElement('td')
            td4.innerText = objektum.title2
            tr2.appendChild(td4)

            const td5 = document.createElement('td')
            td5.innerText = objektum.concepts2
            tr2.appendChild(td5)
        }
    })
}
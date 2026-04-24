import { AuthorManager } from "./manager.js";
import { ViewElement } from "./viewelement.js";


class ImportView extends ViewElement{//def inportviewosztalyt kiterjeszti a viewEt
    /**@type {AuthorManager} */
    #manager;//priv manager

    /**
     * 
     * @param {string} id 
     * @param {AuthorManager} manager 
     */
    constructor(id,manager){//constructor definialasa
        super(id)//szülőosztály constructoranak meghivasa
        this.#manager=manager//manager bevitele egyenlő
        const fileInput=document.createElement('input')//input letrehoz
        fileInput.type='file'//tipusa file
        this.div.appendChild(fileInput)//hozzaadas a divhez
        const resultDiv = document.createElement('div')//result diva divhez
        this.div.appendChild(resultDiv)//hozzaadas
        this.#manager.ImporResultCallback=(message)=>{//result div tartalmanak beallitasa
            resultDiv.innerText=message
            setTimeout(()=>{
                resultDiv.innerText=""
            },1500)

        }
        fileInput.addEventListener("change",(e)=>{//input change esemenyere valo feliratkzas
            const file = e.target.files[0];//elkerjuk az esemeny targetjenek a files tulbol az elso elemet
            const reader = new FileReader()//peldanyositjuk a filereadert
            
            reader.readAsText(file, 'UTF-8')//beolvassuk a fajlt, ha sikeres lefut az onload
            
            reader.onload=()=>{//feliratkozunk a rreaderonlod esemenyre. akkor fut le ha a fajl beolvasasa sikeres volt
                /**@type {import(".").AuthorType[]} */
                const result=[]//ures result tomb
                const fileContent = reader.result//elkerjuk a filereader peldany result tulajdonsagat
                const sorok = fileContent.split('\n')//szétvélasztjuk a fajl tartamat soronkent
                for(const sor of sorok){//vegigmegyunk a sorokon
                    const data = sor.split(';')//szetcsipegetjuk adatokra
                    /**@type {import(".").AuthorType} */
                    const authorType = {//deklaralunk egy author tipusu objektumot
                        author: data[0],//elso adata a sornak
                        work: data[1],//masodik
                        concept:data[2]//haramdik
                    }
                    result.push(authorType)//hozzaadjuk az objektumot a result tombhoz
                    
                }
                this.#manager.addElementList(result)//meghivjuk a tombbel az authormanager addelementList methodusat
            }
        })
        const exportButton = document.createElement('button')//letrehozunk egy gombot
        exportButton.innerText='Export'//gomb szoveg
        this.div.appendChild(exportButton)//hozzaadjuk a divhez (viewElement)
        exportButton.addEventListener('click', ()=>{//feliratkozunk a gomb click esemenyere
            const a =document.createElement('a')//+link
            const fileContent = this.#manager.getExportString()//kiiratas stringje
            const file = new Blob([fileContent])//peldanyositunk egy fajlt, amlynek megadunk egy tombot ami tartalmazza az authorok string alakjat csak memoria
            const filrUrl = URL.createObjectURL(file)//letrehozunk egy urlt a blob nak, 
            // megadjuk a linknek a blob urljet->
            a.href=filrUrl
            a.download='export.csv'//letoltendő fajl neve
            a.click()// clickelunk ra alapbol
            URL.revokeObjectURL(a.href)
        })
    }
}
export{ImportView}//export
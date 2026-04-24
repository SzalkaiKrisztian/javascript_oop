/**
 * @callback TableCallback
 * @param {Author[]} authorList
 * @returns {void}
 * 
 * @callback addElementResultCallback
 * @param {string} message
 * @returns {void}
 * 
 * @callback ImporResultCallback
 * @param {string} message
 * @returns {void}
 */
class AuthorManager {//definialjuk a classt
    /** @type {Author[]} */
    #authorList; // privat tul lista

    /** @type {TableCallback}  */
    #tableCallback;//priv table callbakc (lasd getallelement)

    /**
     * @type {addElementResultCallback}
     */
    #addElementResultCallBack//privat (alasd addelement)

    /**@type {ImporResultCallback} */
    #importResultCallback;//def priv tul az importresultcallbacknek (lasd addelementlist)

    /**
     * @param {TableCallback} value
     */
    set tableCallback(value) {//setter a tablecalbacknek (hivjuk a tableban)
        this.#tableCallback = value//ertek a privat
    }
    /**
     * @param {addElementResultCallback} value 
     */
    set addElementResultCallback(value) {//def az add... (hivjuk a formviewben)
        this.#addElementResultCallBack = value//erteket adunk a callébacknek
    }

    /**@param {ImporResultCallback} value  */
    set ImporResultCallback(value){//hivjuk az inportexportban
        this.#importResultCallback=value;
    }

    constructor() {//def constructor
        this.#authorList = []//ures authorlist
    }

    /**
     * 
     * @param {import(".").AuthorType} element 
     */
    addElement(element) {//def az addelement fuggvenyt
        const author = new Author();//+author peldany
        author.id = this.#authorList.length;//hanyadik
        author.name = element.author;//name tul
        author.work = element.work;//work tul
        author.concept = element.concept;//beallitjuk a concept tul
        if (author.validate()) {//validate fuggvenye az authornak lasd author.validate
            this.#authorList.push(author)//ha valid akkor hozzaadjuk a listahoz
            this.#addElementResultCallBack('Sikeres elemfelvétel')
        } else {
            this.#addElementResultCallBack('Nem volt sikeres az elemfelvétel')
        }
    }
    /**
     * 
     * @param {import(".").AuthorType[]} elemList 
     */
    addElementList(elemList) {//def az addelementlist fuggvenyt
        for (const element of elemList) {//vegig az elementlistan
            const author = new Author();//+author peldany
            author.id = this.#authorList.length;//hanyadik
            author.name = element.author;//beallitjuk a concept
            author.work = element.work;//work
            author.concept = element.concept;//concept
            if(author.validate()){//meghivjuk a validate
                this.#authorList.push(author)//ha valid akkor push
                this.#importResultCallback('Sikeres volt.')
            }else{
                this.#addElementResultCallBack('Sikertelen muvelet')
                break;//megall ha sikertelen
            }
        }
    }

    /**
     * @returns {void}
     */
    getAllElement() {//def a getallelement fugg
        this.#tableCallback(this.#authorList);//meghivjuk a tablecallbacket (implementáció, lasd table)
    }
    /**
     * @returns {string}
     */
    getExportString(){//def a ggetexortcontent/string
        const result=[]//ures tomb
        for(const author of this.#authorList){//vegig az authorlist tul ertekein
            result.push(`${author.name};${author.work};${author.concept}`)//hozzaadjuk a tombhoz a string reprezentációját az entitásnak
        }
        return result.join("\n")//joinoljuk egy sortoressel
    }
    
}

class Author { //definialunke egy author osszetett adat
    /**@type {string} */
    #id;//privat azon
    /**@type {string} */
    #name;//privat name
    /**@type {string} */
    #work;//privat work
    /**@type {string} */
    #concept; //privat name

    get id() { //getter az azonnak
        return this.#id//vissza id
    }
    get name() {
        return this.#name//vissza name
    }
    get work() {
        return this.#work//vissza work
    }
    get concept() {
        return this.#concept//vissza concept
    }

    set id(value) {//setter
        this.#id = value//beallitjuk
    }
    set name(value) {//setter
        this.#name = value//beallitjuk
    }
    set work(value) {//setter
        this.#work = value//beallitjuk
    }
    set concept(value) {//setter
        this.#concept = value//beallitjuk
    }
    /**@returns {boolean} */
    validate() {//def valid
        return this.#name && this.#concept && this.#work //ha minegyik helyes akkor igaz, kulonben hamis
    }
}

export { AuthorManager }
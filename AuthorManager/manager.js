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
class AuthorManager {
    /** @type {Author[]} */
    #authorList;

    /** @type {TableCallback}  */
    #tableCallback;

    /**
     * @type {addElementResultCallback}
     */
    #addElementResultCallBack

    /**@type {ImporResultCallback} */
    #importResultCallback;

    /**
     * @param {TableCallback} value
     */
    set tableCallback(value) {
        this.#tableCallback = value
    }
    /**
     * @param {addElementResultCallback} value 
     */
    set addElementResultCallback(value) {
        this.#addElementResultCallBack = value
    }

    /**@param {ImporResultCallback} value  */
    set ImporResultCallback(value){
        this.#importResultCallback=value;
    }

    constructor() {
        this.#authorList = []
    }

    /**
     * 
     * @param {import(".").AuthorType} element 
     */
    addElement(element) {
        const author = new Author();
        author.id = this.#authorList.length;
        author.name = element.author;
        author.work = element.work;
        author.concept = element.concept;
        if (author.validate()) {
            this.#authorList.push(author)
            this.#addElementResultCallBack('Sikeres elemfelvétel')
        } else {
            this.#addElementResultCallBack('Nem volt sikeres az elemfelvétel')
        }
    }
    /**
     * 
     * @param {import(".").AuthorType[]} elemList 
     */
    addElementList(elemList) {
        for (const element of elemList) {
            const author = new Author();
            author.id = this.#authorList.length;
            author.name = element.author;
            author.work = element.work;
            author.concept = element.concept;
            if(author.validate()){
                this.#authorList.push(author)
                this.#importResultCallback('Sikeres volt.')
            }else{
                this.#addElementResultCallBack('Sikertelen muvelet')
                break;
            }
        }
    }

    /**
     * @returns {void}
     */
    getAllElement() {
        this.#tableCallback(this.#authorList);
    }
    /**
     * @returns {string}
     */
    getExportString(){
        const result=[]
        for(const author of this.#authorList){
            result.push(`${author.name};${author.work};${author.concept}`)
        }
        return result.join("\n")
    }
    
}

class Author {
    /**@type {string} */
    #id;
    /**@type {string} */
    #name;
    /**@type {string} */
    #work;
    /**@type {string} */
    #concept;

    get id() {
        return this.#id
    }
    get name() {
        return this.#name
    }
    get work() {
        return this.#work
    }
    get concept() {
        return this.#concept
    }

    set id(value) {
        this.#id = value
    }
    set name(value) {
        this.#name = value
    }
    set work(value) {
        this.#work = value
    }
    set concept(value) {
        this.#concept = value
    }
    /**@returns {boolean} */
    validate() {
        return this.#name && this.#concept && this.#work
    }
}

export { AuthorManager }
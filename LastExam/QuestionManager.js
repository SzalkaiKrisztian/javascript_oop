/**
 * @callback RenderCallBack
 * @param {Question[]} list
 * @returns {void}
 */
class Question{
    /**@type {number} */
    #id;
    /**@type {string} */
    #question;
    /**@type {string[]} */
    #answers;
    /**@type {string} */
    #rightanswer;
    
    //--------------------------------------

    /**@returns {number} */
    get id(){
        return this.#id
    }

    /**@returns {string} */
    get question(){
        return this.#question
    }

    /**@param {number} value  */
    set id(value){
        this.#id=value
    }

    /**@param {string} value  */
    set question(value){
        this.#question=value
    }
}

class QuestionManager{
    /**@type {Question[]} */
    #questionList;

    /**@type {RenderCallBack} */
    #renderCallBack;

    constructor(){
        
    }
}
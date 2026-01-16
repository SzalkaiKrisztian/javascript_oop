//
class Student{
    constructor(name){
        this.name=name,
        this.askedQuestionNumber=0
    }
    askedQuestion(){
        console.log("???")
        this.askedQuestionNumber++
    }
}

const stu1= new Student('Krisztian')
console.log(stu1)

stu1.askedQuestion()
console.log(stu1)

class StudentWithWork extends Student{
    constructor(name){
        super(name)
        this.workDone=0
    }
    doWork(){
        this.workDone++
    }
}
const stuWW=new StudentWithWork("Gusztáv")
stuWW.askedQuestion()
console.log(stuWW)

//meghiv, kiir
stuWW.doWork()
stuWW.askedQuestion()
console.log(stuWW)
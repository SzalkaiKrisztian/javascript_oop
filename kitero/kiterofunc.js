//osztály
function Student(name){
    this.name=name,
    this.askedQuestionNumber=0
}

//osztályon beluli methodus
Student.prototype.askedQuestion=function(){
    console.log("???")
    this.askedQuestionNumber++
}

//példányosítom
const stu1= new Student('Krisztian')
console.log(stu1)

//meghív, kiirat
stu1.askedQuestion()
console.log(stu1)

//uj példány
const stu2 =new Student('bom')
console.log(stu2)

//leszármazott osztály, és tulajdonságok átadása
function StudentWithWork(name){
    Student.call(this,name)
    this.workDone=0

}
//leszármazott osztáylon belüli methodusok, és az ősosztály methodusainak átadása
Object.setPrototypeOf(StudentWithWork.prototype,Student.prototype)
//sorrend:                aminek beadod        |  amitől átveszed

//+method
StudentWithWork.prototype.doWork=function(){
    this.workDone++
}

//peldany,kiir
const stuWW=new StudentWithWork("Gusztáv")
stuWW.askedQuestion()
console.log(stuWW)

//meghiv, kiir
stuWW.doWork()
console.log(stuWW)
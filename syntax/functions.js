//function muvelet(a,b){
//   return a+b;
//}
const muvelet=(a,b,callback)=>{
    const result =callback(a,b)
    //return {
    //    result:result
    //}
    return {result}
}
const muveletLetrehoz=(jel)=>{
    if(jel == '+'){
        return (a,b)=>{return a+b}
    }
}
const fv=muveletLetrehoz('+')
console.log(fv(1,2))

export{muvelet,muveletLetrehoz}
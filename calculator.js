class Calculator{
   constructor (){}

add = (a,b)=>{
   
    if (a == undefined || b == undefined){
        throw new Error("Number could not be empty")
    }else if(isNaN(parseFloat(a)) || isNaN(parseFloat(b))){
        throw new Error("input is not a number")
    }else{
    return a + b
    }
}
subtract= (a,b)=>{

    if (a == undefined || b == undefined){
        throw new Error("Number could not be empty")
    }else if(isNaN(parseFloat(a)) || isNaN(parseFloat(b))){
        throw new Error("input is not a number")
    }else{
    return a - b
    }
}

multiply = (a,b)=>{
if (a == undefined || b == undefined){
        throw new Error("Number could not be empty")
    }else if(isNaN(parseFloat(a)) || isNaN(parseFloat(b))){
        throw new Error("input is not a number")
    }else{
    return a * b
    }
}
divide = (a,b)=>{
    if (a == undefined || b == undefined){
        throw new Error("Number could not be empty")
    }else if(isNaN(parseFloat(a)) || isNaN(parseFloat(b))){
        throw new Error("input is not a number")
    }else if (b === 0){
        throw new Error("Divide by 0 is Undefined")
    }else {
        return a / b
    }
}

}

module.exports =  Calculator

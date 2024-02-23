// function


function sayHello(){
    console.log('sumit');
}

sayHello()

//parameters 
function add(a , b){
   // console.log(a+b);
}

add(5,10)




function addNumbers(){
    let ans=0
    for(let i = 0 ; i <arguments.length;i++)
    ans = ans + arguments[i]
    return ans 
}


let result = addNumbers(1,2,3,4,)
console.log(result);
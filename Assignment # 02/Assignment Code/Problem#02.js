const findValue = (arr,x,i)=>{

    if (arr.length <= 0) {       
       return console.log("function not valid");
    }

    if(i >= arr.length){
        return console.log("false", false);
    }

    if (arr[i] == x) {       
        return console.log("true" , true);
    }

    if (arr[i] !== x) {
        return findValue(arr, x , i+1)
    }

}

let arr = [2,3,4,5,6] // array
let i = 0 // index
let value = 8 // value

findValue( arr, value , i )

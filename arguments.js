
function add(num1, num2){
    sum=0;
    for(var i=0; i<arguments.length;i++){
        const num=arguments[i];
        var sum=num+sum;
    }
    return sum;

}

var result=add(3, 5, 6, 7,8); //number of input value is more than variable declare in the function
console.log("total sum is :" ,result);
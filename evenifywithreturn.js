function evenify(num){
    var result;
    if(num%2==0){
    result= num;

   }
   else{
    
    //double all odd number
       result= num*2;
   }
   return result;
}
function evenify_All(nums){
    var evenArray=[];
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        //want to push array operation
        var result=evenify(num);
        evenArray.push(result);
        //console.log(num*2);
        
        
        

    }
    return evenArray;
}

var lol=evenify(3);
var square=lol*lol;
console.log('Square',square);

var nums=[5, 12, 89, 45];
var nums_even=evenify_All(nums);
console.log(nums_even);



